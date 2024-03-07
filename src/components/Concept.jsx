import React from "react";
import Functionalities from "./Functionalities";
import ProsAndCons from "./ProsAndCons";
import ConceptImages from "./ConceptImages";

export default function Concept({ content = {} }) {
  return (
    <div className="card concept" id={content.title.replace(" ", "-")}>
      {content.title && <h2 className="concept title">{content.title}</h2>}
      {content.body && (
        <div dangerouslySetInnerHTML={content.body} className="concept body" />
      )}
      {content.functionalities && (
        <Functionalities content={content.functionalities} />
      )}
      {content.prosandcons && <ProsAndCons content={content.prosandcons} />}
      {content.images && <ConceptImages content={content.images} />}
    </div>
  );
}
