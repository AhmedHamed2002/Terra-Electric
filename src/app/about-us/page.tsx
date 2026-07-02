import AboutHero from "@/components/about/AboutHero";
import OurIdentity from "@/components/about/OurIdentity";
import FounderJourney from "@/components/about/FounderJourney";
import WhyChinaLeads from "@/components/about/WhyChinaLeads";
import ExportMarkets from "@/components/about/ExportMarkets";
import AboutCTA from "@/components/about/AboutCTA";
import Footer from "@/components/shared/Footer";

export default function AboutUsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full overflow-hidden">
        <AboutHero />
        <OurIdentity />
        <FounderJourney />
        <WhyChinaLeads />
        <ExportMarkets />
        <AboutCTA />
        <Footer />
        </main>
    );
}
