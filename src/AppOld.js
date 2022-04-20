import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import campsites from './sampleGeoJson.json';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFobmF2aW0iLCJhIjoiY2wxZ3l0MTE0MDAxZzNjbGlnbjE0dHNxcyJ9.0JpY1EWwG8nAPNBuzXP5Bg';

function AppOld() {

  const [mapViewport] = useState({
    height: "500px",
    width: "500px",
    longitude: -87.661557,
    latitude: 41.893748,
    zoom: 10.7
  });

  // useEffect(() => {
  //   if (map.current) return; // initialize map only once
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: 'mapbox://styles/mapbox/outdoors-v10',
  //     center: [lng, lat],
  //     zoom: zoom
  //   });
  // });

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <ReactMapGL
            {...mapViewport}
            mapStyle="mapbox://styles/mapbox/outdoors-v10"
            mapboxAccessToken="blah">
           
            {campsites.features.map((marker) => {
              <Marker
                key={marker.id}
                latitude={marker.geometry.coordinates[0]}
                longitude={marker.geometry.coordinates[1]}
                >
                <img src="./camping-tent-48.png" alt="marker" /> 
              </Marker>

            })
            }
          </ReactMapGL>
        </div>

      </header>
    </div>
  );
}

export default AppOld;
