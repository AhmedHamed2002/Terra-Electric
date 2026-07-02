import Image from "next/image";
import { PlayCircle, Settings, Instagram, CheckCircle2, Video, Facebook } from "lucide-react";

export default function LatestFromField() {
  const items = [
    {
      src: "/assets/images/photo_1.avif",
      title: "View Reel",
      description: "Checking the battery health on this new BYD Seal. #TerraElectric...",
      icon: <PlayCircle className="w-4 h-4" />,
      platform: "instagram"
    },
    {
      src: "/assets/images/photo_2.avif",
      title: "Software Update",
      description: "Verifying the latest OTA update for a client in Norway.",
      icon: <Settings className="w-4 h-4" />,
      platform: "facebook"
    },
    {
      src: "/assets/images/photo_3.avif",
      title: "Quality Check",
      description: "Final interior inspection before shipping out to Dubai.",
      icon: <CheckCircle2 className="w-4 h-4" />,
      platform: "instagram"
    },
    {
      src: "/assets/images/photo_4.avif",
      title: "Port Logistics",
      description: "Safe and secure loading process at Shanghai Port.",
      icon: <Video className="w-4 h-4" />,
      platform: "facebook"
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white w-full">
      <div className="container-fluid md:px-10 px-5 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-[#0d1b2a] mb-4">
          Latest From the Field
        </h2>
        <p className="text-gray-600 max-w-3xl mb-12">
          Real exports complete with photos from port logistics... No stock photos merely.
        </p>

        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-6 sm:pb-0 snap-x snap-mandatory hide-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative w-[75vw] sm:w-full shrink-0 sm:shrink aspect-3/4 rounded-lg overflow-hidden group shadow-md cursor-pointer snap-center"
            >
              <Image
                src={item.src}
                alt={`Field export ${index + 1}`}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 50vw, 25vw"
                quality={80}
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Top right icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {item.platform === 'instagram' ? (
                  <div className="bg-black/30 p-1.5 rounded-md backdrop-blur-md border border-white/20">
                    <Instagram className="w-5 h-5 text-white" />
                  </div>
                ) : (
                  <div className="bg-black/30 p-1.5 rounded-md backdrop-blur-md border border-white/20">
                    <Facebook className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>

              {/* Bottom text content */}
              <div className="absolute bottom-0 left-0 w-full p-5 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-75">
                <div className="flex items-center gap-2 text-white font-bold mb-2">
                  {item.icon}
                  <span className="text-sm tracking-wide">{item.title}</span>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />
      </div>
    </section>
  );
}
