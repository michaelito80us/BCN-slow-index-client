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
  const [places, setPlaces] = useState(null);
  const [cardsToShow, setCardsToShow] = useState(null);
  const [currentFilter, setCurrentFilter] = useState({
    category: "",
    zone: "",
    index: "",
  });
  // Let's create a variable for the search word:
  // const [query, setQuery] = useState("");
  // Create another state to manage the loading:
  // const [isLoading, setIsLoading] = useState(true);
  // Create another state to manage the initial loading:
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  // Set a state if there is a place or not:
  // const [placeExists, setPlaceExists] = useState(true);

  // Now let's get the data from the api. It will be an asynchronous process so we can use an async function. To handle the api call we use a try-catch.

  useEffect(() => {
    const getData = async () => {
      try {
        console.log("testing axios");
        const response = await axios.get("../../testdata.json");
        console.log("reponse data: ", response.data);
        setPlaces(response.data.results);
        setCardsToShow(response.data.results);
        setIsLoadingInitial(false);
      } catch (error) {
        // console.log(error);
      }
    };
    getData();
  }, [setCurrentFilter]);

  // Let's create another function for the search functionality:
  // const getQuery = async () => {
  //   try {
  //     setIsLoading(true);
  //     // const searchResponse = await axios.get(
  //     //   `${query}`
  //     // );
  //     // console.log(searchResponse.data);
  //     //setPlaces(...);
  //     setPlaceExists(true);
  //     // console.log(characters);
  //     setIsLoading(false);
  //   } catch (error) {
  //     // console.log(error);
  //     // If we can't find a character, we will set the characterExists to false:
  //     setPlaceExists(false);
  //     setIsLoading(false);
  //   }
  // };

  // We will use a useEffect to getData is invoked when the App component is mounted:

  // And another useEffect for the search feature:
  // useEffect(() => {
  //   getQuery();
  // }, [query]);

  // Let's create a clause so we have a spinner while the data is loading:
  if (isLoadingInitial) {
    return <DotLoader color="#36d7b7" size={60} />;
  }

  return (
    <div className="main-container">
      {/* <section>
        <div className="search-container">
          <label htmlFor="search-char">Search for a Place: </label>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        {characterExists === false ? (
          <p style={{color: "red"}}>Can't find a place!</p>
        ) : (
          <div className="places-list">
            {characters.map((eachCharacter) => (
              <Card character={eachCharacter} key={eachCharacter.id} />
            ))}
          </div>
        )}
      </section> */}
      <MapPage locations={places} />
      <Filter
        zones={ZONES}
        categories={CATEGORIES}
        setCurrentFilter={setCurrentFilter}
      />
      {places.map((eachPlace, i) => (
        <Card
          key={i}
          category={eachPlace.category}
          name={eachPlace.name}
          rating={eachPlace.rating}
        />
      ))}
    </div>
  );
};

export default Main;
