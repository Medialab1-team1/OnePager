import React from "react";
import Functionalities from "./Functionalities";
import ProsAndCons from "./ProsAndCons";
import Images from "./Images";
import sluggify from "../utils/sluggify";
import svg from "bundle-text:../../static/img/star.svg";

export default function Concept({ content }) {
  return (
    <div
      className={`card concept ${content.chosen && "chosen"}`}
      id={sluggify(content.title)}
    >
      <div className="concept titleWrapper">
        {content.title && <h2 className="concept title">{content.title}</h2>}
        {content.chosen && (
          <div
            className="concept fav"
            alt=""
            dangerouslySetInnerHTML={{ __html: svg }}
          ></div>
        )}
      </div>
      {content.body && (
        <div dangerouslySetInnerHTML={content.body} className="concept body" />
      )}
      {content.functionalities && (
        <Functionalities content={content.functionalities} />
      )}
      {content.prosandcons && <ProsAndCons content={content.prosandcons} />}
      {content.prototype && (
        <a href={content.prototype}>Ga naar het prototype</a>
      )}
      {content.images && <Images content={content.images} />}
    </div>
  );
}
