import HeroSection from "@/components/landing/HeroSection";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import Testimonials from "@/components/landing/Testimonials";
import ProductShowcase from "@/components/landing/ProductShowcase";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <Testimonials />
      <ProductShowcase />
    </main>
  );
}
