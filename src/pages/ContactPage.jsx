import { ContactForm } from "../components/ContactForm";

const ContactPage = () => {
  return (
    <section id="contacto" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative    rounded-2xl">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-6">
              Contáctanos
            </p>
            <p className="text-gray-600 mb-12">
              Si tienes alguna pregunta, no dudes en contactarnos. ¡Estamos aquí
              para ayudarte!
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
