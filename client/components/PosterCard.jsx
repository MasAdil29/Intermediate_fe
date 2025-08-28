export default function PosterCard({ image, badge, topLabel }) {
  return (
    <div className="relative w-full min-w-[150px] md:min-w-[180px] lg:min-w-[234px] aspect-[234/365] rounded-lg overflow-hidden cursor-pointer group">
      <img
        src={image}
        alt="Movie Poster"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Badge */}
      {badge && (
        <div className="absolute top-2 md:top-4 left-2 md:left-4 px-2 md:px-2.5 py-1 bg-chill-primary rounded-2xl md:rounded-3xl border border-chill-primary">
          <span className="text-white text-xs md:text-sm font-bold font-lato">
            {badge}
          </span>
        </div>
      )}

      {/* Top Label */}
      {topLabel && (
        <div className="absolute top-0 right-0 px-1 py-1 bg-chill-error rounded-bl">
          <span className="text-white text-xs md:text-sm font-lato leading-tight">
            Top
            <br />
            10
          </span>
        </div>
      )}
    </div>
  );
}
