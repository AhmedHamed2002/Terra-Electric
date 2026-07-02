import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Terra Electric — China-Based EV Sourcing Experts",
  description:
    "Learn about Terra Electric's mission, our founder's journey inside Chinese EV factories, and why we are the most trusted direct-source partner for international EV buyers.",
  keywords:
    "about Terra Electric, China EV sourcing company, electric vehicle export, Chinese EV expert, BYD sourcing, EV import agent China",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | Terra Electric — China-Based EV Sourcing Experts",
    description:
      "Learn about Terra Electric's mission, our founder's journey inside Chinese EV factories, and why we are the most trusted direct-source partner for international EV buyers.",
    url: "/about-us",
    type: "website",
    images: [
      {
        url: "/assets/images/logo_banner.png",
        width: 1200,
        height: 630,
        alt: "Terra Electric — About Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Terra Electric — China-Based EV Sourcing Experts",
    description:
      "Learn about Terra Electric's mission, our founder's journey inside Chinese EV factories, and why we are the most trusted direct-source partner for international EV buyers.",
    images: ["/assets/images/logo_banner.png"],
  },
};

export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
