import { Clock } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function ContactHero() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-32 px-4 text-center relative z-10 flex flex-col items-center">
      <FadeIn direction="up">
        <div className="bg-[#e0f2fe] text-[#0891b2] text-[10px] font-bold tracking-widest py-1.5 px-4 rounded-full mb-6 inline-flex items-center uppercase">
          Direct Channel
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-[#0f172a] mb-6 max-w-4xl tracking-tight leading-tight">
          Ready to Start Your EV<br className="hidden md:block" /> Journey?
        </h1>
      </FadeIn>
      <FadeIn direction="up" delay={0.2}>
        <p className="text-slate-500 max-w-2xl text-lg md:text-xl leading-relaxed mx-auto text-center">
          We bridge the gap between world-class Chinese EV manufacturing and your local market with technical precision and sourcing excellence.
        </p>
      </FadeIn>
      <FadeIn direction="up" delay={0.4}>
        <div className="flex items-center mt-8 bg-white text-[#0891b2] text-[10px] font-bold tracking-widest py-1.5 px-4 rounded-full">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-xs md:text-sm font-semibold tracking-wider">Response within 24 hours</span>
        </div>
      </FadeIn>
    </section>
  );
}
