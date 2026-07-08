import FadeIn from "@/components/shared/FadeIn";

export default function Brands() {
  const brands = [
    "BYD",
    "MG",
    "Chery",
    "Geely",
    "Changan",
    "Leapmotor",
  ];

  return (
    <section className="py-16 bg-white w-full border-t border-gray-100">
      <div className="container-fluid md:px-10 px-5 mx-auto text-center">
        <FadeIn direction="up">
          <h3 className="text-2xl md:text-4xl font-bold font-serif text-[#0d1b2a] mb-4">
            Vehicles We Work With
          </h3>
          <p className="text-gray-500 mb-16 max-w-7xl mx-auto text-sm md:text-base">
            BYD, NIO, Xpeng, Li Auto, Zeekr, plus all regular internal combustion
            vehicles on request.
          </p>
        </FadeIn>

        <FadeIn direction="up" delay={0.2}>
          <div className="relative w-full overflow-hidden py-4">
            {/* Fading Edges */}
            <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
            <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

            <div className="flex w-max animate-scroll items-center gap-12 md:gap-24 opacity-60">
              {[...brands, ...brands].map((brand, index) => (
                <div
                  key={index}
                  className="text-2xl md:text-3xl font-bold text-gray-600 uppercase tracking-widest grayscale hover:grayscale-0 hover:text-[#176a88] transition-all duration-300 whitespace-nowrap"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        <style
          dangerouslySetInnerHTML={{
            __html: `
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(calc(-50% - 1.5rem)); }
          }
          @media (min-width: 768px) {
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(calc(-50% - 3rem)); }
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `,
          }}
        />
      </div>
    </section>
  );
}
