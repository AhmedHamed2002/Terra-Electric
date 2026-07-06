import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FadeIn from "@/components/shared/FadeIn";

const faqs = [
  {
    question: "How do I order a vehicle?",
    answer: "Message us on WhatsApp with the model, budget, and your country.",
  },
  {
    question: "Where can I see your vehicles?",
    answer: "On Instagram, TikTok, and YouTube — not on this website.",
  },
  {
    question: "How does payment work?",
    answer: "Bank transfer, only after you approve our in-China inspection photos/video.",
  },
  {
    question: "Do you have a showroom or online store?",
    answer: "No — we work through social media and WhatsApp.",
  },
  {
    question: "Which countries do you ship to? ",
    answer: "30+ countries across the Middle East, Africa, and Southeast Asia.",
  },
];

export default function FaqAccordion() {
  return (
    <section className="px-4 pb-20 pt-10 max-w-7xl mx-auto w-full relative z-10">
      <FadeIn direction="up">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="border border-slate-200 rounded-lg bg-white px-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-base cursor-pointer font-bold text-slate-900 hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </FadeIn>
    </section>
  );
}
