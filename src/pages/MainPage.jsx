import { useEffect, useState } from "react";
import axios from "axios";
import DotLoader from "react-spinners/DotLoader";
import MapPage from "../components/MapPage";
import Card from "../components/Card";
import Filter from "../components/Filter";

const ZONES = [
  { value: "EL_RAVAL", label: "El Raval" },
  { value: "LA_DRETA_DE_LEIXAMPLE", label: "La Dreta De Leixample" },
  {
    value: "LANTIGA_ESQUERRA_DE_LEIXAMPLE",
    label: "L'Antiga Esquerra De L'Eixample",
  },
  { value: "SANT_ANTONI", label: "Sant Antoni" },
  {
    value: "LA_NOVA_ESQUERRA_DE_LEIXAMPLE",
    label: "La Nova Esquerra De L'Eixample",
  },
  { value: "EL_POBLENOU", label: "El Poblenou" },
  { value: "EL_CAMP_DE_LARPA_DEL_CLOT", label: "El Camp De L'Arpa Del Clot" },
  { value: "EL_FORT_PIENC", label: "El Fort Pienc" },
  {
    value: "EL_PARC_I_LA_LLACUNA_DEL_POBLENOU",
    label: "El Parc I La Llacuna Del Poblenou",
  },
  { value: "VALLCARCA_I_ELS_PENITENTS", label: "Vallcarca I Els Penitents" },
  { value: "LES_CORTS", label: "Les Corts" },
  { value: "EL_CLOT", label: "El Clot" },
  { value: "PEDRALBES", label: "Pedralbes" },
  {
    value: "VILAPICINA_I_LA_TORRE_LLOBETA",
    label: "Vilapicina I La Torre Llobeta",
  },
  { value: "LA_SAGRERA", label: "La Sagrera" },
  { value: "SANT_ANDREU", label: "Sant Andreu" },
  { value: "PORTA", label: "Porta" },
  { value: "LA_MATERNITAT_I_SANT_RAMON", label: "La Maternitat I Sant Ramon" },
  { value: "LA_BARCELONETA", label: "La Barceloneta" },
  { value: "LA_SALUT", label: "La Salut" },
  { value: "EL_COLL", label: "El Coll" },
  { value: "VERDUN", label: "Verdun" },
  { value: "LA_GUINEUETA", label: "La Guineueta" },
  { value: "LA_VERNEDA_I_LA_PAU", label: "La Verneda I La Pau" },
  { value: "LA_TRINITAT_VELLA", label: "La Trinitat Vella" },
  { value: "EL_BON_PASTOR", label: "El Bon Pastor" },
  { value: "OTRO", label: "Otro" },
];

const CATEGORIES = [
  { value: "TIENDAS", label: "Tienda" },
  { value: "ATTRACCIONES", label: "Atraccion" },
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
    const postData = async () => {
      try {
        setIsLoadingInitial(true);
        const response = await axios.post(
          "http://localhost:8081/interestpoints/filters/",
          currentFilter
        );
        setResponseData(response.data);
        setIsLoadingInitial(false);
      } catch (error) {
        console.error("Error in Axios POST request: ", error);
        setError(error.message);
      }
    };

    postData();
  }, [setCurrentFilter]);

  if (isLoadingInitial) {
    return <DotLoader color="#36d7b7" size={60} />;
  }

  return (
    <div className="mx-4 pb-10">
      <Filter
        zones={ZONES}
        categories={CATEGORIES}
        setCurrentFilter={setCurrentFilter}
      />
      <MapPage locations={responseData} />
      <div className="flex flex-wrap gap-5">
        {!isLoadingInitial &&
          responseData &&
          responseData.map((place, i) => (
            <Card
              key={i}
              category={place.category}
              name={place.name}
              rating={place.rating}
              address={place.address}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
