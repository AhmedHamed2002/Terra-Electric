import Image from "next/image";
import FadeIn from "@/components/shared/FadeIn";

export default function FounderJourney() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 w-full">
      <div className="container-fluid md:px-10 px-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Image Side */}
          <FadeIn direction="right" className="w-full md:w-1/2 relative">
            <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/assets/images/Mahmoud.png"
                alt="Mahmoud - Founder of Terra Electric"
                fill
                className="object-fit"
              />
              {/* Decorative block */}
              <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-[#0ea5e9]/10 rounded-xl -z-10 hidden md:block border border-[#0ea5e9]/20" />
            </div>
          </FadeIn>

          {/* Text Side */}
          <FadeIn direction="left" delay={0.2} className="w-full md:w-1/2">
            <p className="text-[#0ea5e9] font-bold tracking-widest text-xs uppercase mb-3">
              FOUNDER&apos;S VISION
            </p>
            <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0d1b2a] mb-6">
              Mahmoud&apos;s Journey
            </h2>

            <div className="text-gray-600 space-y-4 mb-8 text-sm md:text-base leading-relaxed">
              <p>
                Seven years ago the idea Mahmoud moved to China. Around that time, the language, culture, and relationship-building with factories and licensed dealers. Terra Electric is the result: a direct trusted link from a Tier-1 EV manufacturers and export partners to the world.
              </p>
              <p>
                With fluency in Arabic, English, and Chinese, Mahmoud built the relationships that make it possible to guarantee prices, quality, and timelines that other intermediaries simply cannot.
              </p>
            </div>

            {/* Founder Quote */}
            <blockquote className="border-l-4 border-[#0ea5e9] pl-5 py-2">
              <p className="text-[#0d1b2a] italic text-sm md:text-base leading-relaxed font-medium">
                &ldquo;Our mission is simple: to make the world&apos;s finest EV technology accessible to every market. Without compromise.&rdquo;
              </p>
              <footer className="mt-3 flex flex-col gap-0.5">
                <span
                  style={{ fontFamily: "'Dancing Script', cursive", fontSize: "1.6rem", lineHeight: 1.1 }}
                  className="text-[#0d1b2a] font-bold"
                >
                  Mahmoud
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-400">Founder, Terra Electric</span>
              </footer>
            </blockquote>

            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
