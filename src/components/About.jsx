import React from "react";
import sluggify from "../utils/sluggify";

export default function About({ content }) {
  return (
    <section className="about" id={content.title && sluggify(content.title)}>
      {content.title && <h2 className="about title">{content.title}</h2>}
      {content.body && (
        <div className="about body" dangerouslySetInnerHTML={content.body} />
      )}
    </section>
  );
}
