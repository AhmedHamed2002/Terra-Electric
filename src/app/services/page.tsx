import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesCTA from "@/components/services/ServicesCTA";
import Footer from "@/components/shared/Footer";

export default function ServicesPage() {
    return (
        <main className="min-h-screen flex flex-col bg-slate-50">
            <ServicesHero />
            <ServicesGrid />
            <ServicesCTA />
            <Footer />
        </main>
    );
}
