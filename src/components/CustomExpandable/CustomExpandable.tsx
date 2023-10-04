/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Expandlessfilled1 } from "../../icons/Expandlessfilled1";
import { Expandmorefilled } from "../../icons/Expandmorefilled";
import { Starsharp10 } from "../../icons/Starsharp10";
import { Icon } from "../Icon";
import { IconbuttonSmall } from "../IconbuttonSmall";
import { ListItem } from "../ListItem";
import "./style.css";

interface Props {
  isOpen: boolean;
  className: any;
  text: string;
  override: JSX.Element;
}

export const CustomExpandable = ({
  isOpen,
  className,
  text = "List item",
  override = <Expandlessfilled1 className="instance-node-3" />,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    isOpen: isOpen,
  });

  return (
    <div
      className={`custom-expandable is-open-${state.isOpen} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="container-wrapper">
        <div className="container-2">
          <div className="left-content">
            <Icon
              className="instance-node-2"
              icon={<Starsharp10 className="instance-node-3" color="#3359FF" />}
              size="medium"
            />
          </div>
          <div className="list-item-wrapper">
            <div className="list-item-2">{text}</div>
          </div>
          <IconbuttonSmall
            className="instance-node-2"
            sizeMediumWrapperIcon={!state.isOpen ? <Expandmorefilled className="instance-node-3" /> : undefined}
          />
        </div>
      </div>
      {state.isOpen && (
        <>
          <ListItem className="list-item-instance" dense disGutters={false} label="List item" state="enabled" />
          <ListItem className="list-item-instance" dense disGutters={false} label="List item" state="enabled" />
          <ListItem className="list-item-instance" dense disGutters={false} label="List item" state="enabled" />
          <ListItem className="list-item-instance" dense disGutters={false} label="List item" state="enabled" />
        </>
      )}
    </div>
  );
};

function reducer(state: any, action: any) {
  if (state.isOpen === false) {
    switch (action) {
      case "click":
        return {
          isOpen: true,
        };
    }
  }

  if (state.isOpen === true) {
    switch (action) {
      case "click":
        return {
          isOpen: false,
        };
    }
  }

  return state;
}

CustomExpandable.propTypes = {
  isOpen: PropTypes.bool,
  text: PropTypes.string,
};
