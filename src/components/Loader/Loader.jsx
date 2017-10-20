import React from "react";

// Styles and Images
import loader from "./loader.svg";
import "./Loader.css";

export default () => {
  return (
    <div className="loader-wrap">
      <img src={loader} alt="" />
    </div>
  );
};
