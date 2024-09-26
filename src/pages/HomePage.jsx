import { CatalogSection } from "../components/CatalogSection";
import { HeroSection } from "../components/HeroSection";
import ContactSection from "../components/navBar/ContactSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export default function HomePage() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <CatalogSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
