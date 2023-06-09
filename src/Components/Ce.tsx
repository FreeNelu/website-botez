import React, { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import newBorn from "../Assets/newBorn.jpg";
import "./Heart.css";
import { fadeInAndSlideLeft, fadeInAndSlideUp } from "./Animation";

const Ce = () => {
  const [isVisible, setIsVisible] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false
  });

  const firstTypographyRef = useRef(null);
  const secondTypographyRef = useRef(null);
  const thirdTypographyRef = useRef(null);
  const fourthTypographyRef = useRef(null);
  const fifthTypographyRef = useRef(null);

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

    if (thirdTypographyRef.current) {
      observer.observe(thirdTypographyRef.current);
    }

    if (fourthTypographyRef.current) {
      observer.observe(fourthTypographyRef.current);
    }

    if (fifthTypographyRef.current) {
      observer.observe(fifthTypographyRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

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
          variant="h2"
          component="div"
          sx={{
            fontFamily: "'Kristi', cursive",
            color: "rgb(143, 113, 83)",
          }}
        >
          Te invit la botezul meu!
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "32px", color: "#757575" }}
        >
          Dacă ai ajuns aici înseamnă că țin la tine și m-aș bucura enorm dacă
          ai fi alături de mine într-o zi atât de specială!
        </Typography>
      </Box>
      <Box
        ref={secondTypographyRef}
        id="second"
        sx={{
          opacity: isVisible.second ? 1 : 0,
          transform: isVisible.second ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.second
            ? `${fadeInAndSlideUp} 1s ease-in-out`
            : "none",
        }}
      >
        <Typography variant="h5">Numele meu este Ivana,</Typography>
        <Typography variant="subtitle1" sx={{ color: "#757575" }}>
          iar aceasta este prima mea petrecere!
        </Typography>
      </Box>
      <Box
        component="img"
        alt="Bebeluș"
        src={newBorn}
        sx={{
          margin: "32px",
          width: "300px",
          borderRadius: "10px",
          opacity: isVisible.third ? 1 : 0,
          transform: isVisible.third ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.third
            ? `${fadeInAndSlideLeft} 1s ease-in-out`
            : "none",
        }}
        ref={thirdTypographyRef}
        id="third"
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          gap: "12px",
          opacity: isVisible.fourth ? 1 : 0,
          transform: isVisible.fourth ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.fourth
            ? `${fadeInAndSlideUp} 1s ease-in-out`
            : "none",
        }}
        ref={fourthTypographyRef}
        id="fourth"
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
          opacity: isVisible.fifth ? 1 : 0,
          transform: isVisible.fifth ? "translateY(0)" : "translateY(100%)",
          animation: isVisible.fifth
            ? `${fadeInAndSlideUp} 1s ease-in-out`
            : "none",
        }}
        ref={fifthTypographyRef}
        id="fifth"
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
