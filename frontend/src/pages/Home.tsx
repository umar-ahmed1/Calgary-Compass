import { Box, Typography } from "@mui/material";
import Logo from "../public/Logo.png";
import React from "react";
type HomeProps = {};

const Home: React.FC<HomeProps> = () => {
  return (
    <>
      <Box
      // sx={{
      //   backgroundImage:
      //     "url('https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg')",
      //   backgroundRepeat: "no-repeat",
      //   width: "100%",
      //   height: "auto",
      // }}
      >
        <Box width={"500px"}></Box>
        <img
          src="https://cdn.britannica.com/60/137760-050-9EFAB73A/Calgary-foreground-Pengrowth-Saddledome-Canada-Alberta.jpg"
          alt="City Image"
          width="100%"
          height="auto"
        />
      </Box>
      <Box
        paddingTop="25px"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ textDecoration: "underline" }}
        >
          Our Vision
        </Typography>
        <Box
          display={"flex"}
          width={"60%"}
          textAlign={"center"}
          justifyContent={"center"}
          paddingTop={"20px"}
        >
          <Typography>
            At Calgary Compass, our vision is to redefine the way you explore
            the vibrant city of Calgary. We believe in creating seamless
            experiences for both tourists and locals alike, making it effortless
            to discover the hidden gems and iconic landmarks scattered
            throughout this dynamic urban landscape. Through our innovative
            platform, users gain access to an extensive database featuring
            parks, dog parks, heritage sites, monuments, playgrounds, public
            benches, and more. Whether you're seeking a tranquil spot to unwind
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
        paddingTop="25px"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
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
        >
          <Typography>
            
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default Home;
