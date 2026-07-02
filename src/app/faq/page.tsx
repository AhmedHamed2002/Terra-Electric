import FaqHero from "@/components/faq/FaqHero";
import FaqAccordion from "@/components/faq/FaqAccordion";
import FaqCTA from "@/components/faq/FaqCTA";
import Footer from "@/components/shared/Footer";

export default function FAQPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
        <div className="flex-1">
            <FaqHero />
            <FaqAccordion />
            <FaqCTA />
        </div>
        <Footer />
        </main>
    );
}
