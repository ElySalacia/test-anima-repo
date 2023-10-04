/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  divider: string;
}

export const DividerHorizontal = ({
  className,
  divider = "https://c.animaapp.com/tVSum2E8/img/divider-1.svg",
}: Props): JSX.Element => {
  return (
    <div className={`divider-horizontal ${className}`}>
      <div className="min-height" />
      <img className="divider" alt="Divider" src={divider} />
    </div>
  );
};

DividerHorizontal.propTypes = {
  divider: PropTypes.string,
};
