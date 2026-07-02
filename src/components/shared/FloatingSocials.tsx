"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { X, Facebook, Instagram, Youtube } from "lucide-react";

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

const socialLinks = [
  {
    name: "WhatsApp",
    Icon: WhatsappIcon,
    url: "https://wa.me/8619924554911",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    name: "Facebook",
    Icon: Facebook,
    url: "https://www.facebook.com/profile.php?id=100094682284917",
    color: "bg-[#1877F2] hover:bg-[#165bd0]",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    url: "https://www.instagram.com/terra_electric_1/",
    color:"bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#E97A1F] hover:via-[#C81E6D] hover:to-[#6F2DBD]",
  },
  {
    name: "YouTube",
    Icon: Youtube,
    url: "https://www.youtube.com/@mahmoudinchina/videos",
    color: "bg-[#FF0000] hover:bg-[#CC0000]",
  },
];

export default function FloatingSocials() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-0 my-3 right-4 z-50 flex flex-col items-end gap-3" ref={containerRef}>
      <div 
        className={cn(
          "flex flex-col gap-2 transition-all duration-300 origin-bottom",
          isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-50 translate-y-1 pointer-events-none"
        )}
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "flex items-center me-0.5 md:me-1 justify-center w-10 h-10 md:w-12 md:h-12 rounded-full text-white shadow-lg transition-transform hover:scale-110",
              social.color
            )}
            title={social.name}
          >
            <social.Icon className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        ))}
      </div>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative cursor-pointer flex items-center justify-center w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#1a395a] shadow-2xl hover:scale-105 transition-transform focus:outline-none"
      >
        {!isOpen && (
          <div className="absolute inset-0 bg-[#529ae7c4] opacity-25 animate-ping rounded-full z-0"></div>
        )}
        <div className="relative z-10 flex items-center justify-center">
          {isOpen ? (
            <X className="w-5 h-5 md:w-8 md:h-8 text-[#60a5ef]" />
          ) : (
            <Image 
              src="/assets/images/logo_icon.png" 
              alt="Pymerstan Logo" 
              width={32} 
              height={36} 
              className="rounded-full object-contain"
            />
          )}
        </div>
      </button>
    </div>
  );
}
