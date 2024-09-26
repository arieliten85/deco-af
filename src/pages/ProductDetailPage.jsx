import { useEffect, useState } from "react";
import { Button, Card } from "../components/common/UIComponents";
import { useParams } from "react-router-dom";
import { product } from "../components/constants/productFetch";
import MyBreadcrumbs from "../components/MyBreadcrumbs";

export default function ProductDetailPage() {
  const { nombre } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [productDetails, setProductDetails] = useState(null);

  useEffect(() => {
    const filteredProduct = product.find((item) => {
      return (
        item.nombre.toLowerCase().replace(/ /g, "-") ===
        nombre.replace(/ /g, "-")
      );
    });

    setProductDetails(filteredProduct || null);
  }, [nombre]);

  if (!productDetails) {
    return <div>No se encontró el producto.</div>;
  }

  const {
    imagenes = {},
    nombre: nombreProducto,
    precio,
    descripcion,
  } = productDetails;
  const primaryImage = imagenes.principal?.url;
  const additionalImages = imagenes.adicionales?.map((img) => img.url) || [];

  const handleImageSelect = (index) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="w-full px-4 py-8">
      <MyBreadcrumbs />
      <Card className="overflow-hidden mx-auto max-w-6xl">
        <CardContent className="p-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ImageGallery
              selectedImageIndex={selectedImageIndex}
              additionalImages={additionalImages}
              primaryImage={primaryImage}
              onImageSelect={handleImageSelect}
            />
            <ProductInfo
              name={nombreProducto}
              price={precio}
              description={descripcion}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function ImageGallery({
  selectedImageIndex,
  additionalImages,
  primaryImage,
  onImageSelect,
}) {
  return (
    <div className="flex flex-col  md:flex-row-reverse  md:gap-3">
      <div className="flex-1 mb-4 md:mb-0 md:mr-4">
        <div className="aspect-square relative">
          <img
            src={additionalImages[selectedImageIndex] || primaryImage}
            alt={`Producto - Imagen ${selectedImageIndex + 1}`}
            className="object-cover rounded-lg w-full h-full"
          />
        </div>
      </div>

      <div className="flex md:flex-col md:space-y-2   mobile-thumbnails">
        {additionalImages.map((img, index) => (
          <button
            key={index}
            className={`flex-shrink-0 w-24 h-24 rounded-md overflow-hidden transition-transform transform ${
              selectedImageIndex === index
                ? "ring-2 ring-primary scale-105"
                : "hover:scale-105"
            } mx-1`}
            onClick={() => onImageSelect(index)}
            aria-label={`Seleccionar imagen ${index + 1}`}
          >
            <img
              src={img}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function ProductInfo({ name, price, description }) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>{" "}
        <p className="text-2xl font-semibold mt-2">${price}</p>{" "}
      </div>

      <p className="text-gray-600">{description}</p>

      <Button className="w-full mt-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-md hover:bg-orange-600">
        Consultar
      </Button>

      <ProductFeatures />
    </div>
  );
}

function ProductFeatures() {
  return (
    <div className="space-y-4 border-t pt-4">
      <h3 className="font-semibold text-lg">Características principales:</h3>{" "}
      <ul className="list-disc list-inside space-y-2 text-sm text-gray-600">
        <li>Características específicas del producto</li>
        <li>Otra característica importante</li>
        <li>Y otra más</li>
      </ul>
    </div>
  );
}
function CardContent({ className, children, ...props }) {
  return (
    <div className={cn("p-4", className)} {...props}>
      {children}
    </div>
  );
}

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
