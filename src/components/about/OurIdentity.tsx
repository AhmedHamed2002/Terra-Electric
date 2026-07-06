import FadeIn from "@/components/shared/FadeIn";

export default function OurIdentity() {
  return (
    <section className="py-8 md:pt-10 md:pb-14 bg-white w-full">
      <FadeIn direction="up" className="container-fluid md:px-10 px-5 mx-auto max-w-4xl text-center">
        <p className="text-[#0ea5e9] font-bold tracking-widest text-xs uppercase mb-4">
          OUR IDENTITY
        </p>
        <h2 className="text-2xl md:text-4xl font-bold font-serif text-[#0d1b2a] mb-12">
          The Bridge to Automotive Innovation
        </h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
          At Terra Electric, we don&apos;t just source vehicles. We manage the complete international commercial
          industry of our business, and global logistics. Centered on the principle of transparency, we provide clients first-hand
          access to a direct access in Tier 1 Chinese manufacturers, meaning that behind a vehicle in technology and
          electric progress, a connection to a modern marketplace.
        </p>
        <p className="text-gray-500 text-sm md:text-base leading-relaxed">
          Every vehicle sold through Terra Electric undergoes a personal inspection by our China-based team.
          We believe that trust is built not by promises, but by proof.
        </p>
      </FadeIn>
    </section>
  );
}
