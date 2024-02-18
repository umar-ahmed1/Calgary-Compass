import React, { useState } from 'react';
import Map from '../components/Map';
import { Box, Checkbox, List, ListItem, ListItemText } from '@mui/material';
import jsonData from '../components/Public Art_20240217.json';
import Schedule from '../components/Schedule';
type ItineraryProps = {
    
};

interface Item {
    id: string;
    name: string;
    description: string;
}

const Itinerary:React.FC<ItineraryProps> = () => {
    const [selectedItems, setSelectedItems] = useState<Item[]>([]);
    console.log(selectedItems);

    const handleSelectItem = (item: any) => {
        const isItemSelected = selectedItems.some((selectedItem) => selectedItem.id === item.id);
    
        if (!isItemSelected) {
          setSelectedItems((prevItems) => [...prevItems, item]);
        } else {
          setSelectedItems((prevItems) => prevItems.filter((selectedItem) => selectedItem.id !== item.id));
        }
    };
    
    return (
        <Box width="100%" height="88vh" display="flex" >
            <Box width="30%" height="100%">
                <List>
                    {jsonData.map((item) => (
                    <ListItem key={item.art_id} disablePadding>
                        <Checkbox
                        checked={selectedItems.some((selectedItem) => selectedItem.id === item.art_id)}
                        onChange={() => handleSelectItem(item)}
                        inputProps={{ 'aria-label': 'Select item' }}
                        />
                        <ListItemText primary={item.title} secondary={item.short_desc} />
                    </ListItem>
                    ))}
                </List>
            </Box>
            <Box width="30%" height="100%">
                <Schedule/>
            </Box>
            <Box width="40%" height="100%">
                <Map/>
            </Box>
        </Box>
    )
}
export default Itinerary;