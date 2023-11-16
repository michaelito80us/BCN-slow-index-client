import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import PlaceDetails from "./pages/PlaceDetails";

const App = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/details/:placeId" element={<PlaceDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
