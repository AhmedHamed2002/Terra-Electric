import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export default function FaqHero() {
  return (
    <section className="pt-20 md:pt-26 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start relative z-10">
          <div className="text-[#d6eef4] bg-[#23a4e1]/95 text-[10px] font-serif font-bold tracking-widest pb-1.5 pt-2 px-4 rounded-full mb-4 md:mb-6 uppercase shadow-sm">
            Support Center
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif text-[#0f172a] mb-2 md:mb-6 tracking-tight leading-[1.1]">
            Frequently Asked <br className="hidden md:block" />
            <span className="text-[#23a4e1]">Questions</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-md">
            Everything you need to know about sourcing world-class electric vehicles directly from the source. Our process is transparent, expert-led, and centered around direct communication.
          </p>
        </div>

        {/* Right Content - Image with Overlay */}
        <div className="relative -mt-4 md:mt-2 lg:mt-0">
          <div className="relative h-[350px] md:h-[450px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/assets/images/faq_banner.png" 
              alt="FAQ Banner" 
              fill 
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={75}
            />
          </div>
          
          {/* Floating Card */}
          <div className="absolute -bottom-4 md:-bottom-8 -left-2 md:-left-6 bg-linear-to-br from-white/80 to-slate-50/70 px-4 py-3 rounded-xl shadow-xl border border-white/60 max-w-[280px] z-20 backdrop-blur-sm">
            <div className="flex items-center text-[#137a98] mb-3">
              <ShieldCheck className="w-5 h-5 mr-2" />
              <span className="text-[10px] font-bold tracking-widest text-slate-800 uppercase">Official Source</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Global sourcing excellence since 2018.<br />
              Expert logistics for every EV model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
