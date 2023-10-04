/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Starsharp10 } from "../../icons/Starsharp10";
import { SizeMediumWrapper } from "../SizeMediumWrapper";
import "./style.css";

interface Props {
  className: any;
  sizeMediumWrapperIcon: JSX.Element;
}

export const IconbuttonSmall = ({
  className,
  sizeMediumWrapperIcon = <Starsharp10 className="starsharp-20" color="#171D1A" opacity="0.56" />,
}: Props): JSX.Element => {
  return (
    <div className={`iconbutton-small ${className}`}>
      <SizeMediumWrapper className="design-component-instance-node" icon={sizeMediumWrapperIcon} size="medium" />
    </div>
  );
};
