import { ContactForm } from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contacto" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative    rounded-2xl">
          <div className="text-center">
            <h2 className="text-base text-orange-500 font-semibold tracking-wide uppercase">
              Contáctanos
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-12">
              Dejanos tus consultas
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};
export default ContactSection;
