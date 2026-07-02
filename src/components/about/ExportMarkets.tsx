import { Globe } from "lucide-react";

const markets = [
  {
    region: "Middle East",
    icon: "🌍",
    countries: ["UAE", "Saudi Arabia", "Egypt", "Jordan"],
  },
  {
    region: "Africa",
    icon: "🌍",
    countries: [ "Morocco" , "Ghana", "Rwanda", "Kenya", "Mozambique" ,"Ethiopia" , "Nigeria", "South Africa"],
  },
  {
    region: "South Asia",
    icon: "🌏",
    countries: ["Pakistan"],
  },
];

export default function ExportMarkets() {
  return (
    <section className="py-8 md:py-12 bg-white w-full">
      <div className="container-fluid md:px-10 px-5 mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#0ea5e9] font-bold tracking-widest text-xs uppercase mb-4">
            GLOBAL NETWORK
          </p>
          <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0d1b2a] mb-4">
            Strategic Export Markets — 13 Markets and Growing
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            From the Middle East to South Asia, our export network spans across three continents with direct logistics support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {markets.map((market, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:border-[#0ea5e9]/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-white shadow-sm border border-gray-100 group-hover:border-[#0ea5e9]/20 transition-colors">
                  <Globe className="w-4 h-4 text-[#0ea5e9]" />
                </div>
                <h3 className="font-bold text-[#0d1b2a] text-sm uppercase tracking-wider">
                  {market.region}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {market.countries.map((country, ci) => (
                  <li key={ci} className="flex items-center gap-2 text-gray-500 text-sm">
                    <span className="w-1 h-1 rounded-full bg-[#0ea5e9]/60 shrink-0" />
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
