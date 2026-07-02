import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative py-16 md:py-24 w-full overflow-hidden bg-[#0b1421]">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#0c1a30] opacity-10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container-fluid md:px-10 px-5 mx-auto relative z-10 text-center">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-serif text-white mb-5">
          Scale Your Fleet with Terra Electric
        </h2>
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Connect with our sourcing experts today and plan access to the future of automotive technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="https://wa.me/+8619924554911"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#13526c] hover:bg-[#176a88] text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 shadow-lg hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Consultation
          </Link>

          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-md transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Services
            <ArrowRight className="w-4 h-4 mt-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
