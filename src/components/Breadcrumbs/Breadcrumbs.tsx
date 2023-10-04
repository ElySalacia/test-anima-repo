/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Chevronrightfilled3 } from "../../icons/Chevronrightfilled3";
import { Morehorizfilled2 } from "../../icons/Morehorizfilled2";
import { Starsharp10 } from "../../icons/Starsharp10";
import { Icon } from "../Icon";
import { Link } from "../Link";
import "./style.css";

interface Props {
  icon: boolean;
  separator: "text" | "icon";
  collapsed: boolean;
  className: any;
  linkLink: string;
  linkDivClassName: any;
  linkLink1: string;
  linkDivClassNameOverride: any;
}

export const Breadcrumbs = ({
  icon = true,
  separator,
  collapsed,
  className,
  linkLink = "Link",
  linkDivClassName,
  linkLink1 = "Link",
  linkDivClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`breadcrumbs ${className}`}>
      <div className="link-2">
        {icon && (
          <Icon
            className="icon-instance"
            icon={<Starsharp10 className="star-sharp" color="#3359FF" />}
            size="inherit"
          />
        )}

        <Link
          className="link-instance"
          color="inherit"
          divClassName={linkDivClassName}
          link={linkLink}
          stateProp="enabled"
          underline="on-hover"
        />
      </div>
      <div className={`separator separator-${separator}`}>
        {separator === "text" && <div className="text-wrapper-2">/</div>}

        {separator === "icon" && <Chevronrightfilled3 className="chevron-right-filled" />}
      </div>
      <div className={`link-3 collapsed-${collapsed}`}>
        {!collapsed && (
          <>
            <>
              {icon && (
                <Icon
                  className="icon-instance"
                  icon={<Starsharp10 className="star-sharp" color="#3359FF" />}
                  size="inherit"
                />
              )}
            </>
            <Link
              className="link-instance"
              color="inherit"
              divClassName="instance-node"
              link="Link"
              stateProp="enabled"
              underline="on-hover"
            />
          </>
        )}

        {collapsed && (
          <div className="mask">
            <Morehorizfilled2 className="more-horiz-filled" />
          </div>
        )}
      </div>
      <div className={`separator-2 separator-0-${separator}`}>
        {separator === "text" && <div className="text-wrapper-2">/</div>}

        {separator === "icon" && <Chevronrightfilled3 className="chevron-right-filled" />}
      </div>
      <div className="link-2">
        {icon && (
          <Icon
            className="icon-instance"
            icon={<Starsharp10 className="star-sharp" color="#171D1A" />}
            size="inherit"
          />
        )}

        <Link
          className="link-instance"
          color="inherit"
          divClassName={linkDivClassNameOverride}
          link={linkLink1}
          stateProp="enabled"
          underline="on-hover"
        />
      </div>
    </div>
  );
};

Breadcrumbs.propTypes = {
  icon: PropTypes.bool,
  separator: PropTypes.oneOf(["text", "icon"]),
  collapsed: PropTypes.bool,
  linkLink: PropTypes.string,
  linkLink1: PropTypes.string,
};
