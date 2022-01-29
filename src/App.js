import React from "react";

import Slider from "./Components/Slider";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";

import "./index.css";

function App() {
  return (
    <article className="p-0 m-0">
      <Slider />
      <Experience />
      <Footer />
    </article>
  );
}

export default App;
