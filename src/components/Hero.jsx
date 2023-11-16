const Hero = () => {
  return (
    <div
      className="min-h-[50vh] hero bg-cover bg-bottom bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1464730282481-19bd52679224?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Barcelona Unrushed</h1>
          <p className="mb-5">
            Embrace the Journey: Discover Barcelona at a Slower Pace
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
