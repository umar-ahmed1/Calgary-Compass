import { Box, Typography } from "@mui/material";
import Logo from "../public/Logo.png";
import React from "react";
import { relative } from "path";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage:
            "url('https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg')",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
        alignItems={"center"}
      >
        <Box paddingTop={"20px"} width={"70vw"} height={"100px"} bgcolor={"rgba(0, 0, 0, 0.4)"} borderRadius={"20px"}>
          <Typography variant="h2" textAlign={"center"} color={"white"} fontWeight={900}>
            EXPLORE LANDS UNBREACHED
          </Typography>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"row"}>
        <Box
          paddingTop="25px"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{
            backgroundImage: "url('https://heritagepark.ca/wp-content/uploads/2023/03/Crowd_Plaza_peoplewandering-2048x1365.jpg')",
            backgroundRepeat: "no-repeat",
            width: "76%",
            backgroundPosition: "center",
            clipPath: "polygon(0 0, 80% 0, 100% 100%, 0% 100%)",
          }}
        ></Box>
        <Typography
          variant="h4"
          alignSelf={"left"}
          fontWeight="700"
          position="relative"
          right="80px"
          noWrap
          width={"20%"}
        >
          Our Vision
        </Typography>
        <Box
          display={"flex"}
          width={"60%"}
          textAlign={"center"}
          justifyContent={"center"}
          paddingTop={"40px"}
          paddingBottom={"40px"}
        >
          <Typography>
            At Calgary Compass, our vision is to redefine the way you explore
            the vibrant city of Calgary. We believe in creating seamless
            experiences for both tourists and locals alike, making it effortless
            to discover the hidden gems and iconic landmarks scattered
            throughout this dynamic urban landscape. Through our innovative
            platform, users gain access to an extensive database featuring
            parks, heritage sites, monuments, and more. Whether you're seeking a tranquil spot to unwind
            amidst nature's beauty or eager to uncover the rich history woven
            into Calgary's streets, our comprehensive listings have you covered.
            But we don't stop there. Our interactive map functionality allows
            you to visualize these points of interest, empowering you to plan
            your itinerary with precision. Whether you're mapping out a day of
            exploration or a weekend adventure, our intuitive interface makes it
            simple to pinpoint your desired destinations and create a
            personalized schedule tailored to your interests and preferences.
            Whether you're a first-time visitor eager to discover Calgary's
            iconic landmarks or a seasoned local looking to uncover hidden gems,
            Calgary Compass is your ultimate companion for exploring the city
            with ease and efficiency. Join us on a journey of discovery and
            let's unlock the endless possibilities Calgary has to offer,
            together.
          </Typography>
        </Box>
      </Box>

      <Box
      bgcolor={"secondaryBlueAccent"}
      display={"flex"}
      flexDirection={"row"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          bgcolor={"secondaryBlue"}
        >
          <Typography
            variant="h4"
            textAlign={"center"}
          >
            About Us
          </Typography>
          <Box
            display={"flex"}
            width={"60%"}
            textAlign={"center"}
            justifyContent={"center"}
            paddingTop={"20px"}
            paddingBottom={"20px"}
          >
            <Typography>
              Calgary Compass is a dedicated group of university students deeply passionate about Calgary. Our mission is simple: to ensure everyone experiences the city to its fullest.

              As locals, we understand Calgary's unique charm and endless possibilities. From its urban streets to tranquil parks, there's something special for every visitor. That's why we've created Calgary Compass – to be your trusted guide, offering insider tips and personalized itineraries for unforgettable adventures.

              Join us as we share our love for Calgary and help you uncover its hidden gems. Welcome to Calgary Compass, where exploration knows no bounds.
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ borderTop: 1 }}
        padding={"20px"}
      >
        <Box justifyContent={"left"} width={"50%"}>
          <Typography textAlign={"left"}>
            Calgary Compass © All Rights Reserved® 2024
          </Typography>
        </Box>
        <Box justifyContent={"right"} textAlign={"right"} width={"50%"}>
          <Typography>
            Contact Us
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Home;
