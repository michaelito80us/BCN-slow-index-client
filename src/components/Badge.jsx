import ratingToColor from "../utils/ratingColor";

const Badge = ({ rating }) => {
  const color = ratingToColor(Number(rating));
  return (
    <div
      style={{ backgroundColor: color }}
      className="flex w-16 flex-col items-center rounded-lg border border-secondary/50 py-1 text-white"
    >
      <div className="text-xs"> BCN</div>
      <div className="text-xs">SLOW</div>
      <div className="text-xs">INDEX</div>
      {rating}
    </div>
  );
};

export default Badge;
