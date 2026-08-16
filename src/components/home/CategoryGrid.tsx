import Link from "next/link";
import { 
  Smartphone, 
  Laptop, 
  Wind, 
  Snowflake, 
  WashingMachine, 
  Coffee, 
  Bike, 
  Sun, 
  Headphones, 
  Tv 
} from "lucide-react";

export function CategoryGrid() {
  const categories = [
    { name: "Mobile Phones", icon: Smartphone, desc: "Latest smartphones", slug: "mobile-phones" },
    { name: "Laptops & Computers", icon: Laptop, desc: "Work & gaming", slug: "laptops" },
    { name: "AC & Coolers", icon: Wind, desc: "Cooling solutions", slug: "ac-coolers" },
    { name: "Refrigerators", icon: Snowflake, desc: "Home appliances", slug: "refrigerators" },
    { name: "Washing Machines", icon: WashingMachine, desc: "Laundry appliances", slug: "washing-machines" },
    { name: "Home Appliances", icon: Coffee, desc: "Kitchen & home", slug: "home-appliances" },
    { name: "Bikes & Scooters", icon: Bike, desc: "Transportation", slug: "bikes-scooters" },
    { name: "Solar Systems", icon: Sun, desc: "Energy solutions", slug: "solar-systems" },
    { name: "Accessories", icon: Headphones, desc: "Gadgets & add-ons", slug: "accessories" },
    { name: "Other Electronics", icon: Tv, desc: "TVs & more", slug: "other" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Shop by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore our wide range of products available for cash or installment purchase.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <Link 
                href={`/categories/${cat.slug}`} 
                key={index}
                className="bg-white rounded-xl p-6 text-center border border-gray-100 hover:border-electric-blue/30 hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-electric-blue/10 transition-colors">
                  <Icon className="w-8 h-8 text-navy group-hover:text-electric-blue transition-colors" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
                <p className="text-xs text-gray-500 mb-4">{cat.desc}</p>
                <span className="text-sm font-semibold text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity">
                  View Products
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
