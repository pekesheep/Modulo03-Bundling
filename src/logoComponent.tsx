import React from "react";
import classes from "./logoComponentStyles.scss";

export const LogoComponent = () => {
  return (
    <div className={classes.imgContainerStyle}>
      <img src={require("./content/logo.png")} className={classes.imgStyle} />
    </div>
  );
};
