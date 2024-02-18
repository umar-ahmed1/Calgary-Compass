import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
import { Box, Typography } from '@mui/material';
import MySchedule from '../components/MySchedule';

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
    if (!user) return;
    try {
      const response = await fetch(`http://localhost:4000/api/user/getitinerary/${user.id}`);
      const data = await response.json()
      if (response.ok) {
        setUserItineraries(data.itinerary)
      } else {
        console.log("error", data)
      }

    } catch (error) {
      console.log(error)
    }
  };
  //fetch itineraries on page load
  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <>
      <Box display={"flex"}>

      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        {userItineraries && userItineraries.map((itineraryData: any, index: number) => {
          // Extract itineraryName and itinerary array from itineraryData
          const { itineraryName, ...rest } = itineraryData;

          // Get an array of values from rest
          const restValues = Object.values(rest);

          // Loop through the array of values
          restValues.forEach((item: any) => {
            // Access each object and do something with it
            //console.log("restitem:", item);
          });

          // Return some JSX elements here
          return (
            <>
              <MySchedule selectedItems={rest} />
            </>
          );
        })}
      </Box>
    </>
  )
}
export default MyItinerary;

/*           // Flatten the itinerary array into an array of items
          const updatedItems = itinerary.map((item: any) => ({
            id: item.id,
            name: item.name,
            description: item.description,
            coordinates: item.coordinates,
            startTime: item.startTime,
            endTime: item.endTime,
          })) as Item[]; // Explicitly cast to Item[]

          // Render the Schedule component for each itinerary array
          return (
            <Box key={index}>
              <Typography variant="h6">{itineraryName}</Typography>
              <Schedule selectedItems={updatedItems} setSelectedItems={setSelectedItems} />
            </Box>
          );
        })}
      </Box> */