import heroImge from "../assets/hero.jpg";
import { Button } from "./common/UIComponents";

export const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-primary-gray overflow-hidden">
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
                <span className="block xl:inline">Decoración Profesional</span>{" "}
                <span className="block text-color-main xl:inline">
                  para tu Espacios
                </span>
              </h1>
              <p className="mt-3 text-base text-white  sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Transforma tus espacios con nuestros productos decorativos de
                alta calidad. Diseñados específicamente para empresas que buscan
                estilo y carácter.
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
  );
};
