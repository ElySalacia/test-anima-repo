/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const LineAxis2 = ({ color = "#3359FF", className }: Props): JSX.Element => {
  return (
    <svg
      className={`line-axis-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M22 7.43L20.59 6.02L16.56 10.55L9.5 4L2 11.51L3.5 13.01L9.64 6.86L15.23 12.04L13.5 13.99L9.5 9.99L2 17.5L3.5 19L9.5 12.99L13.5 16.99L16.69 13.4L20.59 17.01L22 15.6L18.02 11.9L22 7.43Z"
        fill={color}
      />
    </svg>
  );
};

LineAxis2.propTypes = {
  color: PropTypes.string,
};
