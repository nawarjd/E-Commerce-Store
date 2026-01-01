export default function StarRating({ rating }) {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, i) => {
        const starNumber = i + 1;

        if (starNumber <= fullStars) {
          return <FullStar key={i} />;
        }

        if (starNumber === fullStars + 1) {
          if (decimal >= 0.75) return <FullStar key={i} />;
          if (decimal >= 0.25) return <HalfStar key={i} />;
          return <EmptyStar key={i} />;
        }

        // Remaining stars
        return <EmptyStar key={i} />;
      })}
    </div>
  );
}


/* ---------------- FULL STAR SVG ---------------- */
function FullStar() {
  return (
    <svg
      className="w-5 h-5 text-yellow-400"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
    </svg>
  );
}

/* ---------------- HALF STAR SVG ---------------- */
function HalfStar() {
  return (
    <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="halfGradient">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="transparent" />
        </linearGradient>
      </defs>

      <path
        fill="url(#halfGradient)"
        stroke="currentColor"
        d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z"
      />
    </svg>
  );
}

/* ---------------- EMPTY STAR SVG ---------------- */
function EmptyStar() {
  return (
    <svg
      className="w-5 h-5 text-gray-300"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M12 .587l3.668 7.568L24 9.748l-6 5.848L19.335 24 12 19.897 4.665 24 6 15.596 0 9.748l8.332-1.593z" />
    </svg>
  );
}
