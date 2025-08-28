import { Star } from "lucide-react";

export default function MovieCard({ title, image, rating, badge, showRating = true }) {
  return (
    <div className="flex flex-col gap-2.5 group cursor-pointer min-w-[200px] md:min-w-[250px] lg:min-w-[302px]">
      {/* Movie Image Container */}
      <div className="relative w-full aspect-[302/162] rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Badge */}
        {badge && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 px-2 md:px-2.5 py-1 bg-chill-primary rounded-2xl md:rounded-3xl border border-chill-primary">
            <span className="text-white text-xs md:text-sm font-bold font-lato">{badge}</span>
          </div>
        )}
      </div>

      {/* Movie Info */}
      {showRating && (
        <div className="flex justify-between items-center px-2 md:px-4 py-0">
          <h3 className="text-white text-base md:text-lg font-bold font-lato truncate">{title}</h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="w-3 md:w-4 h-3 md:h-4 fill-white text-white" />
            <span className="text-white text-xs md:text-sm font-lato">{rating}</span>
          </div>
        </div>
      )}
    </div>
  );
}
