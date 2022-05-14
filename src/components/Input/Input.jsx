import PropTypes from "prop-types";
import React from 'react';

const propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  inputHandler: PropTypes.func.isRequired,
  autoComplete: PropTypes.string,
};

const defaultProps = {
  type: 'text',
  placeholder: '',
  autoComplete: 'off',
};

const Input = ({
  name,
  className,
  type,
  placeholder,
  value,
  inputHandler,
  autoComplete,
}) => {
  return (
    <input
      name={name}
      className={className}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={inputHandler}
      autoComplete={autoComplete}
    />
  );
};

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;