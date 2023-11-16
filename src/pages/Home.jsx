import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Badge from "../components/Badge";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="mx-auto flex max-w-md flex-col items-center md:max-w-xl lg:max-w-5xl">
        <Link
          className="my-10 rounded-lg bg-primary p-4 hover:shadow-[inset_-12px_-8px_40px_#46464620] "
          to={"/main"}
        >
          Look at the places!
        </Link>
        <div className="bg-white p-5 text-center text-gray-800">
          <h2 className="mb-4 text-2xl font-semibold">
            Discover the Essence of Slow Travel
          </h2>
          <p className="mb-3 text-lg">
            Slow Travel is more than a journey; it's a mindful approach to
            exploring the world. Inspired by our ancestral roots and the Slow
            Movement, it emphasizes a deep connection with the places we visit,
            prioritizing environmental responsibility, cultural immersion, and a
            pace that lets the soul breathe.
          </p>
          <p className="mb-3 text-lg">
            Our unique <strong>Slow Travel Index</strong> rates destinations in
            Barcelona on a scale from 0 to 10, measuring their compatibility
            with the ethos of slow travel. A score of
            <strong>{" 10"}</strong> represents the pinnacle of slow travel
            experiences — places that encourage deep cultural engagement,
            minimal environmental impact, and a pace that allows for genuine
            connections and self-reflection. A score of <strong>0</strong>, on
            the other hand, indicates destinations more aligned with fast-paced,
            conventional tourism.
          </p>
          <div className="my-10 flex justify-evenly gap-10">
            <Badge rating="2" />
            <Badge rating="7" />
            <Badge rating="10" />
          </div>
          <p className="text-lg">
            Join us in embracing a travel philosophy that respects our world and
            enriches our experiences. Explore our curated list of Barcelona's
            best slow travel spots, rated to help you find those perfect moments
            of pause and connection.
          </p>
        </div>

        <Card
          category="Turismo"
          name="Sagrada Familia"
          rating="0"
          address="C/ de Mallorca, 401"
        />
        <Link
          className="my-10 rounded-lg bg-primary p-4 hover:shadow-[inset_-12px_-8px_40px_#46464620] "
          to={"/main"}
        >
          Look at the places!
        </Link>
      </div>
    </>
  );
};

export default Home;
