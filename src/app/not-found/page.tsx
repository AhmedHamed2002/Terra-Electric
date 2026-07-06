import Image from "next/image";
import Link from "next/link";
import { Home, MessageCircle } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function NotFoundPage() {
  return (
    <main className="relative h-screen pt-24 md:pt-16 flex items-center justify-center overflow-hidden bg-slate-100/50">
      {/* Full-screen background car image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/not_found_car.png"
          alt="Lost on the road"
          fill
          priority
          className="object-cover opacity-85"
        />
        {/* Light gradient overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-50/5 via-slate-50/5 to-slate-50/5" />
        <div className="absolute inset-0 bg-linear-to-r from-slate-50/5 via-transparent to-slate-50/5" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24 max-w-2xl mx-auto">
        {/* 404 number */}
        <p className="text-[8rem] sm:text-[11rem] font-black leading-none text-[#0d1b2a]/20 select-none absolute -top-3 sm:top-0 tracking-tighter">
          404
        </p>

        {/* Badge */}
        <FadeIn direction="up">
          <span className="mb-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0ea5e9]/50 bg-[#0ea5e9]/30 text-[#074f70] text-xs font-bold uppercase tracking-widest">
            Error 404 · Page Not Found
          </span>

          {/* Headline */}
          <h1
            className="text-3xl sm:text-5xl font-bold text-[#0d1b2a] leading-tight mb-2 md:mb-4"
            style={{ fontFamily: "serif" }}
          >
            Looks Like You&apos;ve
            <br />
            <span className="text-[#0c7aac]">Lost the Road.</span>
          </h1>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <p className="text-gray-950 text-sm sm:text-base max-w-sm mb-6 md:mb-10 leading-relaxed mx-auto text-center">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn direction="up" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 bg-[#096996] hover:bg-[#1574a7] text-white font-semibold px-7 py-3 rounded-full transition-all duration-300 shadow-lg shadow-[#0ea5e9]/20 hover:-translate-y-0.5"
            >
              <Home className="w-4 h-4" />
              Back to Home
            </Link>

            <Link
              href="https://wa.me/+8619924554911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0d1b2a]/20 hover:border-[#0d1b2a]/40 text-[#0d1b2a] font-semibold px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4" />
              Speak to an Expert
            </Link>
          </div>
        </FadeIn>

        {/* Branding footer */}
        <FadeIn direction="up" delay={0.6}>
          <p className="mt-10 md:mt-14 text-xs uppercase tracking-[0.3em] text-[#0d1b2a]/80 font-medium">
            Terra Electric · Direct Access · Unwavering Excellence
          </p>
        </FadeIn>
      </div>
    </main>
  );
}
