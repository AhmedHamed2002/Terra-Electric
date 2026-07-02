import { Search, ClipboardCheck, Truck, FileText, Headset, Users } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Vehicle Sourcing",
    description: "we find the right car for your budget and country.",
    icon: Search
  },
  {
    title: "In-China Inspection",
    description: "physical inspection before you pay.",
    icon: ClipboardCheck
  },
  {
    title: "Shipping & Logistics",
    description: "door-to-port delivery, fully tracked.",
    icon: Truck
  },
  {
    title: "Export Documentation",
    description: "handled for you, start to finish.",
    icon: FileText
  },
  {
    title: "Post-Delivery Support",
    description: "spare parts and help after arrival.",
    icon: Headset
  },
  {
    title: "Group Buying",
    description: "combine orders with other buyers to cut shipping costs.",
    icon: Users
  },
];

export default function ServicesGrid() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
}
