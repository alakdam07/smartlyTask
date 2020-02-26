import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Locations from "./Locations";
const Map = () => {
  const [data, setData] = useState([]);
  const [showPopup, setShowPopup] = useState({});
  const [viewport, setViewport] = useState({
    width: "1200px",
    height: "600px",

    latitude: 60.171547,
    longitude: 24.938202,
    zoom: 1
  });

  const getEntries = () => {
    setData(Locations);
  };

  useEffect(() => {
    getEntries();
  }, []);

  return (
    <div className="map-body">
      <ReactMapGL
        className="map"
        {...viewport}
        mapStyle="mapbox://styles/alakdam/ck6q1kk6c0ees1ioecpa488tf"
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={setViewport}
      >
        {data.map(entry => {
          return (
            <React.Fragment>
              <Marker
                key={entry.id}
                latitude={entry.latitude}
                longitude={entry.longitude}
                offsetLeft={-13}
                offsetTop={-10}
              >
                <div
                  onClick={() =>
                    setShowPopup({
                      [entry.id]: true
                    })
                  }
                >
                  <svg
                    className="marker"
                    style={{
                      height: `${15 * viewport.zoom}px`,
                      width: `${15 * viewport.zoom}px`
                    }}
                    version="1.1"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <g>
                        <path
                          d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
              </Marker>
              {showPopup[entry.id] ? (
                <Popup
                  key={entry.id}
                  latitude={entry.latitude}
                  longitude={entry.longitude}
                  closeButton={true}
                  closeOnClick={false}
                  dynamicPosition={true}
                  onClose={() => setShowPopup({})}
                >
                  <div className="popup">
                    <p>Name: {entry.name}</p>
                  </div>
                </Popup>
              ) : null}
            </React.Fragment>
          );
        })}
      </ReactMapGL>
    </div>
  );
};

export default Map;
