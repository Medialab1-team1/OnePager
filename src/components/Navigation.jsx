import React from "react";
import sluggify from "../utils/sluggify";

export default function Navigation({ navigation }) {
  return (
    <nav>
      <div className="navigation navigationWrapper">
        {navigation && navigation.map((navobj) => <NavItem content={navobj} />)}
      </div>
    </nav>
  );
}

function NavItem({ content }) {
  return (
    <>
      {content.url && <a href={content.url}>{content.name && content.name}</a>}
      {content.children.length > 0 && (
        <div className="navigation dropdown">
          {content.children.map((child) => (
            <a href={`/#${sluggify(child.title)}`}>{child.title}</a>
          ))}
        </div>
      )}
    </>
  );
}
