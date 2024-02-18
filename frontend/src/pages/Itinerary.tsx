import React, { useState } from 'react';
import Map from '../components/Map';
import { Box, Checkbox, List, ListItem, ListItemText, Button, Modal, TextField, Typography } from '@mui/material';
import Schedule from '../components/Schedule';
import ItineraryItem from '../components/ItineraryItem';
import RecreationData from '../components/RecreationData';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const { user } = useAuthContext();

    const [openModal, setOpenModal] = useState(false);
    const [itineraryName, setItineraryName] = useState('');
    const [loading, setLoading] = useState(false)
    const [savingError, setSavingError] = useState("")

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleItineraryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setItineraryName(event.target.value);
    };

    const handleSaveItinerary = async () => {
        setSavingError("")
        setOpenModal(true);
        setLoading(true)
        if (selectedItems.length === 0) {
            setSavingError("Itinerary must not be empty")
            setLoading(false)
            return;
        }
        //send a POST request to the api
        const response = await fetch("http://localhost:4000/api/user/setitinerary", {
            method: "POST",
            body: JSON.stringify({ itineraryName: itineraryName, userId: user.id, userItinerary: selectedItems }),
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        });
        if (response.ok) {
            handleCloseModal();
            navigate('../myitinerary')
        } else {
            const errorMessage = await response.json()
            setSavingError(errorMessage.error)
        }
        setLoading(false)


    }

    return (
        <Box width="100%" height="88vh" display="flex">
            <Box width="30%" height="100%" sx={{ overflowY: "scroll" }}>
                <Box>
                    <RecreationData
                        setFilteredItems={setFilteredItems}
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
                    sx={{ position: "absolute", top: "1px", left: "140px" }}
                    variant="contained"
                    onClick={handleOpenModal}
                >
                    Save Itinerary
                </Button>
                <Schedule selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
            </Box>
            <Box width="40%" height="100%">
                <Map selectedItems={selectedItems} />
            </Box>
            <Modal open={openModal} onClose={handleCloseModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        minWidth: 300,
                    }}
                >
                    <TextField
                        fullWidth
                        label="Itinerary Name"
                        variant="outlined"
                        value={itineraryName}
                        onChange={handleItineraryNameChange}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" disabled={loading} sx={{ mr: 2 }} onClick={handleSaveItinerary}>
                        Save
                    </Button>
                    <Button variant="contained" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    {savingError && <Typography mt={2} color="red">{savingError}</Typography>}
                </Box>
            </Modal>
        </Box>
    )
}
export default Itinerary;
