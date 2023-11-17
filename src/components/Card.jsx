import Badge from "./Badge";

const Card = ({ category, name, rating, address }) => {
  return (
    <div
      className="cards bg-cove relative m-auto mt-10 flex h-40 w-96 flex-col rounded-xl border border-black/10 p-3 text-gray-800 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.unsplash.com/photo-1464730282481-19bd52679224?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <h2 className="text-2xl overflow-hidden max-w[20rem]">{name.replaceAll(/_/g," ") }</h2>
      <p className="pb-4 text-sm lowercase">{category}</p>
      <div className="">{address.replaceAll(/_/g," ") }</div>
      <div className="absolute bottom-3 right-3">
        <Badge rating={rating} />
      </div>
    </div>
  );
};

export default Card;
