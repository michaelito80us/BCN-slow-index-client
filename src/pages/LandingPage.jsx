import Hero from "../components/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <div className="flex items-center justify-center">
        <button className="btn btn-primary">
          find the locations on the map
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
