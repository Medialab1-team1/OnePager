import React from "react";
import Functionalities from "./Functionalities";
import ProsAndCons from "./ProsAndCons";

import sluggify from "../utils/sluggify";
import svg from "bundle-text:../../static/img/star.svg";
import ImageGallery from "react-image-gallery";
import { useEffect } from "react";
import "../utils/image-gallery.css";

export default function Concept({ content }) {
  useEffect(() => {
    carouselFiller();
  }, []);

  const imgArray = [];
  function carouselFiller() {
    content.images.map((url) => imgArray.push({ original: `${url}` }));
  }
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

      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          {content.functionalities && (
            <Functionalities content={content.functionalities} />
          )}
          {content.prosandcons && <ProsAndCons content={content.prosandcons} />}
        </div>
        <div className="mt-10">
          <ImageGallery items={imgArray} showPlayButton={false} />
        </div>
      </div>

      {content.prototype && (
        <a href={content.prototype}>Ga naar het prototype</a>
      )}
    </div>
  );
}
