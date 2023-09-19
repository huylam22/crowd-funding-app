import React from "react";
import classNames from "utils/classNames";
const CampTitle = ({ children, className = "mb-1" }) => {
  return (
    <h3 className={classNames("font-semibold truncate text-text1", className)}>
      {children}
    </h3>
  );
};

export default CampTitle;
