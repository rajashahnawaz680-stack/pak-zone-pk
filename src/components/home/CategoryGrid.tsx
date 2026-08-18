import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
  const categories = [
    {
      id: "mobiles",
      name: "Mobile Phones",
      description: "Latest smartphones and communication devices.",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2 lg:col-span-2",
      rowSpan: "md:row-span-2 lg:row-span-2",
    },
    {
      id: "laptops",
      name: "Laptops & Computers",
      description: "Work, study, and professional computing.",
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "bikes",
      name: "Bikes / Motorcycles",
      description: "Premium mobility and daily commute solutions.",
      image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "scooters",
      name: "Electric Scooters",
      description: "Modern urban EV mobility.",
      image: "https://images.unsplash.com/photo-1589408235688-6f772fc810d7?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "electronics",
      name: "Electronics & Accessories",
      description: "Smart devices, audio, and daily tech essentials.",
      image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-2 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "home-appliances", // Link to a general appliance page or a specific one
      name: "LED TVs",
      description: "Home entertainment and displays.",
      image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "home-appliances",
      name: "Refrigerators",
      description: "Cooling and food preservation.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "home-appliances",
      name: "Ovens",
      description: "Kitchen appliances and baking.",
      image: "https://images.unsplash.com/photo-1584269600519-112d091fb343?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    },
    {
      id: "home-appliances",
      name: "Geysers",
      description: "Water heating solutions.",
      image: "https://images.unsplash.com/photo-1628189874597-9e63473956dc?q=80&w=1000&auto=format&fit=crop",
      colSpan: "md:col-span-1 lg:col-span-1",
      rowSpan: "md:row-span-1 lg:row-span-1",
    }
  ];

  return (
    <section id="categories" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-navy mb-4">Shop By Category</h2>
            <p className="text-gray-600 text-lg">
              Explore our comprehensive range of technology, mobility, and home appliances. 
              Find exactly what you need in our professional showroom.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px]">
          {categories.map((category, index) => (
            <Link 
              key={index}
              href={`/category/${category.id}`} 
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 bg-navy ${category.colSpan} ${category.rowSpan}`}
            >
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors z-10 duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent z-10"></div>
              
              <div 
                className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700 ease-out"
                style={{ backgroundImage: `url('${category.image}')` }}
              ></div>
              
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-20">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {category.name}
                </h3>
                <p className="text-gray-200 text-sm sm:text-base font-medium mb-4 max-w-sm">
                  {category.description}
                </p>
                <div className="flex items-center text-electric-blue font-bold text-sm uppercase tracking-wider group-hover:text-white transition-colors">
                  Explore Category <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
