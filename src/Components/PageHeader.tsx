import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

const navItems = {
  acasa: "Acasă",
  ce: "Ce?",
  cand: "Când?",
  unde: "Unde?",
  confirmare: "Confirmare",
};

const PageHeader = ({ isHidden }: { isHidden: boolean }) => {
  const handleButtonClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      console.log('ele', element, section)
    }
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "black" }}
    >

      <Box sx={{backgroundColor: '#eee0d5'}}>
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

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        visibility: isHidden ? "hidden" : "visible",
        opacity: isHidden ? 0 : 1,
        transition: "opacity 0.75s, visibility 0.75s",
        zIndex: 99999
      }}
    >
      <CssBaseline />
      <AppBar component="nav" sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <Toolbar
          sx={{
            display: "flex",
            backgroundColor: "white",
            padding: { xs: "12px 32px", sm: "12px 52px" },
          }}
          disableGutters
        >
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            BOTEZUL MEU
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" }, color: "black" }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {Object.entries(navItems).map((item) => (
              <Button
                key={item[0]}
                sx={{ color: "black" }}
                onClick={() => handleButtonClick(item[0])}
              >
                <Typography variant="button">{item[1]}</Typography>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
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
    </Box>
  );
};

export default PageHeader;
