import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[82vh] md:min-h-[80vh] lg:min-h-[90vh] xl:min-h-[97vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/banner.png"
          alt="Banner"
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          quality={75}
          className="object-cover brightness-[0.6]"
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-[#13273f]/75 via-[#18314d]/40 to-transparent"></div>
      </div>

      <div className="container-fluid md:px-10 px-5 mx-auto relative z-10 w-full">
        <div className="max-w-2xl text-white">
          <h1 className="text-3xl md:text-5xl lg:text-5xl font-semibold font-serif leading-tight mb-5 md:mb-6">
            Terra Electric — Your Direct Line to <span className="text-[#0ea5e9]">Chinese Electric Vehicles</span>
          </h1>
          <p className="text-base md:text-xl text-gray-200 mb-10 md:mb-8 max-w-xl">
            We eliminate the middleman. We handle sourcing, comprehensive quality inspection, document handling, and logistics for international buyers.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="https://wa.me/+8619924554911"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#13526c] hover:bg-[#176a88] text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Message on WhatsApp</span>
            </Link>
            
            <div className="flex items-center gap-2 text-white/90">
              <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-medium whitespace-pre-line">100% L/C Working</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative wave at the bottom */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none z-10 transform translate-y-1">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.2,194,105.15,238.13,95.3,280.9,74.5,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
