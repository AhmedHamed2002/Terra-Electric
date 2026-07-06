import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function AboutHero() {
  return (
    <section className="relative w-full min-h-[72vh] md:min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/about_banner.png"
          alt="About Terra Electric"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-linear-to-r from-[#0d1b2a]/60 via-[#0d1b2a]/40 to-transparent" />
      </div>

      <div className="container-fluid md:px-10 px-5 mx-auto relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <FadeIn direction="up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-white">About </span>
              <span className="text-[#0ea5e9] font-serif">Terra Electric</span>
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 max-w-xl leading-relaxed">
              Terra Electric is a China-based export company. We help international buyers source genuine Chinese electric vehicles — without the markups and risk of middlemen who've never set foot inside a factory.
            </p>
          </FadeIn>
          {/* Stats Row */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-wrap items-center gap-4 md:gap-12">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
                <p className="text-gray-400 text-sm mt-1">Innovation Drive</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">13+</p>
                <p className="text-gray-400 text-sm mt-1">Global Regions</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-white">7+</p>
                <p className="text-gray-400 text-sm mt-1">Years in China</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 w-full z-10 overflow-hidden leading-none translate-y-1">
        <svg
          className="relative block w-full h-[40px] md:h-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.2,194,105.15,238.13,95.3,280.9,74.5,321.39,56.44Z"
            className="fill-white"
          />
        </svg>
      </div>
    </section>
  );
}
