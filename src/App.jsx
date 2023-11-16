

import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import MainPage from "./pages/MainPage";
import PlaceDetails from "./pages/PlaceDetails";



const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/main" element={<MainPage />}/>
        <Route path="/details/:placeId" element={<PlaceDetails />}/>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
