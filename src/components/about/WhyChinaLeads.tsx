import Image from "next/image";
import { Zap } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function WhyChinaLeads() {
  const reasons = [
    "China builds more than 60% of the world's electric vehicles — far more advanced and at more competitive pricing than anywhere else.",
    "We are on the ground, so you have to be.",
    "Direct factory access means zero inflated margins from middlemen.",
    "Real-time inspection videos before a single dollar changes hands.",
  ];

  return (
    <section className="py-8 md:py-12 bg-[#0d1b2a] w-full">
      <div className="container-fluid md:px-10 px-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text Side */}
          <FadeIn direction="right" className="w-full md:w-1/2 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#0ea5e9]/10 border border-[#0ea5e9]/20">
                <Zap className="w-5 h-5 text-[#0ea5e9]" />
              </div>
              <h2 className="text-2xl md:text-4xl font-bold font-serif text-white">
                Why China Leads
              </h2>
            </div>

            <ul className="space-y-5">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#0ea5e9]/15 border border-[#0ea5e9]/30 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9]" />
                  </div>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">{reason}</p>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Image Side */}
          <FadeIn direction="left" delay={0.2} className="w-full md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <Image
                src="/assets/images/why_china_leads.png"
                alt="Why China Leads in Electric Vehicles"
                width={700}
                height={460}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={75}
                className="w-full h-[400px] object-cover"
              />
              {/* Caption overlay */}
              <div className="absolute bottom-0 left-0 w-full p-5 bg-linear-to-t from-black/80 to-transparent">
                <p className="text-white text-sm italic leading-relaxed">
                  &ldquo;Sourcing China EV Strategic regions more than just routes or important drop in future of revenue.&rdquo;
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
