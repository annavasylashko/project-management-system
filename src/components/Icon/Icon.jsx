import React from "react";

const Icon = ({ name, className }) => (
  <img src={require(`./img/${name}.png`)} alt={name} className={className} />
);

export default Icon;
