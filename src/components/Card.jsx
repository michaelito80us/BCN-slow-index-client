import Badge from "./Badge";

const Card = ({ category, name, rating, address }) => {
  return (
    <div className="cards relative m-auto mt-10 flex h-40 w-96 flex-col rounded-xl border border-black/10 p-3 text-gray-800 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]">
      <h2 className="text-2xl">{name}</h2>
      <p className="pb-4 text-sm">{category}</p>
      <div className="">{address}</div>
      <div className="absolute bottom-3 right-3">
        <Badge rating={rating} />
      </div>
    </div>
  );
};

export default Card;
