import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

type MapProps = {
    
};

const containerStyle = {
    width: '100vw',
    height: '100vh'
  };
  
  const center = {
    lat: 51.0447,
    lng: -114.0719
  };

const Map:React.FC<MapProps> = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBJ6WddyZhbrKFXuOJDu0RVEKuv_js1Fis"
    })
    
    const [map, setMap] = React.useState(null)
    
    const onLoad = React.useCallback(function callback(map:any) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
    
        setMap(map)
    }, [])
    
    const onUnmount = React.useCallback(function callback(map:any) {
        setMap(null)
    }, [])

    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <></>
}
export default Map;