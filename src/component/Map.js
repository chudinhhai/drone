import React, { useEffect, useState } from 'react';

const Map = ({ pinLocations }) => {
  // Replace 'YOUR_BING_MAPS_API_KEY' with your actual Bing Maps API key
  const bingMapsApiKey = 'AndI13yImliV-Uh62IGtUWdW21At2kroRdbfRWWDBsPbLTHLFTQKWv7atl76GqpC';
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const lines = [];
  useEffect(() => {
    const loadMapScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = `https://www.bing.com/api/maps/mapcontrol?callback=bingMapsScriptLoaded&key=${bingMapsApiKey}`;
      document.body.appendChild(script);
    };

    window.bingMapsScriptLoaded = () => {
      setScriptLoaded(true);
    };

    if (!scriptLoaded) {
      // Load Bing Maps script if not already loaded
      loadMapScript();
    } else if (window.Microsoft && window.Microsoft.Maps) {
      // Bing Maps script already loaded, initialize the map immediately
      const map = new window.Microsoft.Maps.Map(document.getElementById('bing-map'), {
        credentials: bingMapsApiKey,
        center: new window.Microsoft.Maps.Location(21.0285, 105.8542), // Replace with the desired map center (latitude, longitude)
        zoom: 10, // Adjust the zoom level as needed
      });
      const entities = [];
      // Add any additional map configurations or overlays here
      // const pinLocation = new window.Microsoft.Maps.Location(47.6, -122.3); // Replace with the desired pin location
      pinLocations.forEach((location) => {
        const pinLocation = new window.Microsoft.Maps.Location(location.lat, location.lng);
        const pin = new window.Microsoft.Maps.Pushpin(pinLocation, {
          color: location.color,
          title: location.title
        });
        
        entities.push(pin);
      });
      if (pinLocations.length >= 2) {
        const lineCoordinates = [
          new window.Microsoft.Maps.Location(pinLocations[0].lat, pinLocations[0].lng),
          new window.Microsoft.Maps.Location(pinLocations[1].lat, pinLocations[1].lng),
        ];
        const line = new window.Microsoft.Maps.Polyline(lineCoordinates, {
          strokeColor: 'blue', // Color of the line
          strokeThickness: 5,   // Thickness of the line
        });
        lines.push(line);
        map.entities.push(...lines);
      }
      map.entities.push(entities);
    }
  }, [bingMapsApiKey, scriptLoaded]);

  return <div id="bing-map" style={{ height: '70vh', width: 'auto', margin: '3px' }} />;
};

export default Map;
