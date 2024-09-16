import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.png";
import branding from "../../assets/branding_name.png";
import { Link } from "react-router-dom";
import { useState } from "react";
function Navbar() {
  let [links] = useState([
    { name: "HOME", path: "/home" },
    { name: "ACADEMY", path: "/academy" },
    { name: "SESSION", path: "/sessions" },
    { name: "TRADE ALERTS", path: "/tradealerts" },
    { name: "SCANNERS", path: "/scanners" },
    { name: "BE A PARTNER", path: "/beapartner" },
    { name: "LOGIN", path: "/login" },
    { name: "JOIN NOW", path: "/" },
    { name: "AR", path: "" },
  ]);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "#303030",
        alignItems: "center",
        p: "12px",
        width:'1333px',
        margin:'10px auto',
        justifyContent:'space-between',
        borderRadius:'15px',
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box
          sx={{ width: "79px", height: "69px" }}
          component="img"
          src={logo}
        />
        <Box
          sx={{ width: "175px", height: "38px" }}
          component="img"
          src={branding}
        />
      </Box>

      <Box
        component="ul"
        sx={{ display: "flex", gap: "10px", alignItems: "center" }}
      >
        {links.map((link) => {
          return (
            <Box key={link.name} component="li">
              <Link to={link.path}>
                <Typography sx={{ color: "#fff" }}>{link.name}</Typography>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

export default Navbar;
