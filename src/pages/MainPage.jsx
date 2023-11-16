import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import PlaceDetails from "./PlaceDetails";
import MapPage from "../components/MapPage";
import Card from "../components/Card";
import Filter from "../components/Filter";

const ZONES = [
  { value: "zone1", label: "Zone 1" },
  { value: "zone2", label: "Zone 2" },
  { value: "zone3", label: "Zone 3" },
  { value: "zone4", label: "Zone 4" },
  { value: "zone5", label: "Zone 5" },
  { value: "zone6", label: "Zone 6" },
];
const CATEGORIES = [
  { value: "tienda", label: "Tienda" },
  { value: "atraccion", label: "Atraccion" },
];

const Main = () => {
  // Let's create a state so we manage the places:
  const [responseData, setResponseData] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(null);
  const [currentFilter, setCurrentFilter] = useState({
    category: "",
    zone: "",
    index: "",
  });
  const [error, setError] = useState(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoadingInitial(true);
        const response = await axios.get("../../testdata.json");
        console.log("Response data: ", response.data.results);
        setResponseData(response.data.results);
        setIsLoadingInitial(false);
      } catch (error) {
        console.error("Error in Axios POST request: ", error);
        setError(error.message);
      }
    };
    getData();

    // const postData = async () => {
    //   try {
    //     const response = await axios.post(
    //       "https://example.com/api/filter",
    //       currentFilter,
    //     );
    //     console.log("Response data: ", response.data.results);
    //     setResponseData(response.data.results);
    //   } catch (error) {
    //     console.error("Error in Axios POST request: ", error);
    //     setError(error.message);
    //   }
    // };

    // postData();
  }, [setCurrentFilter]);

  if (isLoadingInitial) {
    return <DotLoader color="#36d7b7" size={60} />;
  }

  return (
    <div className="main-container">
      <MapPage locations={responseData} />
      <Filter
        zones={ZONES}
        categories={CATEGORIES}
        setCurrentFilter={setCurrentFilter}
      />
      {!isLoadingInitial &&
        responseData &&
        responseData.map((place, i) => (
          <Card
            key={i}
            category={place.category}
            name={place.name}
            rating={place.rating}
          />
        ))}
    </div>
  );
};

export default Main;
