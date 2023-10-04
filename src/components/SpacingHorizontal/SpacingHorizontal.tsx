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

export const SpacingHorizontal = ({ spacing, visibility, className }: Props): JSX.Element => {
  return (
    <div className={`spacing-horizontal ${spacing} ${className}`}>
      <div className={`frame visibility-${visibility} spacing-${spacing}`}>
        {visibility && (
          <>
            <img
              className="line"
              alt="Line"
              src={
                spacing === "two"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-13.svg"
                  : spacing === "three"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-11.svg"
                  : spacing === "four"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-9.svg"
                  : spacing === "five"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-7.svg"
                  : spacing === "six"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-5.svg"
                  : spacing === "seven"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-3.svg"
                  : spacing === "eight"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-1.svg"
                  : "https://c.animaapp.com/tVSum2E8/img/line-15.svg"
              }
            />
            <img
              className="img"
              alt="Line"
              src={
                spacing === "two"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-13.svg"
                  : spacing === "three"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-11.svg"
                  : spacing === "four"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-9.svg"
                  : spacing === "five"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-7.svg"
                  : spacing === "six"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-5.svg"
                  : spacing === "seven"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-3.svg"
                  : spacing === "eight"
                  ? "https://c.animaapp.com/tVSum2E8/img/line-1.svg"
                  : "https://c.animaapp.com/tVSum2E8/img/line-15.svg"
              }
            />
          </>
        )}

        {((spacing === "eight" && !visibility) ||
          (spacing === "five" && !visibility) ||
          (spacing === "four" && !visibility) ||
          (spacing === "seven" && !visibility) ||
          (spacing === "six" && !visibility)) && <div className="spacer" />}
      </div>
    </div>
  );
};

SpacingHorizontal.propTypes = {
  spacing: PropTypes.oneOf(["seven", "two", "three", "four", "one", "five", "eight", "six"]),
  visibility: PropTypes.bool,
};
