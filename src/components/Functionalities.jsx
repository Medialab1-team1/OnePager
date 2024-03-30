import React from "react";

export default function Functionalities(functionalities) {
  const funcArray = Object.values(functionalities.content);
  return (
    <div className="functionalities">
      <h3>Functionaliteiten</h3>
      <ul>
        {funcArray && funcArray.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}
