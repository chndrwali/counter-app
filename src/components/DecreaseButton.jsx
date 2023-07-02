/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import PropTypes from 'prop-types';

function DecreaseButton({ decrease }) {
  return (
    <button className="decrease" onClick={decrease}>
      <span role="img" aria-label="minus">
        -
      </span>
    </button>
  );
}

DecreaseButton.propType = {
  decrease: PropTypes.func.isRequired,
};

export default DecreaseButton;
