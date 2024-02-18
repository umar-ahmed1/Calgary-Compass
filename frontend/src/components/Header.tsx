import { To, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import Logo from "../images/Logo.png";

export default function Header() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const OpenPage = (arg: To) => {
    navigate(arg);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <AppBar position="static">
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          width={"100%"}
          marginTop={"20px"}
          marginBottom={"20px"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"left"}
            width={"50%"}
            paddingLeft={"50px"}
          >
            <Box maxHeight={"80px"}>
              <img src={Logo} alt="Logo" style={{ width: "100%", height: "100%" }}  />
            </Box>
          </Box>

          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"right"}
            width={"50%"}
            paddingRight={"50px"}
            alignItems={"center"}
          >
            {!user && (
              <Box paddingRight={"15px"} >
                <Button variant="outlined" onClick={() => navigate('./signup')}>
                    <Typography color="white">Create an Account</Typography>
                </Button>
              </Box>
            )}
            {!user && (
              <Box>
                <Button variant="contained" color={"secondary"} fullWidth onClick={() => navigate('./login')}>
                  <Typography>Log In</Typography>
                </Button>
              </Box>
            )}
            {user && (
              <Box>
                <Button
                  variant="contained"
                  color={"secondary"}
                  fullWidth
                  onClick={handleLogout}
                >
                  <Typography>Log Out</Typography>
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </AppBar>

      <Outlet />
    </>
  );
}
