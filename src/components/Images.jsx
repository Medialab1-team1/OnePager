import React from "react";

export default function Images(images) {
  const urlArray = Object.values(images.content);

  return (
    <div className="images">
      {urlArray &&
        urlArray.map((url, i) => (
          <a key={`${url}${i}`} href={url}>
            <img src={url} alt="" className="image" />
          </a>
        ))}
    </div>
  );
}
