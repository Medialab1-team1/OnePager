import React from "react";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Concept from "./components/Concept";
import Footer from "./components/Footer";

import about from "./content/about.json";
import concept1 from "./content/concept1.json";
import concept2 from "./content/concept2.json";
import concept3 from "./content/concept3.json";

import "./index.css";

export function App() {
  const concepten = [concept1, concept2, concept3];
  return (
    <>
      <Hero />
      <Navigation />
      <main className="container">
        {about && <About />}
        {concepten && concepten.map((concept) => <Concept content={concept} />)}
      </main>
      <Footer />
    </>
  );
}
