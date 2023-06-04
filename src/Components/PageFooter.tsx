/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { Box, Typography } from "@mui/material";
import bg3 from '../Assets/bg3.jpg'

const PageFooter = () => {
  return (
    <Box
      id="cand"
      sx={{
        position: "relative",
        overflow: "hidden",
        display:'flex'
      }}
    >
      <Box
        component="img"
        alt="Pink toys"
        src={bg3}
        sx={{
          minWidth: "100%",
          height: "500px",
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h1"
          sx={{ fontFamily: "'Kristi', cursive", transform: {xs: 'scale(1)', md: 'scale(1.5)'}, lineHeight: 1 }}
        >
          Cu drag!
        </Typography>
        <Typography variant="h5" sx={{ margin: "24px",}}>
          Ivana Holici
        </Typography>
      </Box>
    </Box>
  );
};

export default PageFooter;
