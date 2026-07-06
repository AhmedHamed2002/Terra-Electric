import Image from "next/image";

export default function ServicesHero() {
  return (
    <section className="relative w-full min-h-[57vh] md:min-h-[70vh] flex items-center justify-center text-white text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/service_banner.png"
          alt="Services Banner"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-[#0f172a]/35 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0f172a]/80"></div>
      </div>
      <div className="relative z-10 max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-2xl md:text-5xl font-sebold mb-6 tracking-tight font-serif text-white drop-shadow-md">
          Comprehensive EV Import
          <br />
          Services
        </h1>
        <p className="text-base md:text-xl text-slate-200 font-light max-w-2xl mx-auto drop-shadow">
          From initial sourcing in China to final delivery at your doorstep,
          Terra Electric manages every aspect of your EV transition with
          technical precision.
        </p>
      </div>

      {/* Decorative wave at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg
          className="relative block w-full h-[50px] md:h-[80px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.2,194,105.15,238.13,95.3,280.9,74.5,321.39,56.44Z"
            className="fill-[#f8fafc]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
