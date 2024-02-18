import { Box, Card, CardActionArea, Typography } from '@mui/material';
import React from 'react';

type LoggedInHomePageProps = {

};

interface PublicArtCardProps {
    title: String;
    author: String;
    address: String;
    description: String;
}

const PublicArtCard = ({ title, author, address, description }: PublicArtCardProps) => {
    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: 4,
                boxShadow: 3,
                height: "100%",
            }}
        >
            <CardActionArea sx={{ height: "100%" }} >
                <Box display="flex" justifyContent="center" flexDirection={"column"} padding={2}>
                    <Typography fontWeight={"bold"} padding={"5px"} color={"black"} textAlign={"center"}>
                        {title}
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        color={"black"}
                    >
                        By: {author}
                    </Typography>
                    <Typography textAlign={"center"} padding={(window.innerWidth < 570) ? "2px" : "10px"} color={"black"}>
                        Address: {address}
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        color={"black"}
                    >
                        {description}
                    </Typography>
                </Box>
            </CardActionArea>
        </Card>
    )
};

const LoggedInHomePage: React.FC<LoggedInHomePageProps> = () => {

    return (
        <>
            <Box>
                <PublicArtCard title={"Frozen River"} author={"Stephen Glassman"} address={"Emergency Operations Centre (673 First St. N.E.)"} description={"In suspended motion, like a Frozen River, this sculpture responds to Calgary's dramatic and varied landscape."} />
            </Box>
            
        </>
    )
}
export default LoggedInHomePage;