import img01 from "../../assets/catalogo/img01.jpeg";
import img02 from "../../assets/catalogo/img02.jpeg";
import img03 from "../../assets/catalogo/img03.jpeg";
import img04 from "../../assets/catalogo/img04.jpeg";
import img05 from "../../assets/catalogo/img05.jpeg";
import img06 from "../../assets/catalogo/img06.jpeg";
import img07 from "../../assets/catalogo/img07.jpeg";
import img08 from "../../assets/catalogo/img08.jpeg";
import img09 from "../../assets/catalogo/img09.jpeg";
import img10 from "../../assets/catalogo/img10.jpeg";
import img11 from "../../assets/catalogo/img11.jpeg";
import img12 from "../../assets/catalogo/img12.jpeg";
import img13 from "../../assets/catalogo/img13.jpeg";
import img14 from "../../assets/catalogo/img14.jpeg";
import img15 from "../../assets/catalogo/img15.jpeg";
import img16 from "../../assets/catalogo/img16.jpeg";
import img17 from "../../assets/catalogo/img17.jpeg";
import img18 from "../../assets/catalogo/img18.jpeg";
import img19 from "../../assets/catalogo/img19.jpeg";
import img20 from "../../assets/catalogo/img20.jpeg";
import img21 from "../../assets/catalogo/img21.jpeg";

