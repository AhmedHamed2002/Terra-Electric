import { CheckCircle, Globe, ShieldCheck, FileCheck } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

const features = [
  { icon: CheckCircle, text: "CERTIFIED EXPORTER" },
  { icon: Globe, text: "GLOBAL SHIPPING NETWORK" },
  { icon: ShieldCheck, text: "ESCROW PROTECTED" },
  { icon: FileCheck, text: "FULL INSPECTION REPORTS" },
];

export default function FeaturesStrip() {
  return (
    <section className="border-y border-slate-200 bg-white py-6 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row flex-wrap justify-center md:justify-between items-center gap-6">
        {features.map((feature, i) => (
          <FadeIn key={i} direction="up" delay={i * 0.1} className="flex items-center text-[#0891b2] group transition-colors">
            <feature.icon className="w-5 h-5 mr-3 group-hover:text-[#419de9] transition-colors" />
            <span className="text-xs font-bold tracking-wide text-[#0891b2] group-hover:text-[#419de9] transition-colors">{feature.text}</span>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
