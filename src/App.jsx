import { ArrowRight } from "lucide-react";

import heroImge from "./assets/hero.jpg";
import {
  Button,
  Card,
  Input,
  Textarea,
} from "./components/common/UIComponents";
import { catalogo } from "./api/fetchCatalogo";
import Navbar from "./components/Navbar";
import { Logo } from "./components/Logo";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      <main className="flex-grow">
        <section
          id="inicio"
          className="relative bg-primary-gray overflow-hidden"
        >
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-primary-gray sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-primary-gray transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Decoración Profesional
                    </span>{" "}
                    <span className="block text-color-main xl:inline">
                      para tu Espacios
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-white  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Transforma tus espacios con nuestros productos decorativos
                    de alta calidad. Diseñados específicamente para empresas que
                    buscan estilo y carácter.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-md bg-orange-500 hover:bg-orange-600 md:py-4 md:text-lg md:px-10">
                        <a href="#contacto" className="text-white">
                          Contáctanos
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
            <img
              src={heroImge}
              alt="Hero"
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            />
          </div>
        </section>

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

        <section className="py-12 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="text-center">
              <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
                Testimonios
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">
                Lo que Dicen Nuestros Clientes
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  name: "Rebeca Peri",
                  company: "Rebeca Peri Inmobiliaria",
                  text: "Estoy muy satisfecha con los llaveros personalizados. El diseño es exactamente lo que necesitábamos y aportan un buen detalle al entregar las llaves de los departamentos.",
                },
                {
                  name: "Melina",
                  company: "Apex estudio contable",
                  text: "Los carteles que encargué para mi estudio contable han quedado muy bien. El diseño del cartel interior es elegante, y el cartel exterior con luz LED resalta perfectamente. Estoy contenta con el resultado.",
                },
                {
                  name: "Laura Martínez",
                  company: "Café Aroma",
                  text: "Las lámparas nórdicas han quedado hermosas en nuestro bar. El diseño se ajusta a lo que buscábamos y han mejorado la iluminación del lugar. Estoy contenta con la elección.",
                },
              ].map((testimonial, index) => (
                <Card
                  key={index}
                  className="flex flex-col justify-between bg-blue-50"
                >
                  <div className="p-6 h-full flex flex-col justify-between">
                    <p className="text-lg text-gray-600 mb-4">
                      {testimonial.text}
                    </p>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-orange-600">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="relative bg-white shadow-xl rounded-2xl">
              <div className="text-center">
                <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
                  Contáctanos
                </h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">
                  Dejanos tus consultas
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="relative overflow-hidden py-10 px-6 bg-primary-gray sm:px-10 xl:p-12 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none   ">
                  <h3 className="text-lg font-medium text-white">
                    Información de Contacto
                  </h3>
                  <p className="mt-6 text-base text-indigo-50 max-w-3xl">
                    Estamos aquí para ayudarte a transformar tus espacios.
                    Contáctanos para más información sobre nuestros productos y
                    servicios.
                  </p>
                  <dl className="mt-8 space-y-6">
                    <dt>
                      <span className="sr-only">Teléfono</span>
                    </dt>
                    <dd className="flex text-base text-indigo-50">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span className="ml-3">+1 (555) 123-4567</span>
                    </dd>
                    <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-indigo-50">
                      <svg
                        className="flex-shrink-0 w-6 h-6 text-indigo-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="ml-3">contacto@decoempresa.com</span>
                    </dd>
                  </dl>

                  <div className=" flex items-center justify-center mt-12">
                    <Logo width={70} height={70} />
                  </div>
                </div>

                <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                  <h3 className="text-lg font-medium text-gray-900">
                    Envíanos un mensaje
                  </h3>
                  <form className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Nombre
                      </label>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="first-name"
                          id="first-name"
                          autoComplete="given-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Apellido
                      </label>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="last-name"
                          id="last-name"
                          autoComplete="family-name"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-900"
                        >
                          Teléfono
                        </label>
                        <span
                          id="phone-optional"
                          className="text-sm text-gray-500"
                        >
                          Opcional
                        </span>
                      </div>
                      <div className="mt-1">
                        <Input
                          type="text"
                          name="phone"
                          id="phone"
                          autoComplete="tel"
                          aria-describedby="phone-optional"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900"
                      >
                        Mensaje
                      </label>
                      <div className="mt-1">
                        <Textarea id="message" name="message" rows={4} />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <Button
                        type="submit"
                        className="w-full bg-orange-500 text-white hover:bg-orange-700"
                      >
                        Enviar mensaje
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary-gray">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div> */}
          <p className="mt-8 text-center text-base text-gray-400">
            &copy; 2023 DecoEmpresa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
