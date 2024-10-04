import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import LocomotiveScroll from 'locomotive-scroll';
import Ending from "./components/Ending";

function App() {
  const [locomotiveScroll, setLocomotiveScroll] = useState(null);

  useEffect(() => {
    // Function to check if the screen is large enough
    const isLargeScreen = () => window.innerWidth >= 1024; // Adjust this value as needed

    // Function to initialize or destroy Locomotive Scroll
    const handleResize = () => {
      if (isLargeScreen()) {
        if (!locomotiveScroll) {
          const scroll = new LocomotiveScroll();
          setLocomotiveScroll(scroll);
        }
      } else {
        if (locomotiveScroll) {
          locomotiveScroll.destroy();
          setLocomotiveScroll(null);
        }
      }
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, [locomotiveScroll]);

  return (
    <>
      {/* <Navbar /> */}
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      {/* <Footer /> */}
      {/* <ContactUs /> */}
      {/* <Ending /> */}
    </>
  );
}

export default App;
