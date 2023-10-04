/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  link: string;
  color: "primary" | "inherit";
  underline: "on-hover" | "always" | "none";
  stateProp: "hovered" | "focused" | "enabled";
  className: any;
  divClassName: any;
}

export const Link = ({ link = "Link", color, underline, stateProp, className, divClassName }: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    color: color || "primary",
    underline: underline || "always",
    state: stateProp || "enabled",
  });

  return (
    <div
      className={`link ${state.state} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {(state.underline === "always" || (state.state === "hovered" && state.underline === "on-hover")) && (
        <>
          <div className={`text-wrapper ${state.color}`}>{link}</div>
          <div className={`underline color-${state.color} ${state.state}`} />
        </>
      )}

      {((state.state === "enabled" && state.underline === "none") ||
        (state.state === "enabled" && state.underline === "on-hover") ||
        state.state === "focused" ||
        (state.state === "hovered" && state.underline === "none")) && (
        <div className={`div state-${state.state} color-0-${state.color} ${divClassName}`}>{link}</div>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Link.propTypes = {
  link: PropTypes.string,
  color: PropTypes.oneOf(["primary", "inherit"]),
  underline: PropTypes.oneOf(["on-hover", "always", "none"]),
  stateProp: PropTypes.oneOf(["hovered", "focused", "enabled"]),
};
