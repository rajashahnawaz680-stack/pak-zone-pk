import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function BikesPage() {
  return (
    <CategoryLayout
      title="Bikes & Motorcycles"
      subtitle="Explore our range of premium motorcycles for your daily commute and long journeys."
      heroImage="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "Commuter Bikes",
          description: "Fuel-efficient and reliable motorcycles for daily city travel.",
          image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Sports & Performance",
          description: "High-power motorcycles designed for excitement and speed.",
          image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Riding Gear",
          description: "Helmets, jackets, and safety equipment for a secure ride.",
          image: "https://images.unsplash.com/photo-1620050868299-cb95b4131df6?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "Wide selection of popular motorcycle models available in-store",
        "Professional guidance on maintenance and performance",
        "Flexible purchasing options available through our showroom",
        "Trusted local business with physical presence"
      ]}
    />
  );
}
