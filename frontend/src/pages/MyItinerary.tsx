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

  const fetchData2 = async () => {
    if (!user) return;
    try {
      const response = await fetch(`https://calgarycompassbackend.vercel.app/api/user/getitinerary/${user.id}`);
      const data = await response.json()
      if (response.ok) {
        console.log("ONLINE BACKEND RESPONSE OK",data)
      } else {
        console.log("ONLINE BACKEND RESPONSE error", data)
      }
    } catch (error) {
      console.log(error)
    }
  };
  //fetch itineraries on page load
  useEffect(() => {
    fetchData()
  }, [user])

  //fetch itineraries on page load
  useEffect(() => {
    fetchData2()
  }, [user])

  return (
    <>
      <Box display={"flex"} flexDirection={"row"} width={"100%"} justifyContent={"center"} pt={"10px"}>
        <Typography variant={'h4'} fontWeight={"500"}>Saved Itineraries</Typography>
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
            <Box display={"flex"} flexDirection={"column"} width={"33vw"} justifyContent={"center"}>
              <Box textAlign={"center"}>
                <Typography  variant={'h6'} fontWeight={"400"}>{itineraryName}</Typography>
              </Box>
              <MySchedule selectedItems={rest} />
            </Box>
          );
        })}
      </Box>
    </>
  )
}
export default MyItinerary;