import React from "react";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Concept from "./components/Concept";
import Footer from "./components/Footer";

import "./index.css";

import concept1 from "./content/concept1.json";
import about from "./content/about.json";

export function App() {
  const concepten = [concept1];
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
