import React from "react";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { Element } from "react-scroll";

import "./App.scss";

import Navbar from "./components/Navbar.jsx";
import Welcome from "./pages/Welcome.jsx";
import Projectspage from "./pages/Projectspage.jsx";
import Skills from "./pages/Skills.jsx";
// import Interests from "./pages/Interests.jsx";
import ContactMe from "./pages/Contactme";
import Footer from "./components/Footer";

AOS.init({
  duration: 500,
});

function App() {
  return (
    <div>
      <Navbar />
      <div className={"App"}>
        {/* <div className={`App ${theme}`} > */}
        <Element name="welcome">
          <Welcome className="Appjr" />
        </Element>

        <Element name="skills">
          <Skills className="Appjr" />
        </Element>

        <Element name="projects">
          <Projectspage className="Appjr" />
        </Element>

        <Element name="contactme">
          <ContactMe className="Appjr" />
        </Element>
        {/* <Button className="btn" value="Test 2" to="Welcome" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button> */}
        <Footer />
      </div>
    </div>

    // </ThemeContext.Provider>
  );
}

export default App;
