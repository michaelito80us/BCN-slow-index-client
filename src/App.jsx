import Footer from "./components/Footer";
import Nav from "./components/Nav";

function App() {
  

  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav />
      <div className="items-center w-100">
        <h1>Barcelona Slow Index</h1>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, sint eaque vel eligendi ea molestias incidunt dolores, voluptas tenetur quam quod quae aspernatur? Ipsa animi suscipit dolore praesentium maxime quos!</h2>
      </div>
      <Footer />
    </div>
  );
}

export default App;
