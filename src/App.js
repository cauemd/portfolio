import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";

import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <Timeline />
    </>
  );
}

export default App;
