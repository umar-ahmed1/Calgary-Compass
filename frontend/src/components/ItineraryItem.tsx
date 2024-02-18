import { Box, Typography, Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';

interface Item {
    id: string;
    name: string;
    description: string;
    coordinates: number[];
    startTime: number;
    endTime: number;
}

type ItineraryItemProps = {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
    selectedItems: Item[];
    setSelectedItems: React.Dispatch<React.SetStateAction<Item[]>>;
};

const ItineraryItem: React.FC<ItineraryItemProps> = ({ id, address, name, description, coordinates, selectedItems, setSelectedItems }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(1);


    const handleStartTimeChange = (time: String | Number) => {
        const newTime = Number(time)
        if (newTime > endTime && newTime <=22){
            setStartTime(newTime);
            setEndTime(newTime + 1);
        }
        else{
            setStartTime(newTime);
        }
    }

    const handleEndTimeChange = (time: String | Number) => {
        const newTime = Number(time)
        if (newTime < startTime) return;
        setEndTime(newTime)
    }

    const updateSelectedItems = () => {
        const isItemExists = selectedItems.some(item => item.id === id && item.name === name);
        if(isItemExists){
            console.log(id,name, "item exists",selectedItems)
            return;
        }
        setSelectedItems(prevItems => [...prevItems, {id,name,description,coordinates,startTime,endTime}]);
    }

    return (
        <Box
            width="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="flex-start"
            pb={2}
            mb={3}
            borderBottom={"2px solid black"}
        >
            <Box
                width="100%"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                pt={2}
            >
                <Box
                    width="50%"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="center"
                    pl={4}
                >
                    {name ? <Typography fontWeight={700} fontSize="18px">{name}</Typography>
                        : <Typography fontWeight={700}>Name Unkown</Typography>}
                    <Typography>{address}</Typography>
                </Box>
                <Box
                    width="50%"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="center"
                    pr={4}>
                    <Button
                        variant="contained"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {!isOpen ? "View Details" : "Hide Details"}
                    </Button>
                </Box>
            </Box>
            {isOpen &&
                <Box mt={2} width="90%" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography fontSize="14px">{description}</Typography>
                    <Box mt={2} width="100%" display="flex" justifyContent="space-around" alignItems="center">
                        <FormControl fullWidth>
                            <InputLabel>Start Time</InputLabel>
                            <Select
                                labelId=""
                                id=""
                                value={startTime}
                                label="Start Time"
                                onChange={(event) => handleStartTimeChange(event.target.value)}
                            >
                                <MenuItem value={0}>12am</MenuItem>
                                <MenuItem value={1}>1am</MenuItem>
                                <MenuItem value={2}>2am</MenuItem>
                                <MenuItem value={3}>3am</MenuItem>
                                <MenuItem value={4}>4am</MenuItem>
                                <MenuItem value={5}>5am</MenuItem>
                                <MenuItem value={6}>6am</MenuItem>
                                <MenuItem value={7}>7am</MenuItem>
                                <MenuItem value={8}>8am</MenuItem>
                                <MenuItem value={9}>9am</MenuItem>
                                <MenuItem value={10}>10am</MenuItem>
                                <MenuItem value={11}>11am</MenuItem>
                                <MenuItem value={12}>12pm</MenuItem>
                                <MenuItem value={13}>1pm</MenuItem>
                                <MenuItem value={14}>2pm</MenuItem>
                                <MenuItem value={15}>3pm</MenuItem>
                                <MenuItem value={16}>4pm</MenuItem>
                                <MenuItem value={17}>5pm</MenuItem>
                                <MenuItem value={18}>6pm</MenuItem>
                                <MenuItem value={19}>7pm</MenuItem>
                                <MenuItem value={20}>8pm</MenuItem>
                                <MenuItem value={21}>9pm</MenuItem>
                                <MenuItem value={22}>10pm</MenuItem>
                                <MenuItem value={23}>11pm</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel>End Time</InputLabel>
                            <Select
                                labelId=""
                                id=""
                                value={endTime}
                                label="End Time"
                                onChange={(event) => handleEndTimeChange(event.target.value)}
                            >
                                <MenuItem value={0}>12am</MenuItem>
                                <MenuItem value={1}>1am</MenuItem>
                                <MenuItem value={2}>2am</MenuItem>
                                <MenuItem value={3}>3am</MenuItem>
                                <MenuItem value={4}>4am</MenuItem>
                                <MenuItem value={5}>5am</MenuItem>
                                <MenuItem value={6}>6am</MenuItem>
                                <MenuItem value={7}>7am</MenuItem>
                                <MenuItem value={8}>8am</MenuItem>
                                <MenuItem value={9}>9am</MenuItem>
                                <MenuItem value={10}>10am</MenuItem>
                                <MenuItem value={11}>11am</MenuItem>
                                <MenuItem value={12}>12pm</MenuItem>
                                <MenuItem value={13}>1pm</MenuItem>
                                <MenuItem value={14}>2pm</MenuItem>
                                <MenuItem value={15}>3pm</MenuItem>
                                <MenuItem value={16}>4pm</MenuItem>
                                <MenuItem value={17}>5pm</MenuItem>
                                <MenuItem value={18}>6pm</MenuItem>
                                <MenuItem value={19}>7pm</MenuItem>
                                <MenuItem value={20}>8pm</MenuItem>
                                <MenuItem value={21}>9pm</MenuItem>
                                <MenuItem value={22}>10pm</MenuItem>
                                <MenuItem value={23}>11pm</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box
                    width="50%"
                    display="flex"
                    flexDirection="column"
                    alignItems="flex-end"
                    justifyContent="center"
                    mt={2}
                    pr={4}>
                    <Button
                        variant="contained"
                        onClick={updateSelectedItems}     
                    >
                        {"Add to Itinerary"}
                    </Button>
                </Box>
            </Box>
            }


        </Box>
    )
}
export default ItineraryItem;