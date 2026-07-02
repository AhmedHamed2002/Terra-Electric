import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | Terra Electric",
  description:
    "The page you are looking for doesn't exist or has been moved. Return to Terra Electric's homepage to continue browsing our Chinese EV sourcing services.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFoundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
