import { Link } from "react-router-dom";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        <h1 className="">Barcelona Slow Index</h1>
        <h2 className="m-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sint
          eaque vel eligendi ea molestias incidunt dolores, voluptas tenetur
          quam quod quae aspernatur? Ipsa animi suscipit dolore praesentium
          maxime quos!
        </h2>
        <Link className="p-4 m-4 bg-primary" to={"/main"}>
          Look at the places!
        </Link>
      </div>
    </>
  );
};

export default Home;
