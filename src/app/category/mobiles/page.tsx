import { CategoryLayout } from "@/components/layout/CategoryLayout";

export default function MobilesPage() {
  return (
    <CategoryLayout
      title="Mobile Phones"
      subtitle="Discover the latest smartphones from top brands. Upgrade your daily communication with premium devices."
      heroImage="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop"
      features={[
        {
          title: "Flagship Devices",
          description: "Experience ultimate performance with the latest flagship smartphones.",
          image: "https://images.unsplash.com/photo-1598327105666-5b89351cb315?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Mid-Range Power",
          description: "Perfect balance of price and performance for everyday use.",
          image: "https://images.unsplash.com/photo-1525598912003-663126343e1f?q=80&w=800&auto=format&fit=crop"
        },
        {
          title: "Mobile Accessories",
          description: "Complete your setup with cases, chargers, and audio accessories.",
          image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800&auto=format&fit=crop"
        }
      ]}
      whyChooseContent={[
        "Wide variety of brands and models available in-store",
        "Expert staff to help you compare features and specifications",
        "Hands-on experience before you make a purchase decision",
        "Trusted local retailer with 15+ years of experience"
      ]}
    />
  );
}
