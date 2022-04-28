/* eslint-disable no-undef */
import PropTypes from "prop-types";
import React from "react";

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

const Icon = ({ name, className }) => (
  <img src={require(`./img/${name}.png`)} alt={name} className={className} />
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
