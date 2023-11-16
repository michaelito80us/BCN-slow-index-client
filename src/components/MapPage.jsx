import { useState } from "react";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import ratingToColor from "../utils/ratingColor";

const MAPBOX_TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const MapPage = ({ locations }) => {
  const [viewport, setViewport] = useState({
    latitude: 41.38,
    longitude: 2.168,
    zoom: 12,
  });

  const navControlStyle = {
    right: 10,
    top: 10,
  };

  const fullscreenControlStyle = {
    right: 10,
    top: 50,
  };

  return (
    <div className="map-container mx-auto">
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
          />
        ))}

        <NavigationControl style={navControlStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
      </Map>
    </div>
  );
};

export default MapPage;
