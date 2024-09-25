import { CatalogSection } from "../components/CatalogSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
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
