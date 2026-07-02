import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Terra Electric — Reach Our EV Sourcing Team",
  description:
    "Get in touch with Terra Electric's sourcing experts via WhatsApp, social media, or visit our Shenzhen headquarters. Fast, direct, no-middleman communication.",
  keywords:
    "contact Terra Electric, EV sourcing contact, WhatsApp China EV, Shenzhen EV company, electric vehicle inquiry, BYD export contact",
  alternates: {
    canonical: "/contact-us",
  },
  openGraph: {
    title: "Contact Us | Terra Electric — Reach Our EV Sourcing Team",
    description:
      "Get in touch with Terra Electric's sourcing experts via WhatsApp, social media, or visit our Shenzhen headquarters. Fast, direct, no-middleman communication.",
    url: "/contact-us",
    type: "website",
    images: [
      {
        url: "/assets/images/logo_banner.png",
        width: 1200,
        height: 630,
        alt: "Terra Electric — Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Terra Electric — Reach Our EV Sourcing Team",
    description:
      "Get in touch with Terra Electric's sourcing experts via WhatsApp, social media, or visit our Shenzhen headquarters. Fast, direct, no-middleman communication.",
    images: ["/assets/images/logo_banner.png"],
  },
};

export default function ContactUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
