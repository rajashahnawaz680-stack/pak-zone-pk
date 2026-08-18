import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function ScootersPage() {
  return (
    <CategoryLayout
      title="Electric Scooters"
      subtitle="Embrace the future of urban mobility with our modern, eco-friendly electric scooters."
      heroImage="https://images.unsplash.com/photo-1589408235688-6f772fc810d7?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "Urban Commuters",
          description: "Lightweight and foldable scooters perfect for city living.",
          image: "https://images.unsplash.com/photo-1595814445585-fb6615b13936?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Long Range EV",
          description: "High-capacity batteries for extended travel without range anxiety.",
          image: "https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Premium Rides",
          description: "Top-tier electric scooters with advanced suspension and comfort.",
          image: "https://images.unsplash.com/photo-1557999813-f4c084128f86?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "Test ride modern EVs in our showroom",
        "Expert advice on battery life and charging solutions",
        "Physical presence guarantees reliable after-sales support",
        "Experience the build quality before making a decision"
      ]}
    />
  );
}
