import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";

export default function Footer() {
  return (
    <footer className="bg-[#0b1421] text-gray-400 pt-8 pb-12 w-full">
      <FadeIn direction="up" className="container-fluid md:px-10 px-5 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h3 className="text-xl font-bold font-serif  text-white uppercase tracking-wider">
              Terra Electric
            </h3>
            <p className="text-xs md:text-sm text-center md:text-start">
              Your direct line to genuine Chinese electric vehicles,<br/>
              eliminating middlemen and markups.
              </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/faq" className="hover:text-white transition-colors">
              FAQ
            </Link>
            <Link href="/contact-us" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          
          <div className="text-sm text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Terra Electric.</p>
            <p>Direct Access. Unwavering Excellence.</p>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}
