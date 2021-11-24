import React, { useEffect } from 'react';

export default function MapContainer(props) {
  
    function initMap() {
        // The location of Uluru
        const uluru = { lat: parseFloat(props.lat), lng: parseFloat(props.lng) };
        // The map, centered at Uluru
        const map = new window.google.maps.Map(document.getElementById("map"), {
          zoom: 16,
          center: uluru,
        });
        // The marker, positioned at Uluru
        const marker = new window.google.maps.Marker({
          position: uluru,
          map: map,
        });
      }
  
      useEffect(() => {
        initMap()
      }, [])
  return (
    <div id="map" style={{height: '500px', width: '100%'}}></div>
  )
}
