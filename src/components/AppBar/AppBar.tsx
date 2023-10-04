/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { HelpOutlineWrapper } from "../HelpOutlineWrapper";
import { PersonWrapper } from "../PersonWrapper";
import { Settings } from "../Settings";
import { Typography } from "../Typography";
import "./style.css";

interface Props {
  className: any;
  settingsSettingsClassName: any;
}

export const AppBar = ({ className, settingsSettingsClassName }: Props): JSX.Element => {
  return (
    <div className={`app-bar ${className}`}>
      <div className="paper">
        <div className="toolbar">
          <div className="left-side">
            <Typography
              bodyClassName="typography-2"
              className="typography-instance"
              content="Carbon reduction plan overview"
              gutterBottom={false}
              variant="subtitle-1"
            />
          </div>
          <div className="stack">
            <div className="icon-wrapper">
              <div className="icon-2">
                <PersonWrapper className="person-instance" />
              </div>
            </div>
            <div className="icon-button-wrapper">
              <div className="icon-wrapper">
                <div className="icon-2">
                  <Settings className={settingsSettingsClassName} />
                </div>
              </div>
            </div>
            <div className="icon-button-wrapper">
              <div className="icon-wrapper">
                <div className="icon-2">
                  <HelpOutlineWrapper className="help-outline" />
                </div>
              </div>
            </div>
          </div>
          <div className="min-height-3" />
        </div>
      </div>
    </div>
  );
};
