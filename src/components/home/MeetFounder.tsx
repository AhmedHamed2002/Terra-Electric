import Image from "next/image";
import { Play } from "lucide-react";

export default function MeetFounder() {
  return (
    <section className="py-12 md:py-24 bg-gray-50 w-full">
      <div className="container md:px-10 px-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-5 md:gap-6">
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-full aspect-4/5 md:aspect-square max-w-md mx-auto md:mx-0 rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/Mahmoud.png"
                alt="Mahmoud - Founder"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={80}
                className="object-cover"
              />
            </div>
            {/* Decorative block behind image */}
            <div className="absolute -bottom-4 -left-4 w-2/3 h-2/3 bg-[#1a365d] rounded-xl -z-10 hidden md:block"></div>
          </div>
          
          <div className="w-full md:w-1/2">
            <p className="text-[#0369a1] font-bold tracking-widest text-sm uppercase mb-3">
              OUR TRACK RECORD
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#0d1b2a] mb-6">
              Meet the Founder
            </h2>
            <div className="text-gray-600 space-y-4 mb-8 leading-relaxed text-sm md:text-lg">
              <p>
                I&apos;m Mahmoud. I&apos;ve lived in China for 7 years. I speak Arabic, English, and Chinese, and I&apos;ve built real relationships with factories and licensed dealers here.
              </p>
              <p>
                My goal is to make importing Chinese vehicles as transparent and straightforward as buying groceries. We personally inspect every single vehicle before anything gets sent to you.
              </p>
              <p>
                If something goes wrong, you know exactly who to talk to.
              </p>
            </div>
            
            <div className="flex flex-col gap-1">
              <span
                className="font-Dancing text-[#0d1b2a] font-bold select-none"
                style={{ fontSize: "2.5rem", lineHeight: 1.1 }}
              >
                Mahmoud
              </span>
              <span className="text-xs uppercase tracking-widest text-gray-500 pl-1">Founder, Terra Electric</span>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
