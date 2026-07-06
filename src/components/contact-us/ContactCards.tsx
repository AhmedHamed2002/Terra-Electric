import Image from "next/image";
import { ArrowRight, MapPin, Youtube, Instagram, Facebook } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

export default function ContactCards() {
  return (
    <section className="px-4 pb-16 max-w-7xl mx-auto relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Main WhatsApp Card */}
        <FadeIn direction="up" className="lg:col-span-7 bg-[#0b1421] rounded-xl p-8 md:p-10 text-white relative overflow-hidden flex flex-col justify-between min-h-[350px]">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#93cbf9] ">Connect on WhatsApp</h2>
            <p className="text-slate-300 text-base md:text-lg max-w-[350px] leading-relaxed">
              Instant access to our sourcing experts. Discuss inventory, shipping logistics, and pricing in real-time. This is our primary business channel.            </p>
          </div>
          
          <div className="relative z-10 mt-8">
            <a href="https://wa.me/8619924554911" target="_blank" rel="noopener noreferrer" className="inline-flex items-center group">
              <div className="w-12 h-12 bg-[#bce0fd] rounded-lg flex items-center justify-center mr-4 group-hover:bg-[#93cbf9] transition-colors">
                <ArrowRight className="text-[#0b1421] w-5 h-5" />
              </div>
              <span className="text-xl md:text-2xl font-bold tracking-wide">+86 199 2455 4911</span>
            </a>
          </div>

          {/* Decorative chat bubble icon */}
          <div className="absolute top-1/4 right-0 -translate-y-1/4 translate-x-4 opacity-[0.04] pointer-events-none">
            <svg width="240" height="240" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" />
            </svg>
          </div>
        </FadeIn>

        {/* Right column - Shenzhen HQ Card */}
        <FadeIn direction="up" delay={0.1} className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col h-full">
            <div className="relative h-44 w-full">
              <Image 
                src="/assets/images/contact_us_banner.png" 
                alt="Shenzhen HQ" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0f172a]/20"></div>
              <div className="absolute bottom-4 left-6">
                <span className="text-[9px] font-bold tracking-widest text-white/90 uppercase">Strategic Hub</span>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center text-[#0891b2] mb-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-xs font-semibold uppercase tracking-wider">Shenzhen HQ</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Direct from Source</h3>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                  Our headquarters in China provides direct access to the world's most advanced EV manufacturing clusters. While we maintain a physical presence, all inquiries are handled via WhatsApp for maximum speed.                </p>
              </div>
              <a href="https://maps.app.goo.gl/5H8iP15o9evCS8xv6" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-slate-900 hover:text-[#0891b2] transition-colors mt-2">
                View Logistics Map <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </FadeIn>

        {/* Bottom Left Card (Socials) */}
        <FadeIn direction="up" delay={0.2} className="lg:col-span-6 bg-[#f4f4f5] rounded-xl px-6 py-3 flex flex-col justify-center">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4 block">Follow Our Ecosystem</span>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://wa.me/8619924554911" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl py-2.5 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group">
              <WhatsappIcon className="w-6 h-6 text-slate-700 mb-2 group-hover:text-green-500 transition-colors" />
              <span className="text-[11px] font-bold text-slate-900">WhatsApp</span>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61591526527313" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl py-2.5 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group">
              <Facebook className="w-6 h-6 text-slate-700 mb-2 group-hover:text-blue-600 transition-colors" />
              <span className="text-[11px] font-bold text-slate-900">Facebook</span>
            </a>
            <a href="https://www.instagram.com/terra_electric_1/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl py-2.5 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group">
              <Instagram className="w-6 h-6 text-slate-700 mb-2 group-hover:text-pink-600 transition-colors" />
              <span className="text-[11px] font-bold text-slate-900">Instagram</span>
            </a>
            <a href="https://www.youtube.com/@mahmoudinchina/videos" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl py-2.5 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow group">
              <Youtube className="w-6 h-6 text-slate-700 mb-2 group-hover:text-red-600 transition-colors" />
              <span className="text-[11px] font-bold text-slate-900">YouTube</span>
            </a>
          </div>
        </FadeIn>

        {/* Bottom Right Card (Consulting) */}
        <FadeIn direction="up" delay={0.2} className="lg:col-span-6 bg-white rounded-xl p-8 border border-slate-100 shadow-[0_2px_15px_-5px_rgba(0,0,0,0.05)] flex flex-col justify-center relative overflow-hidden">
          <div className="flex items-center text-[#22d3ee] mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#22d3ee] mr-2 shadow-[0_0_8px_#22d3ee]"></div>
            <span className="text-xs font-bold tracking-wider">Sourcing Active</span>
          </div>
          <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1">Technical Consulting</h3>
          <p className="text-slate-500 text-xs leading-relaxed max-w-[65%]">
            Our headquarters in China provides direct access to the world's most advanced EV manufacturing clusters. While we maintain a physical presence, all inquiries are handled via WhatsApp for maximum speed.          </p>
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden relative shadow-sm border border-slate-200">
              <Image src="/assets/images/Mahmoud.png" alt="Consultant" fill className="object-cover  md:grayscale md:hover:grayscale-0 transition-all duration-300" />
            </div>
          </div>
        </FadeIn>

        {/* Map Section */}
        <FadeIn direction="up" delay={0.2} className="lg:col-span-12 rounded-xl overflow-hidden shadow-sm mt-2 border border-slate-100">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3685.2852041503415!2d113.9033945!3d22.5309866!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403eef4bc7f190f%3A0x13e02e9f97c78fcf!2sQianhai%20Zhuoyue%20Financial%20Center%20Parking%20Lot!5e0!3m2!1sar!2seg!4v1782962376395!5m2!1sar!2seg" 
            className="w-full h-[450px]" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </FadeIn>

      </div>
    </section>
  );
}
