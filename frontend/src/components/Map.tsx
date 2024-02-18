import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import jsonData from './test.json';
import { Box } from '@mui/material';

interface Item {
    id: string;
    name: string;
    description: string;
    coordinates: number[];
    startTime: number;
    endTime: number;
}

type MapProps = {
    selectedItems: Item[];
};


const containerStyle = {
    width: '100%',
    height: '100%'
};
  
const center = {
    lat: 51.0447,
    lng: -114.0719
};

const Map:React.FC<MapProps> = ({selectedItems}) => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBJ6WddyZhbrKFXuOJDu0RVEKuv_js1Fis"
    })
    
    const [map, setMap] = React.useState(null)
    const onLoad = React.useCallback(function callback(map:any) {
        // Iterate through JSON data and add markers
        selectedItems.forEach((item, index) => {
            const markerPosition = { lat: item.coordinates[1], lng: item.coordinates[0]};
            const marker = new window.google.maps.Marker({
                position: markerPosition,
                map: map,
                title: `Marker ${index + 1}`, // Optional: Assign a title based on index
            });

            console.log(marker)

            const infoWindow = new window.google.maps.InfoWindow({
                content: `
                <div style="max-width: 200px;">
                    <h3 style="margin-bottom: 5px;">${item.name}</h3>
                    <p style="margin-bottom: 10px;">${item.description}</p>
                </div>
            `
    
            });

            infoWindow.open(map, marker);

            marker.addListener("click", () => {
                infoWindow.open(map, marker);
            });

        });
        setMap(map);
    }, [selectedItems])

    React.useEffect(() => {
        if (map !== null) {
            onLoad(map);
        }
    }, [selectedItems, map, onLoad]);
    
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