import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, Info, Phone, Award, ArrowRight, HelpCircle } from "lucide-react";

/* ---------------- Navbar ---------------- */
export default function Navbar() {
  /* -------- State and Hooks -------- */
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = pathname === "/" || pathname === "/about-us" || pathname === "/services";
  
  /* -------- Active link -------- */
  const isActive = (path: string) =>
      isTransparent
      ? pathname === path
        ? "text-white font-bold pb-1 "
        : "text-gray-200 font-normal hover:text-gray-50"
      : pathname === path
        ? `font-bold pb-1 ${isScrolled ? "text-white" : "text-[#23a4e1]"}`
        : `${isScrolled ? "text-gray-200 font-normal hover:text-gray-50" : "text-gray-700 hover:text-[#1773cf]"}`;

    const navBgColor = isTransparent
      ? isScrolled
        ? "bg-[#0b1421]/90"
        : "bg-transparent"
      : isScrolled
        ? "bg-[#0b1421]/90"
        : "bg-white";

  return (
    <nav
      className={`fixed top-0 z-50 py-4 w-full ${navBgColor} ${isScrolled ? "backdrop-blur-md" : ""} transition-all duration-300 notranslate`}
      data-no-translate="true"
      translate="no"
    >
      <div className="container-fluid md:px-10 px-3 mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/assets/images/logo_icon.png"
              alt="Terra Electric"
              width={400}
              height={120}
              className="h-8 md:h-10 w-auto object-contain"
              priority
            />
            <span
              className={`text-xs md:text-sm ms-2 tracking-widest ${isTransparent ? "text-white" : isScrolled ? "text-white" : "text-[#132648]"} uppercase font-medium font-serif`}
            >
              Terra Electric
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li>
            <Link
              href="/"
              className={`flex items-center font-serif gap-1.5 transition-colors ${isActive("/")}`}
            >
              <span>Home</span>
            </Link>
          </li>

          <li>
            <Link
              href="/about-us"
              className={`flex items-center font-serif gap-1.5 transition-colors ${isActive("/about-us")}`}
            >
              <span>About</span>
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className={`flex items-center font-serif gap-1.5 transition-colors ${isActive("/services")}`}
            >
              <span>Services</span>
            </Link>
          </li>
          <li>
            <Link
              href="/faq"
              className={`flex items-center font-serif gap-1.5 transition-colors ${isActive("/faq")}`}
            >
              <span>FAQ</span>
            </Link>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-2">
          {/* <ThemeToggle /> */}

          {/* contact button */}
          <Link
            href="/contact-us"
            className={`hidden md:flex items-center gap-1.5 transition-colors ${isActive("/contact-us")}`}
          >
            <Button
              variant="outline"
              className={`cursor-pointer ${isTransparent ? (isScrolled ? "text-white! bg-[#1e9bd4d1] border-0 hover:bg-[#207fb8]! " : "text-white! bg-[#102741] border-0 hover:bg-[#16365b]!") : isScrolled ? "text-white! bg-[#1e9bd4d1] border-0 hover:bg-[#207fb8]!" : "text-white! bg-[#102741] border-0 hover:bg-[#16365b]! "}`}
            >
              <span className="text-xs md:text-base font-serif">Contact Us</span>
              <ArrowRight className="h-6 w-6 mt-0.5 hidden md:block" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Toggle menu"
                  className={`cursor-pointer ${isTransparent ? "text-white" : isScrolled ? "text-white" : "text-black"} hover:bg-white/10 hover:text-blue-500/70`}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-white text-black"
              >
                <SheetHeader className="text-left">
                  <SheetTitle>
                    <Link href="/" className="flex items-center">
                      <div className="flex items-center justify-center">
                        <Image
                          src="/assets/images/logo_icon.png"
                          alt="pymerstan"
                          width={400}
                          height={120}
                          className="h-7 w-auto object-contain"
                          priority
                        />
                        <span className={`text-xs ms-2 tracking-widest text-[#132648] uppercase font-medium font-serif`}>
                          Terra Electric
                        </span>
                      </div>
                    </Link>
                  </SheetTitle>
                  <SheetDescription className="text-slate-600 mt-4 font-serif">
                    Your direct line to genuine Chinese electric vehicles,
                    eliminating middlemen and markups.
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  <ul className="space-y-4 mx-4">
                    {[
                      { href: "/", label: "Home", icon: Home },
                      { href: "/about-us", label: "About", icon: Info },
                      { href: "/services", label: "Services", icon: Award },
                      { href: "/faq", label: "FAQ", icon: HelpCircle },
                    ].map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 text-base font-serif transition-colors ${
                            pathname === item.href
                              ? "text-[#034ca6]"
                              : "text-slate-600 hover:text-[#034ca6]"
                          }`}
                        >
                          <item.icon className="h-5 w-5" />
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-20 mx-4">
                    <Link
                      href="/contact-us"
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center text-center gap-3 text-lg rounded-lg p-2 font-serif transition-colors ${
                        pathname === "/contact-us"
                          ? "text-white bg-[#1e9bd4d1]"
                          : "text-white bg-[#102741] border-0 hover:bg-[#16365b]"
                      }`}
                    >
                      <span className="mx-auto"> Contact Us </span>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
