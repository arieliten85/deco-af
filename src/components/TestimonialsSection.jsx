import { Card } from "./common/UIComponents";
import { testimonials } from "./constants/testtimonials";

export const TestimonialsSection = () => {
  return (
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
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col justify-between bg-blue-50"
            >
              <div className="p-6 h-full flex flex-col justify-between">
                <p className="text-lg text-gray-600 mb-4">{testimonial.text}</p>
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
  );
};
