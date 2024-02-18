import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

interface ArtworkDetail {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
}

interface Historic {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
}

interface ParkSites {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
}

// interface DogPark {
//     id: string;
//     address: string;
//     name: string;
//     description: string;
//     coordinates: number[];
// }

interface Items {
    id: string;
    address: string;
    name: string;
    description: string;
    coordinates: number[];
}


type CombinedDataComponentProps = {
    setFilteredItems: React.Dispatch<React.SetStateAction<Items[]>>;
}

const CombinedDataComponent: React.FC<CombinedDataComponentProps> = ({ setFilteredItems }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    let counter = 0;

    const fetchData = async (url: string, mapper: (data: any) => Items[]) => {
        setIsLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return mapper(data);
        } catch (error: any) {
            setError((prevError) => prevError ? `${prevError}; ${error.message}` : error.message);
            return []; 
        } finally {
            setIsLoading(false);
        }
    };

    const handleButtonClick = async (category: string) => {
        setSelectedCategory(category);
        switch (category) {
            case 'Public Art':
                const artworkData = await fetchData('https://data.calgary.ca/resource/2kp2-hsy7.json', (data) =>
                    data.map((item: any) => ({
                        id: `art-${counter++}`,
                        address: item.address,
                        name: item.title,
                        description: item.short_desc,
                        coordinates: [item.point.coordinates[0], item.point.coordinates[1]], // Assuming [lat, lng]
                    }))
                );
                setFilteredItems(artworkData);
                break;
            case 'Historic Resources':
                const historicData = await fetchData('https://data.calgary.ca/resource/99yf-6c5u.json', (data) =>
                    data.map((item: any) => ({
                        id: `hist-${counter++}`,
                        address: item.address,
                        name: item.name,
                        description: item.significance_summ,
                        coordinates: [item.point.coordinates[0], item.point.coordinates[1]], // Assuming [lat, lng]
                    }))
                );
                setFilteredItems(historicData);
                break;

            case 'Park Sites':
                const parkData = await fetchData('https://data.calgary.ca/resource/kami-qbfh.json', (data) =>
                    data.map((item: any) => ({
                        id: `park-${counter++}`,
                        address: item.locational_detail,
                        name: item.site_name,
                        description: "Calgary city park.",
                        coordinates: item.the_geom.coordinates[0][0][0], 
                    }))
                );
                setFilteredItems(parkData);
                break;
            default:
                
                console.error('Unknown category:', category);
        }
    };

    return (
        <Box display={"flex"} flexDirection={"row"} justifyContent="space-around" marginBottom={2}>
            {['Public Art', 'Historic Resources', 'Park Sites'].map((category) => (
                <Button
                    key={category}
                    variant={selectedCategory === category ? 'contained' : 'outlined'} 
                    onClick={() => handleButtonClick(category)}
                    style={{margin: '0 5px'}}
                >
                    <Typography>{category}</Typography>
                </Button>
            ))}
            {error && <Typography color="error">{error}</Typography>}
            {isLoading && <Typography>Loading...</Typography>}
        </Box>
    );
};

export default CombinedDataComponent;
