import React from 'react';
import Map from '../components/Map';
import { Box } from '@mui/material';

type ItineraryProps = {
    
};

const Itinerary:React.FC<ItineraryProps> = () => {
    
    return (
        <Box width="100%" border='1px solid red'>
            <Box width="50%">
                <Map/>
            </Box>
        </Box>
    )
}
export default Itinerary;