import { useState, useCallback, useEffect } from "react";
import { Search, ChevronRight } from "lucide-react";
import { category as categorias } from "../components/constants/categoryFetch";
import { product } from "../components/constants/productFetch";
import { Link, useParams } from "react-router-dom";
import { Button } from "../components/common/UIComponents";

const MAX_PRICE = 1500;

const ProductCatalogPage = () => {
  const { category: categoryParam } = useParams(); // Obtener el valor de la URL
  const [busqueda, setBusqueda] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState(MAX_PRICE);
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [ordenamiento, setOrdenamiento] = useState("mayorMenor");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  // Establecer el filtro de categoría según la URL (o "Todas" si no hay parámetro)
  useEffect(() => {
    if (categorias.includes(categoryParam)) {
      setFiltroCategoria(categoryParam);
    } else {
      setFiltroCategoria("Todas");
    }
  }, [categoryParam]);

  const hayFiltrosAplicados = useCallback(() => {
    return (
      busqueda !== "" ||
      filtroPrecio < MAX_PRICE ||
      filtroCategoria !== "Todas" ||
      ordenamiento !== "mayorMenor"
    );
  }, [busqueda, filtroPrecio, filtroCategoria, ordenamiento]);

  // Filtrar productos según los filtros seleccionados
  const productosFiltrados = product.filter((producto) => {
    const dentroDelPrecio = producto.precio <= filtroPrecio;
    const incluyeFiltroCategoria =
      filtroCategoria === "Todas" || producto.categoria === filtroCategoria;
    const incluyeBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return dentroDelPrecio && incluyeFiltroCategoria && incluyeBusqueda;
  });

  // Ordenar los productos filtrados según el criterio seleccionado
  const productosOrdenados = [...productosFiltrados].sort((a, b) => {
    return ordenamiento === "mayorMenor"
      ? b.precio - a.precio
      : a.precio - b.precio;
  });

  // Función para limpiar los filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setFiltroPrecio(MAX_PRICE);
    setFiltroCategoria("Todas");
    setOrdenamiento("mayorMenor");
  };

  const seleccionarProducto = (producto) => {
    setProductoSeleccionado(producto);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        {/* VISTA INDICADOR DE PAGINA */}
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-gray-900">
            Inicio
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <Link to="/catalogo" className="hover:text-gray-900">
            Catálogo
          </Link>
          {productoSeleccionado && (
            <>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900">
                {productoSeleccionado.nombre}
              </span>
            </>
          )}
        </nav>

        {/* VISTA BUSCADOR */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-10 pr-4 py-2 w-full border rounded"
              type="search"
              placeholder="Buscar productos..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* VISTA FILTROS */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow sticky top-8">
              <div className="p-4 border-b">
                <h2 className="text-lg font-bold">Filtros</h2>
              </div>
              <div className="p-4 space-y-6">
                <FiltroPrecio
                  filtroPrecio={filtroPrecio}
                  setFiltroPrecio={setFiltroPrecio}
                />
                <FiltroCategoria
                  filtroCategoria={filtroCategoria}
                  setFiltroCategoria={setFiltroCategoria}
                  categorias={categorias}
                />
                <FiltroOrdenamiento
                  ordenamiento={ordenamiento}
                  setOrdenamiento={setOrdenamiento}
                />
              </div>
              {hayFiltrosAplicados() && (
                <div className="p-4 border-t">
                  <button
                    onClick={limpiarFiltros}
                    className="bg-primary-gray text-white py-2 px-4 rounded w-full"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </div>
          </aside>

          {/* VISTA PRODUCTOS */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productosOrdenados.length > 0 ? (
                productosOrdenados.map((producto) => (
                  <ProductoCard
                    key={producto.id}
                    producto={producto}
                    seleccionarProducto={seleccionarProducto}
                  />
                ))
              ) : (
                <p>
                  No hay productos que coincidan con los filtros seleccionados.
                </p>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const FiltroPrecio = ({ filtroPrecio, setFiltroPrecio }) => (
  <div>
    <label htmlFor="precio" className="text-sm font-medium text-gray-700">
      Precio máximo: ${filtroPrecio}
    </label>
    <input
      id="precio"
      type="range"
      min={0}
      max={MAX_PRICE}
      step={10}
      value={filtroPrecio}
      onChange={(e) => setFiltroPrecio(Number(e.target.value))}
      className="mt-2 w-full appearance-none h-2 bg-gray-200 rounded-lg cursor-pointer"
      style={{
        background: `linear-gradient(to right, #FFA500 ${
          (filtroPrecio / MAX_PRICE) * 100
        }%, #e5e7eb ${(filtroPrecio / MAX_PRICE) * 100}%)`,
      }}
    />
  </div>
);

const FiltroCategoria = ({
  filtroCategoria,
  setFiltroCategoria,
  categorias,
}) => (
  <div>
    <label htmlFor="categoria" className="text-sm font-medium text-gray-700">
      Categoría
    </label>
    <select
      id="categoria"
      value={filtroCategoria}
      onChange={(e) => setFiltroCategoria(e.target.value)}
      className="mt-1 border rounded px-3 py-2 w-full"
    >
      {categorias.map((categoria) => (
        <option key={categoria} value={categoria}>
          {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

const FiltroOrdenamiento = ({ ordenamiento, setOrdenamiento }) => (
  <div>
    <label htmlFor="ordenamiento" className="text-sm font-medium text-gray-700">
      Ordenar por precio
    </label>
    <select
      id="ordenamiento"
      value={ordenamiento}
      onChange={(e) => setOrdenamiento(e.target.value)}
      className="mt-1 border rounded px-3 py-2 w-full"
    >
      <option value="mayorMenor">De mayor a menor precio</option>
      <option value="menorMayor">De menor a mayor precio</option>
    </select>
  </div>
);

const ProductoCard = ({ producto, seleccionarProducto }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img
      src={producto.imagenes?.principal.url}
      alt={producto.nombre}
      className="w-full"
    />
    <div className="p-4 flex flex-col justify-between">
      <h3 className="text-lg font-bold">{producto.nombre}</h3>
      <p className="text-xl font-semibold">${producto.precio}</p>
    </div>
    <div className="p-4 border-t">
      <Link to={`/producto/${producto.id}`}>
        <Button
          onClick={() => seleccionarProducto(producto)}
          className="bg-orange-500 text-white rounded-md hover:bg-orange-600 py-2 px-4 rounded w-full"
        >
          Ver detalles
        </Button>
      </Link>
    </div>
  </div>
);

export default ProductCatalogPage;
