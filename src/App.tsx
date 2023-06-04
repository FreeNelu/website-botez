import React, { useEffect, useRef, useState } from "react";
import PageHeader from "./Components/PageHeader";
import Acasa from "./Components/Acasa";
import Ce from "./Components/Ce";
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import Cand from "./Components/Cand";
import Unde from "./Components/Unde";
import Confirmare from "./Components/Confirmare";
import PageFooter from "./Components/PageFooter";

const App = () => {
  const acasaRef = useRef(null);
  const [isAcasaInView, setIsAcasaInView] = useState(true);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        setIsAcasaInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least one pixel is visible
    );

    const acasaElement = acasaRef.current;
    if (acasaElement) {
      intersectionObserver.observe(acasaElement);
    }

    // Cleanup the observer when the component unmounts
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <PageHeader isHidden={isAcasaInView} />
      <div ref={acasaRef}><Acasa /></div>
      <Ce/>
      <Cand/>
      <Unde/>
      <Confirmare/>
      <PageFooter/>
    </ThemeProvider>
  );
};

export default App;
