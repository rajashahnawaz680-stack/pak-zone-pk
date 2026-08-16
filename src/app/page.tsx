import { Hero } from "@/components/home/Hero";
import { QuickServiceCards } from "@/components/home/QuickServiceCards";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { MobilePhonesFeature } from "@/components/home/MobilePhonesFeature";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { InstallmentSteps } from "@/components/home/InstallmentSteps";
import { TrustBar } from "@/components/home/TrustBar";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <QuickServiceCards />
      <TrustBar />
      <CategoryGrid />
      <MobilePhonesFeature />
      <FeaturedProducts />
      <InstallmentSteps />
      <WhyChooseUs />
    </>
  );
}
