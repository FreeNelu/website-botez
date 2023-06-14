import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import bg1 from "../Assets/bg1.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Heart.css";
import { fadeIn, fadeInAndSlideDown, fadeInAndSlideLeft, fadeInAndSlideRight, fadeInAndSlideUp } from "./Animation";

const navItems = {
  acasa: "Acasă",
  ce: "Ce?",
  cand: "Când?",
  unde: "Unde?",
  confirmare: "Confirmare",
};

const Acasa = () => {
  

  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  useEffect(() => {
    setHasBeenSeen(true);
  }, []);

  const handleButtonClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 0);
    }
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container =
    window !== undefined ? () => window.document.body : undefined;

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "black" }}
    >
      <Box sx={{ backgroundColor: "#eee0d5" }}>
        <Typography variant="h6" sx={{ padding: "16px 0px" }}>
          BOTEZUL MEU
        </Typography>
      </Box>
      <Divider />
      <List>
        {Object.entries(navItems).map((item) => (
          <ListItem key={item[0]} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => {
                handleButtonClick(item[0]);
              }}
            >
              <ListItemText primary={item[1]} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ position: "relative", textAlign: "center" }} id="acasa">
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "space-between",
          padding: { xs: "12px 32px", sm: "12px 52px" },
          width: "100%",
          textAlign: "start",
          zIndex: 99,
        }}
      >
        <Typography
          variant="subtitle1"
          component="div"
          sx={{
            flexGrow: 1,
            color: "white",
            alignSelf: "center",
          }}
        >
          BOTEZUL MEU
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ display: { sm: "none" }, color: "white" }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {Object.entries(navItems).map((item) => (
            <Button
              key={item[0]}
              sx={{ color: "white" }}
              onClick={() => handleButtonClick(item[0])}
            >
              <Typography variant="button">{item[1]}</Typography>
            </Button>
          ))}
        </Box>
      </Box>
      <Box component="nav">
        <Drawer
          anchor="top"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ minWidth: "100%", height: "100vh", overflow: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            alt="Family photo"
            src={bg1}
            sx={{
              width: "auto",
              height: "100%",
              maxHeight: "100%",
              objectFit: "cover",
              filter: "brightness(0.8)",
              transform: "translateX(-32px)",
            }}
          />
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "52.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "32px",
          borderRadius: "8px",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginTop: { xs: "128px", md: "64px" },
            marginBottom: "54px",
            fontSize: '54px',
            fontFamily: "'Playfair Display', serif",
            color: "white",
            opacity: hasBeenSeen ? 1 : 0,
            transform: hasBeenSeen ? "translateY(0)" : "translateY(100%)",
            animation: `${fadeInAndSlideDown} 1s ease-in-out`,
          }}
        >
          Ivana
        </Typography>
        <Box
          sx={{
            width: "80%",
            alignSelf: "center",
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            position: "relative",
            marginBottom: "24px",
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: "6px", sm: "0px" },
          }}
        >
          <Box
            sx={{
              height: "42px",
              width: { xs: "75%", sm: "50%" },
              background: "#eee0d5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopLeftRadius: "100px",
              borderBottomLeftRadius: "100px",
              borderTopRightRadius: { xs: "100px", sm: "0%" },
              borderBottomRightRadius: { xs: "100px", sm: "0%" },
              opacity: hasBeenSeen ? 1 : 0,
              transform: hasBeenSeen ? "translateY(0)" : "translateY(100%)",
              animation: `${fadeInAndSlideLeft} 1s ease-in-out`,
            }}
          >
            <Typography>Botez</Typography>
          </Box>
          <Box
            sx={{
              position: "absolute",
              height: 32,
              width: 32,
              border: "2px solid white",
              borderRadius: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: {
                xs: "linear-gradient(to bottom, #eee0d5 50%, #b0f2d3 50%)",
                sm: "transparent",
              },
              zIndex: 99,
              opacity: hasBeenSeen ? 1 : 0,
              transform: hasBeenSeen ? "translateY(0)" : "translateY(100%)",
              animation: `${fadeIn} 1s ease-in-out`,
            }}
          >
            <FavoriteIcon
              sx={{
                animation: "heartbeat 1s infinite",
                color: "white",
                fontSize: "18px",
              }}
            />
          </Box>
          <Box
            sx={{
              height: "42px",
              width: { xs: "75%", sm: "50%" },
              background: "#b0f2d3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderTopRightRadius: "100px",
              borderBottomRightRadius: "100px",
              borderTopLeftRadius: { xs: "100px", sm: "0%" },
              borderBottomLeftRadius: { xs: "100px", sm: "0%" },
              opacity: hasBeenSeen ? 1 : 0,
              transform: hasBeenSeen ? "translateY(0)" : "translateY(100%)",
              animation: `${fadeInAndSlideRight} 1s ease-in-out`,
            }}
          >
            <Typography>25 August 2023</Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          fontWeight={700}
          sx={{
            color: "white",
            opacity: hasBeenSeen ? 1 : 0,
            transform: hasBeenSeen ? "translateY(0)" : "translateY(100%)",
            animation: `${fadeInAndSlideUp} 1s ease-in-out`,
          }}
        >
          Biserica Piaristă, Cluj-Napoca | Restaurant 25'th Downtown, Cluj
          Napoca
        </Typography>
      </Box>
    </Box>
  );
};

export default Acasa;
