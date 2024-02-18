import React, { useState } from 'react';
import Map from '../components/Map';
import { Box, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import jsonData from '../components/Public Art_20240217.json';
import Schedule from '../components/Schedule';
import ItineraryItem from '../components/ItineraryItem';
import RecreationData from '../components/RecreationData';
type ItineraryProps = {

};

interface Item {
    id: string;
    name: string;
    description: string;
    coordinates: number[];
    startTime: number;
    endTime: number;
}

interface Items {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
}

const Itinerary: React.FC<ItineraryProps> = () => {
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    const [filteredItems, setFilteredItems] = useState<Items[]>([]);

    return (
        <Box width="100%" height="88vh" display="flex">
            <Box width="30%" height="100%" sx={{overflowY:"scroll"}}>
                <Box>
                    <RecreationData 
                        setFilteredItems = {setFilteredItems}
                    />
                </Box>
                <Box>
                {filteredItems.map((item) => (
                  item.name && (
                    <ItineraryItem
                        key={item.id}
                        address={item.address}
                        coordinates={item.coordinates}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        selectedItems={selectedItems}
                        setSelectedItems={setSelectedItems}
                    />
                    )
                ))}

                </Box>
            </Box>
            <Box width="30%" height="100%">
                <Schedule selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </Box>
            <Box width="40%" height="100%">
                <Map selectedItems={selectedItems}/>
            </Box>
        </Box>
    )
}
export default Itinerary;
