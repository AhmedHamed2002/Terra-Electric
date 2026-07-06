import { Instagram, MessageSquare } from "lucide-react";
import FadeIn from "@/components/shared/FadeIn";

export default function FaqCTA() {
  return (
    <section className="px-4 pb-20 max-w-7xl mx-auto w-full relative z-10">
      <div className="bg-[#0b1421] rounded-2xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        {/* Subtle grid background pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}
        ></div>
        
        <div className="relative z-10">
          <FadeIn direction="up">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-wide">Still have questions?</h2>
            <p className="text-slate-300 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
              Connect with our sourcing experts directly for a personalized consultation. We are most active on WhatsApp.
            </p>
          </FadeIn>
          
          <FadeIn direction="up" delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://wa.me/8619924554911" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#13526c] hover:bg-[#176a88] text-white font-bold py-3 px-6 rounded-md transition-colors w-full sm:w-auto shadow-sm"
              >
                <MessageSquare className="w-5 h-5 mr-2" />
                Message on WhatsApp
              </a>
              
              <a 
                href="https://www.instagram.com/terra_electric_1/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-white hover:bg-slate-200 text-[#176a88] font-bold py-3 px-6 rounded-md transition-colors w-full sm:w-auto shadow-sm"
              >
                <Instagram className="w-5 h-5 mr-2" />
                Follow Instagram
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
