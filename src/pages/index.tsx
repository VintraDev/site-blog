import { FeatureSection } from "@/components/pages/sections/feature-section";
import { HeroSection } from "@/components/pages/sections/hero-section";
import { SupportSection } from "@/components/pages/sections/support-section";

export default function Home() {
  return (
    <>
      <article className="flex flex-col">
        <HeroSection />
        <FeatureSection />
        <SupportSection />
      </article>
    </>
  );
}
