import ContactHero from "@/components/contact-us/ContactHero";
import ContactCards from "@/components/contact-us/ContactCards";
import FeaturesStrip from "@/components/contact-us/FeaturesStrip";
import Footer from "@/components/shared/Footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen flex flex-col bg-white">
        <div className="flex-1">
            <ContactHero />
            <ContactCards />
        </div>
        <FeaturesStrip />
        <Footer />
        </main>
    );
}
