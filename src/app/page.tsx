import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Process from "@/components/home/Process";
import Brands from "@/components/home/Brands";
import LatestFromField from "@/components/home/LatestFromField";
import MeetFounder from "@/components/home/MeetFounder";
import CTA from "@/components/home/CTA";
import Footer from "@/components/shared/Footer";

export default function Page() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden">
            <Hero />
            <Features />
            <Process />
            <Brands />
            <LatestFromField />
            <MeetFounder />
            <CTA />
            <Footer />
        </main>
    );
}
