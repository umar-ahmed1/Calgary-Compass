import React, { useState, useEffect } from 'react';

interface VenueLocation {
    venueName: string;
    locationName: string;
}

interface ArtworkDetail {
    longitude: number;
    latitude: number;
    artistName: string;
    shortDesc: string;
}

interface PlaygroundEquipment {
    longitude: number;
    latitude: number;
    type_description: string; // Corrected property name
    equipment_age_class: string; // Corrected property name
}

interface Historic {
    longitude: number;
    latitude: number;
    name: string;
    builder: string;
    originalUse: string;

}

const CombinedDataComponent: React.FC = () => {
    const [venueLocations, setVenueLocations] = useState<VenueLocation[]>([]);
    const [artworkDetails, setArtworkDetails] = useState<ArtworkDetail[]>([]);
    const [playgroundDetails, setPlaygroundDetails] = useState<PlaygroundEquipment[]>([]);
    const [HistoricDetails, setHistoricDetails] = useState<Historic[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArtworkDetails = async () => {
            try {
                const response = await fetch('https://data.calgary.ca/resource/2kp2-hsy7.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch artwork details');
                }
                const data = await response.json();
                const extractedData: ArtworkDetail[] = data.map((item: any) => ({
                    longitude: item.point.coordinates[0],
                    latitude: item.point.coordinates[1],
                    artistName: item.artist,
                    shortDesc: item.short_desc,
                }));
                setArtworkDetails(extractedData);
            } catch (error: any) {
                if (error instanceof Error) {
                    setError((prevError) => prevError ? `${prevError}; ${error.message}` : error.message);
                }
            }
        };

        const fetchVenueLocations = async () => {
            try {
                const response = await fetch('https://data.calgary.ca/resource/q9hh-gfbx.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch venue locations');
                }
                const data = await response.json();
                const extractedData: VenueLocation[] = data.map((item: any) => ({
                    venueName: item.venue_name,
                    locationName: item.location_name,
                }));
                setVenueLocations(extractedData);
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message);
                }
            }

            const fetchPlaygroundEquipmentDetails = async () => {
                try {
                    const response = await fetch("https://data.calgary.ca/resource/bdu9-amk8.json");
                    if (!response.ok) {
                        throw new Error('Failed to fetch playground equipment details');
                    }
                    const data = await response.json();
                    const extractedData: PlaygroundEquipment[] = data.map((item: any) => ({
                        longitude: item.point.coordinates[0],
                        latitude: item.point.coordinates[1],
                        type_description: item.type_description,
                        equipment_age_class: item.equipment_age_class,
                    }));
                    setPlaygroundDetails(extractedData); // Corrected to update the state
                } catch (error: any) {
                    setError((prevError) => prevError ? `${prevError}; ${error.message}` : error.message);
                }
            };

            const fetchHistoricDetails = async () => {
                try {
                    const response = await fetch('https://data.calgary.ca/resource/99yf-6c5u.json');
                    if (!response.ok) {
                        throw new Error('Failed to fetch playground equipment details');
                    }
                    const data = await response.json();
                    const extractedData: Historic[] = data.map((item: any) => ({
                        longitude: item.point.coordinates[0],
                        latitude: item.point.coordinates[1],
                        name: item.name,
                        builder: item.builder,
                        originalUse: item.orig_use_ty
                    }))
                    setHistoricDetails(extractedData);
                }
                catch (error: any) {
                    setError((prevError) => prevError ? `${prevError}; ${error.message}` : error.message);
                }
            }

            // Initialize loading state and perform all fetch operations
            setIsLoading(true);
            Promise.all([
                fetchPlaygroundEquipmentDetails(),
                fetchArtworkDetails(),
                fetchPlaygroundEquipmentDetails() // Ensure this function is called
            ]).finally(() => setIsLoading(false));
        }
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {/* Existing rendering code for venue locations and artwork details */}
            <h2>Playground Equipment List</h2>
            <ul>
                {playgroundDetails.map((pd, index) => (
                    <li key={index}>
                        Description: {pd.type_description}, Coordinates: ({pd.longitude}, {pd.latitude}), Age: {pd.equipment_age_class}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CombinedDataComponent;
