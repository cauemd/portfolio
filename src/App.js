import React from "react";

//importing components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import AboutMe from "./components/AboutMe";
import Events from "./components/Events";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      {/* <AboutMe /> */}
      <Timeline />
      <Events />
      <Contact />
    </>
  );
}

export default App;
