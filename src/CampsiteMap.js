import logo from './logo.svg';
import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import campsites from './sampleCampsiteGeojson.json';
import ReactDOM from "react-dom";

mapboxgl.accessToken = 'pk.eyJ1IjoiamFobmF2aW0iLCJhIjoiY2wxZ3l0MTE0MDAxZzNjbGlnbjE0dHNxcyJ9.0JpY1EWwG8nAPNBuzXP5Bg';

const CampsiteMap = () => {

  const mapContainer = useRef(null);
  //const map = useRef(null);
  const [lng, setLng] = useState(-71.4660);
  const [lat, setLat] = useState(42.2500);
  const [zoom, setZoom] = useState(14);

  // const [lng, setLng] = useState(-104.883);
  // const [lat, setLat] = useState(38.803);
  // const [zoom, setZoom] = useState(13.9);
  

  useEffect(() => {
    //if (map.current) return; // initialize map only once
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/outdoors-v10',
      center: [lng, lat],
      zoom: zoom
    });
  
//   campsites.features.forEach((site, i) => {
//     site.properties.id = i;
//     });

   
map.on("load", () => {
      /* For each feature in the GeoJSON object above: */
      for (const site of campsites.features) {
        /* Create a div element for the marker. */
        const el = document.createElement('div');
        /* Assign a unique `id` to the marker. */
        el.id = `marker-${site.id}`;
        /* Assign the `marker` class to each marker for styling. */
        el.className = site.properties.Occupied ? 'marker-site-unavailable' : 'marker';

        const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(
         `<h3> ${site.properties.title} </h3>
          <h4>${site.properties.description} </h4>`
          );

        

        /**
         * Create a marker using the div element
         * defined above and add it to the map.
         **/
        new mapboxgl.Marker(el, { offset: [0, -23] })
          .setLngLat(site.geometry.coordinates)
          .setPopup(popup)
          .addTo(map)
          ;
      }
    });

});

  return (
    <div className="App">
      <header className="App-header">
      {/* <div class="sidebar">
      <div class="heading">
        <h3>Our locations</h3>
      </div>
      <div id="listings" class="listings"></div>
    </div> */}
        <div>
          <div ref={mapContainer} className="map-container" />
        </div>
        
      </header>
    </div>
  );
}

export default CampsiteMap;