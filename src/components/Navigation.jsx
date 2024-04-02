import React from "react";
import Dropdown from "./Dropdown";
// import sluggify from "../utils/sluggify";

export default function Navigation({ navigation }) {
  return (
    <nav className="navigation z-10">
      <div className="navigation navigationWrapper container">
        {navigation && navigation.map((navobj) => <NavItem content={navobj} />)}
        <div className="navigation">{<Dropdown />}</div>
      </div>
    </nav>
  );
}

function NavItem({ content }) {
  return (
    <>
      {content.url && (
        <a href={content.url}>
          <span>{content.name && content.name}</span>
        </a>
      )}
    </>
  );
}
