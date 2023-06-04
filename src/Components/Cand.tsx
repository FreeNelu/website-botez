import React, { useState, useEffect } from "react";
import moment from "moment";
import { Box, Typography } from "@mui/material";
import bg2 from "../Assets/bg2.jpg";

const Cand = () => {
  const [countdown, setCountdown] = useState<string>("");
  useEffect(() => {
    // Set the target date for the countdown
    const targetDate = moment("2023-08-25", "YYYY-MM-DD");

    // Update the countdown every second
    const interval = setInterval(() => {
      const now = moment();
      const duration = moment.duration(targetDate.diff(now));

      // Format the countdown in the desired format
      const days = Math.floor(duration.asDays());
      const hours = duration.hours();
      const minutes = duration.minutes();
      const seconds = duration.seconds();

      const countdownString = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      setCountdown(countdownString);

      // Check if the target date has passed
      if (duration.asMilliseconds() <= 0) {
        clearInterval(interval);
        setCountdown("Prea târziu, data botezului deja a trecut. :(");
      }
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

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
        alt="Pink clock"
        src={bg2}
        sx={{
          minWidth: "100%",
          height: "100vh",
          objectFit: "cover",
          filter: "brightness(0.7)",
          alignSelf: "flex-end",
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
          sx={{ fontFamily: "'Kristi', cursive", transform: "scale(1.5)" }}
        >
          Când?
        </Typography>
        <Typography variant="h5" sx={{ margin: "24px" }}>
          Vineri, 25 August 2023 - Cluj Napoca
        </Typography>
        <Typography variant="h1" sx={{transform: {xs: 'scale(0.75)', md: 'scale(1)'}}}>{countdown}</Typography>
      </Box>
    </Box>
  );
};

export default Cand;
