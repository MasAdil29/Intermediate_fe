import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MovieSection({ title, children }) {
  return (
    <section className="px-4 md:px-10 lg:px-20 py-6 md:py-10">
      <h2 className="text-white text-2xl md:text-3xl font-bold font-lato mb-6 md:mb-8">
        {title}
      </h2>

      <div className="relative">
        {/* Navigation Arrows - Hidden on mobile */}
        <button className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 z-10 w-11 h-11 rounded-3xl border border-chill-border bg-chill-body items-center justify-center hover:bg-chill-surface transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 z-10 w-11 h-11 rounded-3xl border border-chill-border bg-chill-body items-center justify-center hover:bg-chill-surface transition-colors">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Content */}
        <div className="flex gap-3 md:gap-6 overflow-x-auto scrollbar-hide">
          {children}
        </div>
      </div>
    </section>
  );
}
