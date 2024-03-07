import React from "react";

export default function ProsAndCons(prosandcons = {}) {
  // content mapping
  const pros = prosandcons.content.pros;
  const cons = prosandcons.content.cons;

  return (
    <div className="prosAndCons">
      <h1>PROS</h1>
      {pros && (
        <div className="pros">
          <ul>
            {pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
      )}
      <h1>CONS</h1>
      {cons && (
        <div className="cons">
          <ul>
            {cons.map((con) => (
              <li key={con}>{con}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
