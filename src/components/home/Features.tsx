import { ShieldCheck, MapPin, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#1a365d]" />,
      title: "Inspected Before Payment",
      description: "Tired of dealing with vague guarantees? We send comprehensive inspection videos before you send your funds.",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#1a365d]" />,
      title: "7+ Years in China",
      description: "Deeply rooted in the local supply chain. Direct access to factories and top-tier export partners.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#1a365d]" />,
      title: "13+ Export Markets",
      description: "We are an experienced exporter ready to handle custom forms, shipping freight, and destination ports.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container-fluid md:px-10 px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-gray-50 p-4 rounded-full mb-6 text-[#1a365d] border border-gray-100 group-hover:scale-110 group-hover:text-[#13526c] group-hover:border-[#13526c] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#12294b] mb-3 group-hover:text-[#13526c] transition-all duration-300">{feature.title}</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
