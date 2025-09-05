import HeroSection from "@/components/HeroSection";
import ProductOptions from "@/components/ProductOptions";
import VideoSection from "@/components/VideoSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BenefitsSection from "@/components/BenefitsSection";
import IngredientsSection from "@/components/IngredientsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProductOptions />
      <VideoSection />
      <TestimonialsSection />
      <BenefitsSection />
      <IngredientsSection />
      <ReviewsSection />
      <GuaranteeSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
