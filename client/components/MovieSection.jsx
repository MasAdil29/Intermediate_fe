import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MovieSection({ title, children }) {
  return (
    <section className="px-20 py-10">
      <h2 className="text-white text-3xl font-bold font-lato mb-8">{title}</h2>
      
      <div className="relative">
        {/* Navigation Arrows */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-11 h-11 rounded-3xl border border-chill-border bg-chill-body flex items-center justify-center hover:bg-chill-surface transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-11 h-11 rounded-3xl border border-chill-border bg-chill-body flex items-center justify-center hover:bg-chill-surface transition-colors">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="flex gap-6 overflow-hidden">
          {children}
        </div>
      </div>
    </section>
  );
}
