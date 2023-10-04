/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Starsharp10 } from "../../icons/Starsharp10";
import "./style.css";

interface Props {
  size: "large" | "inherit" | "medium" | "small";
  className: any;
  icon: JSX.Element;
}

export const SizeMediumWrapper = ({
  size,
  className,
  icon = <Starsharp10 className="starsharp-13" color="#171D1A" opacity="0.56" />,
}: Props): JSX.Element => {
  return <div className={`size-medium-wrapper size-0-${size} ${className}`}>{icon}</div>;
};

SizeMediumWrapper.propTypes = {
  size: PropTypes.oneOf(["large", "inherit", "medium", "small"]),
};
