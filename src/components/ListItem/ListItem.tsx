/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  label: string;
  rightSlot: boolean;
  leftSlot: boolean;
  divider: boolean;
  secondText: boolean;
  dense: boolean;
  disGutters: boolean;
  state: "enabled" | "selected" | "focus" | "disabled";
  className: any;
}

export const ListItem = ({
  label = "List item",
  rightSlot = false,
  leftSlot = false,
  divider = false,
  secondText = false,
  dense,
  disGutters,
  state,
  className,
}: Props): JSX.Element => {
  return (
    <div className={`list-item ${state} ${className}`}>
      <div className="container">
        <div className="listitem-text">
          <div className="text-wrapper-3">{label}</div>
        </div>
      </div>
    </div>
  );
};

ListItem.propTypes = {
  label: PropTypes.string,
  rightSlot: PropTypes.bool,
  leftSlot: PropTypes.bool,
  divider: PropTypes.bool,
  secondText: PropTypes.bool,
  dense: PropTypes.bool,
  disGutters: PropTypes.bool,
  state: PropTypes.oneOf(["enabled", "selected", "focus", "disabled"]),
};
