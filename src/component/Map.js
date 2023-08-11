import React, { useEffect, useState } from 'react';

const Map = () => {
  // Replace 'YOUR_BING_MAPS_API_KEY' with your actual Bing Maps API key
  const bingMapsApiKey = 'AndI13yImliV-Uh62IGtUWdW21At2kroRdbfRWWDBsPbLTHLFTQKWv7atl76GqpC';
  const [scriptLoaded, setScriptLoaded] = useState(false);

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
        center: new window.Microsoft.Maps.Location(47.6062, -122.3321), // Replace with the desired map center (latitude, longitude)
        zoom: 10, // Adjust the zoom level as needed
      });

      // Add any additional map configurations or overlays here
    }
  }, [bingMapsApiKey, scriptLoaded]);

  return <div id="bing-map" style={{ height: '70vh', width: '1360px' }} />;
};

export default Map;
