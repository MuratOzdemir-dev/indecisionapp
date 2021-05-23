import React from "react";
import "./_header.scss";

export default function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}

Header.defaultProps = {
  title: "Murat",
  subtitle: "Özdemir"
}