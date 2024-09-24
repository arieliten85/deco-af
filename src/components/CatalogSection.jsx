import { Button, Card } from "./common/UIComponents";
import { ArrowRight } from "lucide-react";
import { catalogo } from "./constants/catalogItems";

export const CatalogSection = () => {
  return (
    <section id="productos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-[#E64A19] font-semibold tracking-wide uppercase">
            Catálogo
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Productos Destacados
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Descubre nuestra selección de productos que darán vida a tus
            espacios.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {catalogo.map((product, index) => (
              <Card
                key={index}
                className="flex flex-col items-center bg-white shadow-lg rounded-lg"
              >
                <div className="relative w-full h-64 mb-4">
                  <img
                    src={product.img}
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-center px-4 mb-4">
                  {product.text}
                </p>
                <Button className="mt-auto mb-4 flex items-center bg-orange-500 text-white rounded-md hover:bg-orange-600">
                  Ver detalles <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
