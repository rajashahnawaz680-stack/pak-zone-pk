import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function ElectronicsPage() {
  return (
    <CategoryLayout
      title="Electronics & Accessories"
      subtitle="Complete your tech setup with our wide range of smart devices, audio gear, and essential accessories."
      heroImage="https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "Premium Audio",
          description: "Headphones, earbuds, and speakers for immersive sound.",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Smart Home",
          description: "Connected devices to modernize your living space.",
          image: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Power & Cables",
          description: "Reliable chargers, power banks, and connectivity solutions.",
          image: "https://images.unsplash.com/photo-1615526675159-e248c3021d3f?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "Find exactly what you need in one convenient location",
        "Assurance of quality from a reputable physical store",
        "Guidance on device compatibility and setup",
        "Wide selection of trusted brands"
      ]}
    />
  );
}
