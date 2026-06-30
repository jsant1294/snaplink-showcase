import AnalyticsProof from "@/components/AnalyticsProof";
import BrandStory from "@/components/BrandStory";
import CollectionReveal from "@/components/CollectionReveal";
import CustomNfcProductsSection from "@/components/CustomNfcProductsSection";
import DigitalDisplaysSection from "@/components/DigitalDisplaysSection";
import FaqSection from "@/components/FaqSection";
import FloatingSnapLinkOrb from "@/components/FloatingSnapLinkOrb";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { LanguageProvider, LanguageToggle } from "@/components/LanguageProvider";
import ProductExperience3D from "@/components/ProductExperience3D";
import SnapLinkSection from "@/components/SnapLinkSection";
import VipLeadForm from "@/components/VipLeadForm";

export default function Home() {
  return (
    <LanguageProvider>
      <main>
        <LanguageToggle />
        <Hero />
        <CollectionReveal />
        <FaqSection />
        <BrandStory />
        <ProductExperience3D />
        <CustomNfcProductsSection />
        <DigitalDisplaysSection />
        <SnapLinkSection />
        <AnalyticsProof />
        <VipLeadForm />
        <Footer />
        <FloatingSnapLinkOrb />
      </main>
    </LanguageProvider>
  );
}
