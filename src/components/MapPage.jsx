import { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ratingToColor from "../utils/ratingColor";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapPage = () => {
  const [viewport, setViewport] = useState({
    latitude: 41.38,
    longitude: 2.168,
    zoom: 12,
  });

  // Fake data for 5 reference pins
  const pins = [
    { latitude: 41.38, longitude: 2.1681, rating: 10 },
    { latitude: 41.39, longitude: 2.1681, rating: 7 },
    { latitude: 41.37, longitude: 2.16812, rating: 4 },
    { latitude: 41.36, longitude: 2.1679, rating: 2 },
    { latitude: 41.39, longitude: 2.16797, rating: 9 },
  ];

  return (
    <Map
      {...viewport}
      onMove={(evt) => setViewport(evt.viewport)}
      style={{ width: 800, height: 600 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker longitude={-122.41} latitude={37.78} color="red" />
      {pins.map((pin, index) => (
        <Marker
          key={index}
          latitude={pin.latitude}
          longitude={pin.longitude}
          color={ratingToColor(pin.rating)}
        >
          {/* <div style={{ color: "red" }}>📍</div> */}
        </Marker>
      ))}
    </Map>
  );
};

export default MapPage;
