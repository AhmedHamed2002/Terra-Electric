import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Terra Electric — Answers About Buying Chinese EVs",
  description:
    "Get answers to the most common questions about sourcing, importing, and buying genuine Chinese electric vehicles through Terra Electric. Shipping, pricing, brands, and more.",
  keywords:
    "EV sourcing FAQ, import Chinese electric car questions, BYD export FAQ, China EV buying guide, electric vehicle import questions, Terra Electric FAQ",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Terra Electric — Answers About Buying Chinese EVs",
    description:
      "Get answers to the most common questions about sourcing, importing, and buying genuine Chinese electric vehicles through Terra Electric.",
    url: "/faq",
    type: "website",
    images: [
      {
        url: "/assets/images/logo_banner.png",
        width: 1200,
        height: 630,
        alt: "Terra Electric — FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Terra Electric — Answers About Buying Chinese EVs",
    description:
      "Get answers to the most common questions about sourcing, importing, and buying genuine Chinese electric vehicles through Terra Electric.",
    images: ["/assets/images/logo_banner.png"],
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
