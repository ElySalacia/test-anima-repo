import React from "react";
import { AppBar } from "../../components/AppBar";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { CustomExpandable } from "../../components/CustomExpandable";
import { DividerHorizontal } from "../../components/DividerHorizontal";
import { Icon } from "../../components/Icon";
import { SalaciaWavePayoff } from "../../components/SalaciaWavePayoff";
import { SpacingHorizontal } from "../../components/SpacingHorizontal";
import { SpacingVertical } from "../../components/SpacingVertical";
import { Typography } from "../../components/Typography";
import { Addfilled } from "../../icons/Addfilled";
import { Expandlessfilled1 } from "../../icons/Expandlessfilled1";
import { Graph } from "../../icons/Graph";
import { Spacedashboardoutlined1 } from "../../icons/Spacedashboardoutlined1";
import "./style.css";

export const Dashboard = (): JSX.Element => {
  return (
    <div className="dashboard">
      <div className="overlap">
        <div className="paper-2">
          <div className="frame-2">
            <div className="frame-3">
              <div className="frame-4">
                <Breadcrumbs
                  className="design-component-instance-node-2"
                  collapsed
                  icon={false}
                  linkDivClassName="breadcrumbs-instance"
                  linkDivClassNameOverride="breadcrumbs-2"
                  linkLink="Carbon reduction plans"
                  linkLink1="Overview"
                  separator="icon"
                />
                <DividerHorizontal
                  className="divider-horizontal-instance"
                  divider="https://c.animaapp.com/tVSum2E8/img/divider.svg"
                />
              </div>
              <div className="frame-5">
                <Typography
                  bodyClassName="typography-3"
                  className="design-component-instance-node-2"
                  content="Set your goals"
                  gutterBottom={false}
                  variant="h-4"
                />
                <Typography
                  className="design-component-instance-node-2"
                  content="Set your CO2 reduction target and create your first reduction pathway."
                  gutterBottom={false}
                  variant="body-1"
                />
              </div>
            </div>
            <div className="frame-6">
              <div className="graph-wrapper">
                <Graph className="graph-instance" />
              </div>
              <SpacingHorizontal className="design-component-instance-node-2" spacing="three" visibility={false} />
              <div className="paper-3">
                <div className="text-wrapper-4">My targets</div>
                <div className="frame-7">
                  <button className="button">
                    <div className="base">
                      <div className="masked-icon">
                        <Addfilled className="icon-left" color="white" />
                      </div>
                      <button className="button-2">Add target</button>
                    </div>
                  </button>
                  <div className="frame-4">
                    <div className="div-wrapper">
                      <div className="text-wrapper-5">My pathways</div>
                    </div>
                    <button className="button">
                      <div className="base">
                        <div className="masked-icon">
                          <Addfilled className="icon-left" color="white" />
                        </div>
                        <button className="button-2">Add target</button>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlap-group">
          <div className="custom-sidenav-paper">
            <SpacingVertical className="design-component-instance-node-2" spacing="three" visibility={false} />
            <div className="frame-8">
              <SpacingHorizontal className="design-component-instance-node-2" spacing="three" visibility={false} />
              <SalaciaWavePayoff className="salacia-wave-payoff-2" />
              <div className="frame-wrapper">
                <div className="frame-9" />
              </div>
            </div>
            <SpacingVertical className="design-component-instance-node-2" spacing="four" visibility={false} />
            <div className="div-2">
              <div className="container-3">
                <div className="icon-instance-wrapper">
                  <Icon
                    className="design-component-instance-node-2"
                    icon={<Spacedashboardoutlined1 className="icon-instance-node" />}
                    size="medium"
                  />
                </div>
                <div className="listitem-text-2">
                  <div className="list-item-3">Dashboard</div>
                </div>
              </div>
            </div>
            <div className="div-2">
              <CustomExpandable
                className="custom-expandable-nav-item"
                isOpen
                override={<Expandlessfilled1 className="icon-instance-node" />}
                text="Climate change"
              />
            </div>
            <div className="list-item-4">
              <div className="container-3">
                <div className="icon-instance-wrapper">
                  <Icon className="design-component-instance-node-2" size="medium" />
                </div>
                <div className="listitem-text-2">
                  <div className="list-item-3">Reduction plans</div>
                </div>
              </div>
            </div>
          </div>
          <AppBar className="app-bar-instance" settingsSettingsClassName="app-bar-2" />
        </div>
      </div>
    </div>
  );
};
