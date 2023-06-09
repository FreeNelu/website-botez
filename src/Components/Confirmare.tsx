/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

import { Box, Typography } from "@mui/material";

const Confirmare = () => {
  return (
    <Box
      id="confirmare"
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fafafa",
        padding: "72px 0px",
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        gutterBottom
        sx={{
          fontFamily: "'Kristi', cursive",
          transform: { xs: "", md: "scale(1.25)" },
        }}
      >
        Confirmare
      </Typography>
      <Typography variant="h6" gutterBottom>
        Poți confirma participarea folosind formularul de mai jos.
      </Typography>
      <Box
        sx={{
          width: "100%",
          height: "900px",
          marginTop: "24px",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfboVknKaHpyyAKjIQFHj8jbk0CeJHryUnJ7J9u6c0XTFCxcw/viewform?embedded=true"
          width="100%"
          height="100%"
          scrolling="no"
          style={{
            border: "none",
          }}
          title="Google Form"
        >
          Se încarcă…
        </iframe>
      </Box>
    </Box>
  );
};

export default Confirmare;
