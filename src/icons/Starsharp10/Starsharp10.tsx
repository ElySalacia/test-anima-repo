/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const Starsharp10 = ({ color = "#171D1A", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`starsharp-10 ${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8 11.8467L12.12 14.3333L11.0267 9.64667L14.6667 6.49333L9.87334 6.08667L8 1.66667L6.12667 6.08667L1.33334 6.49333L4.97334 9.64667L3.88 14.3333L8 11.8467Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Starsharp10.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
