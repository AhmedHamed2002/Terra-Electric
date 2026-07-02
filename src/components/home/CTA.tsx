import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative py-12 md:py-20 w-full overflow-hidden">
      {/* Background with dark gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-[#0d1b2a] to-[#0b1421] z-0"></div>
      
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#122236] opacity-20 blur-[100px] rounded-full z-0"></div>

      <div className="container-fluid md:px-10 px-5 mx-auto relative z-10 text-center">
        <h2 className="text-2xl md:text-5xl font-serif font-bold text-white mb-6">
          Want to Source a Vehicle?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-sm md:text-lg">
          All our cars, photos, and videos are on Instagram, Facebook, and YouTube. Follow us there, or message us directly on WhatsApp to start.
        </p>
        <Link
          href="https://wa.me/+8619924554911"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#13526c] hover:bg-[#176a88] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-md font-medium text-sm md:text-lg transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300"
        >
          <MessageCircle className="w-4 h-4 sm:w-6 sm:h-6" />
          <span>Message on WhatsApp</span>
        </Link>
        
        <p className="mt-6 text-gray-400 text-sm">
          * Expect a quick response.
        </p>
      </div>
    </section>
  );
}
