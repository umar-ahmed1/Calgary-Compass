import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import jsonData from './test.json';
import { Box } from '@mui/material';

type MapProps = {
    
};

const containerStyle = {
    width: '100%',
    height: '100%'
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
        // Iterate through JSON data and add markers
        jsonData.forEach((item, index) => {
            const markerPosition = { lat: item.lat, lng: item.lng };
            const marker = new window.google.maps.Marker({
                position: markerPosition,
                map: map,
                title: `Marker ${index + 1}`, // Optional: Assign a title based on index
            });

            const infoWindow = new window.google.maps.InfoWindow({
                content: `
                <div style="max-width: 200px;">
                    <h3 style="margin-bottom: 5px;">${"Title"}</h3>
                    <p style="margin-bottom: 10px;">"Description: ${index}</p>
                </div>
            `
    
            });

            infoWindow.open(map, marker);

            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });

        });
        setMap(map);
    }, [jsonData])
    
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
            <></>
        </GoogleMap>
    ) : <></>
}
export default Map;