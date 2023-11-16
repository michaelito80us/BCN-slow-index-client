import { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  Popup,
  GeolocateControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ratingToColor from "../utils/ratingColor";
import { ClimbingBoxLoader } from "react-spinners";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapPage = ({ locations }) => {
  const [viewport, setViewport] = useState({
    latitude: 41.38,
    longitude: 2.168,
    zoom: 12,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  const fullscreenControlStyle = {
    right: 10,
    top: 50,
  };

  return (
    <div className="mx-auto map-container">
      <Map
        {...viewport}
        onMove={(evt) => setViewport(evt.viewport)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={MAPBOX_TOKEN}
      >
        {locations.map((pin, index) => (
          <Marker
            key={index}
            latitude={pin.latitude}
            longitude={pin.longitude}
            color={ratingToColor(pin.rating)}
            onClick={() => setSelectedLocation(pin)}
          />
        ))}

        <NavigationControl style={navControlStyle} />
        <FullscreenControl style={fullscreenControlStyle} />

        {selectedLocation && (
          <Popup
            longitude={selectedLocation.longitude}
            latitude={selectedLocation.latitude}
            anchor="bottom"
            onClose={() => setSelectedLocation(null)}
            style={{ backgroundColor: "red" }}
          >
            {" "}
            hello
            {/* <div>
              <h2>{selectedLocation.name}</h2>
              <p>Rating: {selectedLocation.rating}</p>
              <button onClick={() => setSelectedLocation(null)}>Close</button>
            </div> */}
          </Popup>
        )}
        <GeolocateControl />
      </Map>
    </div>
  );
};

export default MapPage;
