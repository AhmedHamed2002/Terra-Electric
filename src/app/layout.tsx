import type { Metadata } from "next";
import { Playfair_Display, Leckerli_One, Dancing_Script } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/ui/providers";
import { Suspense } from "react";
import NavbarWrapper from "@/components/ui/NavbarWrapper";
import FloatingSocials from "@/components/shared/FloatingSocials";

// ─── Self-hosted Google Fonts (preloaded, non-blocking) ───────────────────────
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],   // only used weights — fewer woff2 files in critical path
  variable: "--font-playfair",
  display: "swap",
  preload: true,
});

const leckerliOne = Leckerli_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-leckerli",
  display: "swap",
  preload: false, // decorative, not LCP-critical
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-dancing",
  display: "swap",
  preload: false, // used only in MeetFounder signature
});

const siteUrl =
  process.env.NODE_ENV === "production"
    ? "https://terraelectric.store"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Terra Electric | Direct Chinese EV Sourcing — No Middlemen",
    template: "%s | Terra Electric",
  },
  description:
    "Terra Electric is a China-based export company. We help international buyers source genuine Chinese electric vehicles — without the markups and risk of middlemen who've never set foot inside a factory.",
  keywords:
    "Electric vehicles, Chinese electric vehicles, China EV export, BYD, Nio, Xpeng, Li Auto, EV sourcing, car export, direct EV import, Shenzhen EV supplier",

  authors: [{ name: "Terra Electric", url: siteUrl }],
  creator: "Terra Electric",
  publisher: "Terra Electric",
  category: "Automotive",

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "facebook-domain-verification": "ogkvg3dgmfc3gpo0acgsuny7mkvuzt",
    "google-site-verification": "google127b9861e4b2b04a",
  },

  icons: {
    icon: "/assets/images/logo_icon.png",
    shortcut: "/assets/images/logo_banner.png",
    apple: "/assets/images/logo_banner.png",
  },

  openGraph: {
    title: "Terra Electric | Direct Chinese EV Sourcing — No Middlemen",
    description:
      "Terra Electric is a China-based export company. We help international buyers source genuine Chinese electric vehicles — without the markups and risk of middlemen who've never set foot inside a factory.",
    type: "website",
    url: siteUrl,
    siteName: "Terra Electric",
    locale: "en_US",
    images: [
      {
        url: "/assets/images/logo_banner.png",
        width: 1200,
        height: 630,
        alt: "Terra Electric — Direct Chinese EV Sourcing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terra Electric | Direct Chinese EV Sourcing — No Middlemen",
    description:
      "Terra Electric is a China-based export company. We help international buyers source genuine Chinese electric vehicles — without the markups and risk of middlemen who've never set foot inside a factory.",
    images: ["/assets/images/logo_banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${leckerliOne.variable} ${dancingScript.variable}`}
    >
      <head>
      </head>
      <body
        suppressHydrationWarning
        className="bg-slate-50 premium-scrollbar darpremium-scrollbar transition-colors"
      >
        <Providers>
          <NavbarWrapper />
          <Suspense fallback={null}>
            <FloatingSocials />
            {children}
          </Suspense>
        </Providers>
      </body>
    </html>
  );
}
