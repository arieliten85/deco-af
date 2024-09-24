import { useState, useEffect } from "react";
import { Search, ChevronRight } from "lucide-react";
import { product } from "../constants/productFetch";
import { category } from "../constants/categoryFetch";

export default function ProductDetails() {
  const [busqueda, setBusqueda] = useState("");
  const [filtroPrecio, setFiltroPrecio] = useState(1500);
  const [filtroCategoria, setFiltroCategoria] = useState("Todas");
  const [ordenamiento, setOrdenamiento] = useState("mayorMenor");
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);
  const [hayFiltrosAplicados, setHayFiltrosAplicados] = useState(false);

  useEffect(() => {
    // Comprobar si hay filtros aplicados
    const filtrosActivos =
      busqueda !== "" ||
      filtroPrecio < 1500 ||
      filtroCategoria !== "Todas" ||
      ordenamiento !== "mayorMenor";
    setHayFiltrosAplicados(filtrosActivos);
  }, [busqueda, filtroPrecio, filtroCategoria, ordenamiento]);

  const productosFiltrados = product.filter((producto) => {
    const dentroDelPrecio = producto.precio <= filtroPrecio;
    const incluyeFiltroCategoria =
      filtroCategoria === "Todas" || producto.categoria === filtroCategoria;
    const incluyeBusqueda = producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase());

    return dentroDelPrecio && incluyeFiltroCategoria && incluyeBusqueda;
  });

  // Ordenar los productos
  const productosOrdenados = productosFiltrados.sort((a, b) => {
    if (ordenamiento === "mayorMenor") {
      return b.precio - a.precio; // Ordenar de mayor a menor
    } else {
      return a.precio - b.precio; // Ordenar de menor a mayor
    }
  });

  // Función para limpiar filtros
  const limpiarFiltros = () => {
    setBusqueda("");
    setFiltroPrecio(1500);
    setFiltroCategoria("Todas");
    setOrdenamiento("mayorMenor");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Catálogo de Productos
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <a href="#" className="hover:text-gray-900">
            Inicio
          </a>
          <ChevronRight className="h-4 w-4 mx-2" />
          <a href="#" className="hover:text-gray-900">
            Catálogo
          </a>
          {productoSeleccionado && (
            <>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-gray-900">
                {productoSeleccionado.nombre}
              </span>
            </>
          )}
        </nav>

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
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow sticky top-8">
              <div className="p-4 border-b">
                <h2 className="text-lg font-bold">Filtros</h2>
              </div>
              <div className="p-4 space-y-6">
                <div>
                  <label
                    htmlFor="precio"
                    className="text-sm font-medium text-gray-700"
                  >
                    Precio máximo: ${filtroPrecio}
                  </label>
                  <input
                    id="precio"
                    type="range"
                    min={0}
                    max={1500}
                    step={10}
                    value={filtroPrecio}
                    onChange={(e) => setFiltroPrecio(Number(e.target.value))}
                    className="mt-2 w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="categoria"
                    className="text-sm font-medium text-gray-700"
                  >
                    Categoría
                  </label>
                  <select
                    id="categoria"
                    value={filtroCategoria}
                    onChange={(e) => setFiltroCategoria(e.target.value)}
                    className="mt-1 border rounded px-3 py-2 w-full"
                  >
                    {category.map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="ordenamiento"
                    className="text-sm font-medium text-gray-700"
                  >
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
              </div>
              {/* Mostrar botón para limpiar filtros solo si hay filtros aplicados */}
              {hayFiltrosAplicados && (
                <div className="p-4 border-t">
                  <button
                    onClick={limpiarFiltros}
                    className="bg-red-600 text-white py-2 px-4 rounded w-full"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              )}
            </div>
          </aside>

          <div className="lg:col-span-3">
            {productoSeleccionado ? (
              <div className="bg-white rounded-lg shadow">
                <div className="p-4 border-b">
                  <h2 className="text-2xl">{productoSeleccionado.nombre}</h2>
                  <p>Categoría: {productoSeleccionado.categoria}</p>
                </div>
                <div className="p-4 space-y-4">
                  <img
                    src={productoSeleccionado.imagen}
                    alt={productoSeleccionado.nombre}
                    className="w-full h-64  rounded-lg"
                  />
                  <p className="text-xl font-semibold">
                    ${productoSeleccionado.precio}
                  </p>
                  <p className="text-gray-600">Descripción del producto...</p>
                </div>
                <div className="p-4 border-t">
                  <button
                    onClick={() => setProductoSeleccionado(null)}
                    className="bg-blue-600 text-white py-2 px-4 rounded"
                  >
                    Volver a la lista
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {productosOrdenados.length > 0 ? (
                  productosOrdenados.map((producto) => (
                    <div
                      key={producto.id}
                      className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                      <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="w-full"
                      />
                      <div className="p-4">
                        <h3 className="text-lg font-bold">{producto.nombre}</h3>
                        <p className="text-gray-600">{producto.categoria}</p>
                        <p className="text-xl font-semibold">
                          ${producto.precio}
                        </p>
                      </div>
                      <div className="p-4 border-t">
                        <button
                          onClick={() => setProductoSeleccionado(producto)}
                          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
                        >
                          Ver detalles
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>
                    No hay productos que coincidan con los filtros
                    seleccionados.
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export function Card({ children, className }) {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>
  );
}

export function CardHeader({ children }) {
  return <div className="p-4 border-b">{children}</div>;
}

export function CardTitle({ children }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

export function CardDescription({ children }) {
  return <p className="text-gray-600">{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export function CardFooter({ children }) {
  return <div className="p-4 border-t">{children}</div>;
}
