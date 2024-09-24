import { Button, Input, Logo, Textarea } from "./common/UIComponents";

export const ContactSection = () => {
  return (
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
                    <span id="phone-optional" className="text-sm text-gray-500">
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
  );
};
