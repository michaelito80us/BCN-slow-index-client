import ratingToColor from "../utils/ratingColor";

const Badge = ({ rating }) => {
  const color = ratingToColor(Number(rating));
  return (
    <div style={{ backgroundColor: color }} className="w-6 h-8">
      {rating}
    </div>
  );
};

export default Badge;
