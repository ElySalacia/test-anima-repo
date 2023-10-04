/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  spacing: "seven" | "two" | "three" | "four" | "one" | "five" | "eight" | "six";
  visibility: boolean;
  className: any;
}

export const SpacingVertical = ({ spacing, visibility, className }: Props): JSX.Element => {
  return (
    <div className={`spacing-vertical visibility-0-${visibility} spacing-3-${spacing} ${className}`}>
      <div className="min-height-2" />
    </div>
  );
};

SpacingVertical.propTypes = {
  spacing: PropTypes.oneOf(["seven", "two", "three", "four", "one", "five", "eight", "six"]),
  visibility: PropTypes.bool,
};