export const product = [
  {
    id: 1,
    nombre: "Universidad de Miami",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 1299,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img01,
      },
      adicionales: [],
    },
  },
  {
    id: 2,
    nombre: "EJS NAILS",
    precio: 899,
    categoria: "cateles",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    imagenes: {
      principal: {
        url: img02,
        alt: "Vista frontal del Smartphone Galaxy Z",
      },
      adicionales: [
        {
          url: img02,
          alt: "Vista trasera del Smartphone Galaxy Z",
          order: 1,
        },
        {
          url: img02,
          alt: "Vista lateral del Smartphone Galaxy Z",
          order: 2,
        },
        {
          url: img02,
          alt: "Vista de la pantalla del Smartphone Galaxy Z",
          order: 3,
        },
      ],
    },
  },
  {
    id: 3,
    nombre: "Camiseta Vintage",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 39,
    categoria: "ropa",
    imagenes: {
      principal: {
        url: img03,
        alt: "Camiseta Vintage",
      },
      adicionales: [
        {
          url: img03,
          alt: "Vista lateral de la Camiseta Vintage",
          order: 1,
        },
        {
          url: img03,
          alt: "Vista trasera de la Camiseta Vintage",
          order: 2,
        },
        {
          url: img03,
          alt: "Vista de la Camiseta Vintage en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 4,
    nombre: "Zapatillas Runner",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 129,
    categoria: "zapatos",
    imagenes: {
      principal: {
        url: img04,
        alt: "Zapatillas Runner",
      },
      adicionales: [
        {
          url: img04,
          alt: "Vista lateral de las Zapatillas Runner",
          order: 1,
        },
        {
          url: img04,
          alt: "Vista superior de las Zapatillas Runner",
          order: 2,
        },
        {
          url: img04,
          alt: "Vista trasera de las Zapatillas Runner",
          order: 3,
        },
      ],
    },
  },
  {
    id: 5,
    nombre: "Libro: El Arte de la Guerra",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 24,
    categoria: "libros",
    imagenes: {
      principal: {
        url: img05,
        alt: "Portada del libro El Arte de la Guerra",
      },
      adicionales: [
        {
          url: img05,
          alt: "Contraportada del libro El Arte de la Guerra",
          order: 1,
        },
        {
          url: img05,
          alt: "Página interior del libro El Arte de la Guerra",
          order: 2,
        },
        {
          url: img05,
          alt: "Vista del libro abierto El Arte de la Guerra",
          order: 3,
        },
      ],
    },
  },
  {
    id: 6,
    nombre: "Auriculares Inalámbricos",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 199,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img06,
        alt: "Auriculares Inalámbricos",
      },
      adicionales: [
        {
          url: img06,
          alt: "Vista lateral de los Auriculares Inalámbricos",
          order: 1,
        },
        {
          url: img06,
          alt: "Auriculares en su estuche de carga",
          order: 2,
        },
        {
          url: img06,
          alt: "Vista de los Auriculares Inalámbricos en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 7,
    nombre: "Reloj Smart",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 299,
    categoria: "smartwatches",
    imagenes: {
      principal: {
        url: img07,
        alt: "Reloj Smart",
      },
      adicionales: [
        {
          url: img07,
          alt: "Vista trasera del Reloj Smart",
          order: 1,
        },
        {
          url: img07,
          alt: "Vista lateral del Reloj Smart",
          order: 2,
        },
        {
          url: img07,
          alt: "Reloj Smart en la muñeca",
          order: 3,
        },
      ],
    },
  },
  {
    id: 8,
    nombre: "Chaqueta de Cuero",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 89,
    categoria: "ropa",
    imagenes: {
      principal: {
        url: img08,
        alt: "Chaqueta de Cuero",
      },
      adicionales: [
        {
          url: img08,
          alt: "Vista de la Chaqueta de Cuero por detrás",
          order: 1,
        },
        {
          url: img08,
          alt: "Vista lateral de la Chaqueta de Cuero",
          order: 2,
        },
        {
          url: img08,
          alt: "Chaqueta de Cuero en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 9,
    nombre: "Botas de Invierno",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 149,
    categoria: "zapatos",
    imagenes: {
      principal: {
        url: img09,
        alt: "Botas de Invierno",
      },
      adicionales: [
        {
          url: img09,
          alt: "Vista lateral de las Botas de Invierno",
          order: 1,
        },
        {
          url: img09,
          alt: "Vista trasera de las Botas de Invierno",
          order: 2,
        },
        {
          url: img09,
          alt: "Botas de Invierno en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 10,
    nombre: "Libro: 1984",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 22,
    categoria: "libros",
    imagenes: {
      principal: {
        url: img10,
        alt: "Portada del libro 1984",
      },
      adicionales: [
        {
          url: img10,
          alt: "Contraportada del libro 1984",
          order: 1,
        },
        {
          url: img10,
          alt: "Página interior del libro 1984",
          order: 2,
        },
        {
          url: img10,
          alt: "Vista del libro abierto 1984",
          order: 3,
        },
      ],
    },
  },
  {
    id: 11,
    nombre: "Tablet Pro 12",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 599,
    categoria: "tablets",
    imagenes: {
      principal: {
        url: img11,
        alt: "Tablet Pro 12",
      },
      adicionales: [
        {
          url: img11,
          alt: "Vista lateral de la Tablet Pro 12",
          order: 1,
        },
        {
          url: img11,
          alt: "Vista trasera de la Tablet Pro 12",
          order: 2,
        },
        {
          url: img11,
          alt: "Tablet Pro 12 en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 12,
    nombre: "Cámara Digital X100",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 799,
    categoria: "camaras",
    imagenes: {
      principal: {
        url: img12,
        alt: "Cámara Digital X100",
      },
      adicionales: [
        {
          url: img12,
          alt: "Vista lateral de la Cámara Digital X100",
          order: 1,
        },
        {
          url: img12,
          alt: "Vista trasera de la Cámara Digital X100",
          order: 2,
        },
        {
          url: img12,
          alt: "Cámara Digital X100 en un set de fotografía",
          order: 3,
        },
      ],
    },
  },
  {
    id: 13,
    nombre: "Teclado Mecánico RGB",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 89,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img13,
        alt: "Teclado Mecánico RGB",
      },
      adicionales: [
        {
          url: img13,
          alt: "Vista lateral del Teclado Mecánico RGB",
          order: 1,
        },
        {
          url: img13,
          alt: "Vista de las teclas del Teclado Mecánico RGB",
          order: 2,
        },
        {
          url: img13,
          alt: "Teclado Mecánico RGB iluminado",
          order: 3,
        },
      ],
    },
  },
  {
    id: 14,
    nombre: "Silla Ergonómica",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 249,
    categoria: "muebles",
    imagenes: {
      principal: {
        url: img14,
        alt: "Silla Ergonómica",
      },
      adicionales: [
        {
          url: img14,
          alt: "Vista lateral de la Silla Ergonómica",
          order: 1,
        },
        {
          url: img14,
          alt: "Vista trasera de la Silla Ergonómica",
          order: 2,
        },
        {
          url: img14,
          alt: "Silla Ergonómica en un ambiente de oficina",
          order: 3,
        },
      ],
    },
  },
  {
    id: 15,
    nombre: "Monitor 4K Ultra",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 499,
    categoria: "monitores",
    imagenes: {
      principal: {
        url: img15,
        alt: "Monitor 4K Ultra",
      },
      adicionales: [
        {
          url: img15,
          alt: "Vista lateral del Monitor 4K Ultra",
          order: 1,
        },
        {
          url: img15,
          alt: "Vista trasera del Monitor 4K Ultra",
          order: 2,
        },
        {
          url: img15,
          alt: "Monitor 4K Ultra en un set de trabajo",
          order: 3,
        },
      ],
    },
  },
  {
    id: 16,
    nombre: "Juego: Aventura Épica",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 59,
    categoria: "videojuegos",
    imagenes: {
      principal: {
        url: img16,
        alt: "Juego: Aventura Épica",
      },
      adicionales: [
        {
          url: img16,
          alt: "Portada del juego Aventura Épica",
          order: 1,
        },
        {
          url: img16,
          alt: "Vista de la caja del juego Aventura Épica",
          order: 2,
        },
        {
          url: img16,
          alt: "Captura de pantalla del juego Aventura Épica",
          order: 3,
        },
      ],
    },
  },
  {
    id: 17,
    nombre: "Estuche para Laptop",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 39,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img17,
        alt: "Estuche para Laptop",
      },
      adicionales: [
        {
          url: img17,
          alt: "Vista lateral del Estuche para Laptop",
          order: 1,
        },
        {
          url: img17,
          alt: "Vista de la parte interior del Estuche para Laptop",
          order: 2,
        },
        {
          url: img17,
          alt: "Estuche para Laptop en uso",
          order: 3,
        },
      ],
    },
  },
  {
    id: 18,
    nombre: "Altavoz Bluetooth",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 99,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img18,
        alt: "Altavoz Bluetooth",
      },
      adicionales: [
        {
          url: img18,
          alt: "Vista lateral del Altavoz Bluetooth",
          order: 1,
        },
        {
          url: img18,
          alt: "Altavoz Bluetooth en uso",
          order: 2,
        },
        {
          url: img18,
          alt: "Vista del Altavoz Bluetooth desde arriba",
          order: 3,
        },
      ],
    },
  },
  {
    id: 19,
    nombre: "Cargador Solar",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 49,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img19,
        alt: "Cargador Solar",
      },
      adicionales: [
        {
          url: img19,
          alt: "Vista lateral del Cargador Solar",
          order: 1,
        },
        {
          url: img19,
          alt: "Cargador Solar en un ambiente exterior",
          order: 2,
        },
        {
          url: img19,
          alt: "Vista de la parte posterior del Cargador Solar",
          order: 3,
        },
      ],
    },
  },
  {
    id: 20,
    nombre: "Sofá Modular",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 899,
    categoria: "muebles",
    imagenes: {
      principal: {
        url: img20,
        alt: "Sofá Modular",
      },
      adicionales: [
        {
          url: img20,
          alt: "Vista lateral del Sofá Modular",
          order: 1,
        },
        {
          url: img20,
          alt: "Sofá Modular en un ambiente de sala",
          order: 2,
        },
        {
          url: img20,
          alt: "Vista trasera del Sofá Modular",
          order: 3,
        },
      ],
    },
  },
  {
    id: 21,
    nombre: "Funda para Móvil",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 19,
    categoria: "accesorios",
    imagenes: {
      principal: {
        url: img21,
        alt: "Funda para Móvil",
      },
      adicionales: [
        {
          url: img21,
          alt: "Vista lateral de la Funda para Móvil",
          order: 1,
        },
        {
          url: img21,
          alt: "Funda para Móvil en un fondo blanco",
          order: 2,
        },
        {
          url: img21,
          alt: "Vista trasera de la Funda para Móvil",
          order: 3,
        },
      ],
    },
  },
];
