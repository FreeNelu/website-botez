import React from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import newBorn from "../Assets/newBorn.jpg";
import "./Heart.css";

const Ce = () => {
  return (
    <Box
      id="ce"
      sx={{
        display: "flex",
        textAlign: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "72px 16px",
      }}
    >
      <Typography
        variant="h2"
        component="div"
        sx={{ fontFamily: "'Kristi', cursive", color: 'rgb(143, 113, 83)' }}
      >
        Te invit la botezul meu!
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ marginBottom: "32px", color: "#757575" }}
      >
        Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă ai
        fi alături de mine într-o zi atât de specială!
      </Typography>
      <Typography variant="h5">Numele meu este Ivana,</Typography>
      <Typography variant="subtitle1" sx={{ color: "#757575" }}>
        iar aceasta este prima mea petrecere!
      </Typography>
      <Box
        component="img"
        alt="Bebeluș"
        src={newBorn}
        sx={{
          margin: "32px",
          width: "300px",
          borderRadius: '10px'
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "end",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#757575" }}>
            Mama
          </Typography>
          <Typography variant="h5">Corina</Typography>
        </Box>
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
            <FavoriteIcon
              sx={{
                animation: "heartbeat 1s infinite",
                color: "white",
                fontSize: "18px",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            textAlign: "start",
          }}
        >
          <Typography variant="subtitle1" sx={{ color: "#757575" }}>
            Tata
          </Typography>
          <Typography variant="h5">Bogdan</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          marginTop: "24px",
        }}
      >
        <Typography variant="subtitle1" sx={{ color: "#757575" }}>
          Nașii
        </Typography>
        <Typography variant="h5">Rareș și Alexandra Harmath</Typography>
      </Box>
    </Box>
  );
};

export default Ce;
