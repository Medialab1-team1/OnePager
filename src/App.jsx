import React from "react";

import "./index.css";
import Concept from "./components/Concept";
import concept1 from "./content/concept1.json";
import concepttemp from "./content/conceptTEMPLATE.json";

export function App() {
  const concepten = [concept1, concepttemp];
  return (
    <>
      {/* <Navigation /> */}
      {/* <Hero/> */}
      {concepten && concepten.map((concept) => <Concept content={concept} />)}
    </>
  );
}
