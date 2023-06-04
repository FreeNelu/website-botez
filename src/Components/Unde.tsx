import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import ChurchIcon from "@mui/icons-material/Church";
import WineBarIcon from "@mui/icons-material/WineBar";
import biserica from "../Assets/biserica.jpg";
import restaurant from "../Assets/restaurant.jpg";

const CHURCH = {
  name: "Biserica Piariștilor",
  location: { lat: 46.7677697, lng: 23.5905711 },
  image: biserica,
};

const PARTY = {
  name: "Restaurant 25'th Downtown",
  location: { lat: 46.7688931, lng: 23.5908123 },
  image: restaurant,
};

const Unde = () => {
  const [open, setOpen] = useState(false);
  const [place, setPlace] = useState(CHURCH);
  const [showImage, setShowImage] = useState(false);

  const handleOpen = (place: {
    name: string;
    location: { lat: number; lng: number };
    image: string;
  }) => {
    setPlace(place);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="unde"
      sx={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "72px 16px",
      }}
    >
      <Typography variant="h2" gutterBottom>
        Evenimente
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ color: "#757575" }}>
        Ceremonia religioasă - Petrecerea
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
          marginTop: "48px",
        }}
      >
        <Box
          sx={{
            height: "420px",
            maxWidth: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            boxShadow: "0 0 20px rgba(53,48,49,.15)",
            borderRadius: "6px",
            border: "20px solid #b0f2d3",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              background: "#b0f2d3",
              borderRadius: "100%",
              padding: "12px",
              boxShadow: "0 0 20px rgba(53,48,49,.15)",
            }}
          >
            <Box
              sx={{
                height: 42,
                width: 42,
                border: "2px dashed white",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#8de9be",
              }}
            >
              <ChurchIcon
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              />
            </Box>
          </Box>

          <Typography variant="h6" sx={{ marginTop: "30px" }}>
            Ceremonia religioasă
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "30px" }}>
            25 August, 2023 - ora 12:00
          </Typography>
          <Typography variant="h6">Adresa</Typography>
          <Typography variant="subtitle1">Biserica Piaristă</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Cluj Napoca
          </Typography>
          <Button
            sx={{ border: "2px solid #b0f2d3", padding: "8px 30px" }}
            onClick={() => handleOpen(CHURCH)}
          >
            <Typography sx={{ color: "black" }}>Locație</Typography>
          </Button>
        </Box>
        <Box
          sx={{
            height: "420px",
            maxWidth: "420px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            boxShadow: "0 0 20px rgba(53,48,49,.15)",
            borderRadius: "6px",
            border: "20px solid #eee0d5",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              background: "#eee0d5",
              borderRadius: "100%",
              padding: "12px",
              boxShadow: "0 0 20px rgba(53,48,49,.15)",
            }}
          >
            <Box
              sx={{
                height: 42,
                width: 42,
                border: "2px dashed white",
                borderRadius: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "#efd1be",
              }}
            >
              <WineBarIcon
                sx={{
                  color: "white",
                  fontSize: "18px",
                }}
              />
            </Box>
          </Box>
          <Typography variant="h6" sx={{ marginTop: "30px" }}>
            Petrecerea
          </Typography>
          <Typography variant="subtitle1" sx={{ marginBottom: "30px" }}>
            25 August, 2023 - ora 15:00
          </Typography>
          <Typography variant="h6">Adresa</Typography>
          <Typography variant="subtitle1">Restaurant 25'th Downtown</Typography>
          <Typography variant="subtitle1" gutterBottom>
            Cluj Napoca
          </Typography>
          <Button
            sx={{ border: "2px solid #eee0d5", padding: "8px 30px" }}
            onClick={() => handleOpen(PARTY)}
          >
            <Typography sx={{ color: "black" }}>Locație</Typography>
          </Button>
        </Box>
      </Box>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{textAlign: 'center'}}>{place.name}</DialogTitle>
        <DialogContent sx={{textAlign: 'center'}}>
          {showImage ? (
            <Box
              component="img"
              alt="Locație"
              src={place.image}
              sx={{
                width: "100%",
                height: "500px",
                objectFit: "cover",
              }}
            />
          ) : (
            <iframe
              title="Google Maps"
              src={`https://www.google.com/maps?q=${place.location.lat},${place.location.lng}&output=embed`}
              width="100%"
              height="500px"
              style={{ border: 0 }}
              allowFullScreen
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          )}
          <Button
            sx={{ border: "2px solid #eee0d5", padding: "8px 30px", marginTop: '8px' }}
            onClick={() => setShowImage(!showImage)}
          >
            <Typography sx={{ color: "black" }}>{`Arată ${showImage ? "harta" : 'imaginea'}` }</Typography>
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Unde;
