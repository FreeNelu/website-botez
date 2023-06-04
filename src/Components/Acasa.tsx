import React from "react";
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

const navItems = {
  acasa: "Acasă",
  ce: "Ce?",
  cand: "Când?",
  unde: "Unde?",
  confirmare: "Confirmare",
};

const Acasa = () => {
  const handleButtonClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
          component="img"
          alt="Pink plushies"
          src={bg1}
          sx={{
            minWidth: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(0.8)",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "32px",
          borderRadius: "8px",
          alignContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            marginBottom: "12px",
            transform: { xs: "scale(0.8)", md: "scale(1)" },
            fontFamily: "'Lato', sans-serif",
          }}
        >
          Ivana <br /> Holici
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
            marginBottom: "12px",
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
            }}
          >
            <Typography>25 August 2023</Typography>
          </Box>
        </Box>
        <Typography variant="body1">
          Biserica Piaristă, Cluj Napoca | Restaurant 25'th Downtown, Cluj Napoca
        </Typography>
      </Box>
    </Box>
  );
};

export default Acasa;
