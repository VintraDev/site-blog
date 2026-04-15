import { CallToAction } from "@/components/pages/sections/call-to-action/call-to-action";
import { CustomerStoriesSection } from "@/components/pages/sections/customer-story-section";
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
        <CustomerStoriesSection />
        <CallToAction />
      </article>
    </>
  );
}
