import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Box, Typography } from '@mui/material';
import Schedule from '../components/Schedule';

type MyItineraryProps = {

};

type Itinerary = {

}

interface Item {
    id: string;
    name: string;
    description: string;
    coordinates: number[];
    startTime: number;
    endTime: number;
}

const MyItinerary: React.FC<MyItineraryProps> = () => {
  const [userItineraries, setUserItineraries] = useState<any[][]>([])
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);
  const { user } = useAuthContext()

  const fetchData = async () => {
    if(!user) return;
    try {
      const response = await fetch(`http://localhost:4000/api/user/getitinerary:${user.id}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (response.ok) {
        console.log("success", response)
      } else {
        const errorMessage = await response.json()
        console.log(errorMessage.error)
      }

    } catch (error) {

    }
  };
  //fetch itineraries on page load
  useEffect(() => {
    fetchData()
  }, [user])

  // Function to transform array items into events
  const schedule = (items:any) => {
    return items.map((item:any) => ({
      name: item.name,
      startTime: item.startTime,
      endTime: item.endTime,
    }));
  };

  return (
    <>
        <Box>
            <Typography>Saved Itineraries</Typography>
        </Box>
        {userItineraries.map((innerArray, index) => (
            <Box key={index}>
                {/* Pass each inner array to the schedule function */}
                {/* <Schedule selectedItems={schedule(innerArray)} /> */}
            </Box>
        ))}
    </>
  )
}
export default MyItinerary;