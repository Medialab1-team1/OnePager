import React from "react";
import Functionalities from "./Functionalities";
import ProsAndCons from "./ProsAndCons";
import Images from "./Images";
import sluggify from "../utils/sluggify";

export default function Concept({ content = {} }) {
  return (
    <section className="card concept" id={sluggify(content.title)}>
      {content.title && <h2 className="concept title">{content.title}</h2>}
      {content.body && (
        <div dangerouslySetInnerHTML={content.body} className="concept body" />
      )}
      {content.functionalities && (
        <Functionalities content={content.functionalities} />
      )}
      {content.prosandcons && <ProsAndCons content={content.prosandcons} />}
      {content.images && <Images content={content.images} />}
    </section>
  );
}
