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
    nombre: "Cartel Universidad de Miami",
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
    nombre: "Cartel EJS NAILS",
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
    nombre: "Cartel Escudo Selec. Argentina",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 39,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img03,
      },
      adicionales: [
        {
          url: img03,

          order: 1,
        },
        {
          url: img03,

          order: 2,
        },
        {
          url: img03,

          order: 3,
        },
      ],
    },
  },
  {
    id: 4,
    nombre: "Cartel Barberia Cut&Shave",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 129,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img04,
      },
      adicionales: [
        {
          url: img04,

          order: 1,
        },
        {
          url: img04,

          order: 2,
        },
        {
          url: img04,

          order: 3,
        },
      ],
    },
  },
  {
    id: 5,
    nombre: "Cartel Gym BodyStrong",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 24,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img05,
      },
      adicionales: [
        {
          url: img05,

          order: 1,
        },
        {
          url: img05,

          order: 2,
        },
        {
          url: img05,

          order: 3,
        },
      ],
    },
  },
  {
    id: 6,
    nombre: "Cartel Más allá del sol",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 199,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img06,
      },
      adicionales: [
        {
          url: img06,

          order: 1,
        },
        {
          url: img06,

          order: 2,
        },
        {
          url: img06,

          order: 3,
        },
      ],
    },
  },
  {
    id: 7,
    nombre: "Cartel Barberia barba negra",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 299,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img07,
      },
      adicionales: [
        {
          url: img07,

          order: 1,
        },
        {
          url: img07,

          order: 2,
        },
        {
          url: img07,

          order: 3,
        },
      ],
    },
  },
  {
    id: 8,
    nombre: "Lámpara Light of the North",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 89,
    categoria: "ropa",
    imagenes: {
      principal: {
        url: img08,
      },
      adicionales: [
        {
          url: img08,

          order: 1,
        },
        {
          url: img08,

          order: 2,
        },
        {
          url: img08,

          order: 3,
        },
      ],
    },
  },
  {
    id: 9,
    nombre: "Cartel Ford F-100",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 149,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img09,
      },
      adicionales: [
        {
          url: img09,

          order: 1,
        },
        {
          url: img09,

          order: 2,
        },
        {
          url: img09,

          order: 3,
        },
      ],
    },
  },
  {
    id: 10,
    nombre: "Lámpara Aurora Lamp",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 22,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img10,
      },
      adicionales: [
        {
          url: img10,

          order: 1,
        },
        {
          url: img10,

          order: 2,
        },
        {
          url: img10,

          order: 3,
        },
      ],
    },
  },
  {
    id: 11,
    nombre: "Lámpara Scandi Dark",
    descripcion: "Cuerpo de madera pintada",
    precio: 599,
    categoria: "lamparas",
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
    nombre: "Lámpara Esencia Nórdica",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 799,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img12,
      },
      adicionales: [
        {
          url: img12,

          order: 1,
        },
        {
          url: img12,

          order: 2,
        },
        {
          url: img12,

          order: 3,
        },
      ],
    },
  },
  {
    id: 13,
    nombre: "Lámpara Minimalist Glow",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 89,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img13,
      },
      adicionales: [
        {
          url: img13,

          order: 1,
        },
        {
          url: img13,

          order: 2,
        },
        {
          url: img13,

          order: 3,
        },
      ],
    },
  },
  {
    id: 14,
    nombre: "Lámpara PinApple",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 249,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img14,
      },
      adicionales: [
        {
          url: img14,

          order: 1,
        },
        {
          url: img14,

          order: 2,
        },
        {
          url: img14,

          order: 3,
        },
      ],
    },
  },
  {
    id: 15,
    nombre: "Lámpara Arctic Shine",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 499,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img15,
      },
      adicionales: [
        {
          url: img15,

          order: 1,
        },
        {
          url: img15,

          order: 2,
        },
        {
          url: img15,

          order: 3,
        },
      ],
    },
  },
  {
    id: 16,
    nombre: "Cartel gym Del Buenos Aires",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 59,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img16,
      },
      adicionales: [
        {
          url: img16,

          order: 1,
        },
        {
          url: img16,

          order: 2,
        },
        {
          url: img16,

          order: 3,
        },
      ],
    },
  },
  {
    id: 17,
    nombre: "Lámpara Serene Bright",
    descripcion: "Cuerpo de madera pintada",
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
    nombre: "Lámpara Nordic Essence",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 99,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img18,
      },
      adicionales: [
        {
          url: img18,

          order: 1,
        },
        {
          url: img18,

          order: 2,
        },
        {
          url: img18,

          order: 3,
        },
      ],
    },
  },
  {
    id: 19,
    nombre: "Cartel led Burger TiaLoca",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 49,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img19,
      },
      adicionales: [
        {
          url: img19,

          order: 1,
        },
        {
          url: img19,

          order: 2,
        },
        {
          url: img19,

          order: 3,
        },
      ],
    },
  },
  {
    id: 20,
    nombre: "Lámpara Ártica duo",
    descripcion: "Cuerpo de madera MDF pintada",
    precio: 899,
    categoria: "lamparas",
    imagenes: {
      principal: {
        url: img20,
      },
      adicionales: [
        {
          url: img20,

          order: 1,
        },
        {
          url: img20,

          order: 2,
        },
        {
          url: img20,

          order: 3,
        },
      ],
    },
  },
  {
    id: 21,
    nombre: "Cartel Apex Est. contable",
    descripcion: "Cuerpo de polifan pintado con acrilico",
    precio: 19,
    categoria: "cateles",
    imagenes: {
      principal: {
        url: img21,
      },
      adicionales: [
        {
          url: img21,

          order: 1,
        },
        {
          url: img21,

          order: 2,
        },
        {
          url: img21,

          order: 3,
        },
      ],
    },
  },
];
