import React from "react";

export default function ConceptImages(images) {
  const urlArray = Object.values(images.content);

  return (
    <div className="images">
      {urlArray &&
        urlArray.map((url) => (
          <a href={url}>
            <img src={url} alt="" className="image" />
          </a>
        ))}
    </div>
  );
}
