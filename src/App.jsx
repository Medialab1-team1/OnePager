import React from "react";
import sluggify from "./utils/sluggify";

import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Concept from "./components/Concept";
import Eindproduct from "./components/Eindproduct";
import Footer from "./components/Footer";

import about from "./content/about.json";
import concept1 from "./content/concept1.json";
import concept2 from "./content/concept2.json";
import concept3 from "./content/concept3.json";
import eind from "./content/eind.json";

import "./index.css";

export function App() {
  const concepten = [concept1, concept2, concept3];

  // build the navigation array of objects
  const navigation = [
    { name: "Home", url: "/", children: [] },
    { name: "Over ons", url: `/#${sluggify(about.title)}`, children: [] },
    { name: "Eindproduct", url: `/#${sluggify(eind.title)}`, children: [] },
  ];

  return (
    <>
      <Hero />
      <Navigation navigation={navigation} />
      <main className="container">
        {about && <About content={about} />}
        {eind && <Eindproduct content={eind} />}
        <section id="concepten" className="conceptenWrapper">
          <h2>Concepten</h2>
          {concepten &&
            concepten.map((concept) => <Concept content={concept} />)}
        </section>
      </main>
      <Footer />
    </>
  );
}
