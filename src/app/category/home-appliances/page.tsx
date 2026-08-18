import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function HomeAppliancesPage() {
  return (
    <CategoryLayout
      title="Home Appliances"
      subtitle="Upgrade your home with our premium selection of LED TVs, Refrigerators, Ovens, and Geysers."
      heroImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "LED TVs & Displays",
          description: "Stunning visuals and smart entertainment systems for your living room.",
          image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Refrigerators",
          description: "Modern cooling solutions for energy efficiency and food preservation.",
          image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Ovens & Kitchen",
          description: "Advanced cooking appliances for the modern kitchen.",
          image: "https://images.unsplash.com/photo-1584269600519-112d091fb343?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "See the size, finish, and quality in person before buying",
        "Expert advice on features, dimensions, and energy efficiency",
        "A trusted local presence for major household purchases",
        "Professional consultation in our dedicated showroom environment"
      ]}
    />
  );
}
