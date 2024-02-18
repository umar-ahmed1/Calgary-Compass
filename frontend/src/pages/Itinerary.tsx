import React, { useState } from 'react';
import Map from '../components/Map';
import { Box, Checkbox, List, ListItem, ListItemText,Button } from '@mui/material';
import Schedule from '../components/Schedule';
import ItineraryItem from '../components/ItineraryItem';
import RecreationData from '../components/RecreationData';
import { useAuthContext } from '../hooks/useAuthContext';
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
    const {user} = useAuthContext();

    const handleSave = async () => {
        const id = user.id
        console.log(id)
        //send a POST request to the api
        const response = await fetch("http://localhost:4000/api/user/setitinerary", {
        method: "POST",
        body: JSON.stringify({ userId: user.id, userItinerary: selectedItems }),
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok){
          console.log("success: ", response)
      } else{
          console.log("error: ", response)
      }


    }


    React.useEffect(() => {
        console.log(selectedItems)
    },[selectedItems])

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
            <Box width="30%" height="100%" position="relative">
                    <Button 
                    sx={{position:"absolute",top:"1px",left:"1px"}} 
                    variant="contained"
                    onClick = {handleSave}
                    >
                        Save Itinerary
                    </Button>
                <Schedule selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </Box>
            <Box width="40%" height="100%">
                <Map selectedItems={selectedItems}/>
            </Box>
        </Box>
    )
}
export default Itinerary;
