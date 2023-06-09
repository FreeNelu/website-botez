/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useEffect, useRef, useState } from "react";

import { Box, Typography } from "@mui/material";
import { fadeInAndSlideUp } from "./Animation";

const Confirmare = () => {
  const [isVisible, setIsVisible] = useState({
    first: false,
    second: false,
  });

  const firstTypographyRef = useRef(null);
  const secondTypographyRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible((prevState) => ({
            ...prevState,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    if (firstTypographyRef.current) {
      observer.observe(firstTypographyRef.current);
    }

    if (secondTypographyRef.current) {
      observer.observe(secondTypographyRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
      <Box
        ref={firstTypographyRef}
        id="first"
        sx={{
          opacity: isVisible.first ? 1 : 0,
          transform: isVisible.first ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.first
            ? `${fadeInAndSlideUp} 1s ease-in-out`
            : "none",
        }}
      >
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            fontFamily: "'Kristi', cursive",
            transform: { xs: "", md: "scale(1.25)" },
            color: "rgb(143, 113, 83)",
          }}
        >
          Confirmare
        </Typography>
      </Box>
      <Typography
        variant="h6"
        gutterBottom
        ref={secondTypographyRef}
        id="second"
        sx={{
          padding: "0px 16px",
          opacity: isVisible.second ? 1 : 0,
          transform: isVisible.second ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.second
            ? `${fadeInAndSlideUp} 1s ease-in-out`
            : "none",
        }}
      >
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
