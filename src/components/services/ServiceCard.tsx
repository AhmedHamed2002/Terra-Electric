import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon
}: ServiceCardProps) {
  return (
    <div className="bg-white group transition-all duration-700 hover:scale-105 border border-slate-200 flex flex-col justify-between p-6 rounded-md shadow-sm hover:shadow-md">
      <div>
        <div className="bg-gray-100 w-12 h-12 group-hover:bg-[#0f172a] flex items-center justify-center rounded-sm mb-4 transition-all duration-300">
          <Icon className="text-[#0c8aa0] group-hover:text-[#06b6d4] w-6 h-6 transition-all duration-300" />
        </div>
        <h3 className="text-xl font-semibold text-slate-800 font-serif mb-4">{title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
