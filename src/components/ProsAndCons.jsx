import React from "react";

export default function ProsAndCons(prosandcons = {}) {
  // content mapping
  const pros = prosandcons.content.pros;
  const cons = prosandcons.content.cons;

  return (
    <div className="prosAndCons">
      <h3>PROS</h3>
      {pros && (
        <div className="pros">
          <ul>
            {pros.map((pro) => (
              <li key={pro}>{pro}</li>
            ))}
          </ul>
        </div>
      )}
      <h3>CONS</h3>
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
