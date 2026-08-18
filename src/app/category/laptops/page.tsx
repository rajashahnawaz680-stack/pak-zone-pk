import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function LaptopsPage() {
  return (
    <CategoryLayout
      title="Laptops & Computers"
      subtitle="Power your productivity, studies, and entertainment with our premium range of computing devices."
      heroImage="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "Professional Workstations",
          description: "High-performance laptops for demanding tasks and professional workflows.",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Student Laptops",
          description: "Reliable, portable, and affordable devices perfect for education.",
          image: "https://images.unsplash.com/photo-1531297122539-d31b0a5f4c29?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Gaming Machines",
          description: "Immersive experiences with dedicated graphics and high refresh rates.",
          image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "Professional consultation to match hardware to your exact needs",
        "Physical showroom to test keyboards, trackpads, and displays",
        "Reliable post-purchase support and guidance",
        "Established business you can trust for high-value purchases"
      ]}
    />
  );
}
