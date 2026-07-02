import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Terra Electric — End-to-End EV Sourcing & Export",
  description:
    "Explore Terra Electric's full suite of services: factory-direct EV sourcing, quality inspection, export documentation, logistics, and technical consulting for international buyers.",
  keywords:
    "China EV export services, electric vehicle sourcing services, EV inspection service, BYD export agent, Chinese car export logistics, EV import consulting",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Our Services | Terra Electric — End-to-End EV Sourcing & Export",
    description:
      "Explore Terra Electric's full suite of services: factory-direct EV sourcing, quality inspection, export documentation, logistics, and technical consulting for international buyers.",
    url: "/services",
    type: "website",
    images: [
      {
        url: "/assets/images/logo_banner.png",
        width: 1200,
        height: 630,
        alt: "Terra Electric — Our Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Terra Electric — End-to-End EV Sourcing & Export",
    description:
      "Explore Terra Electric's full suite of services: factory-direct EV sourcing, quality inspection, export documentation, logistics, and technical consulting.",
    images: ["/assets/images/logo_banner.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
