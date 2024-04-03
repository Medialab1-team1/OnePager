import React from "react";
import sluggify from "../utils/sluggify";

export default function Eindproduct({ content }) {
    return (
        <section className="eindproduct" id={content.title && sluggify(content.title)}>
            {content.title && <h2 className="eindproduct title">{content.title}</h2>}
            {content.body && (
                <div className="eindproduct body" dangerouslySetInnerHTML={content.body} />
            )}
        </section>
    );
}

