import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      {/* <br /> <br /> <br /> <br /> <br /> */}
      <Portfolio />
    </>
  );
}

export default App;
