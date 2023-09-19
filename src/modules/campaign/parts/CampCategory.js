import React from "react";
import { Link } from "react-router-dom";
import { IconFolder } from "components/icons";
import classNames from "utils/classNames";
const CampCategory = ({ text = "Education", className = "text-sm" }) => {
  return (
    <Link
      to="/"
      className={classNames(
        "flex items-baseline font-medium gap-x-3 text-text3 mb-4 ",
        className
      )}
    >
      <IconFolder></IconFolder>
      <span>{text}</span>
    </Link>
  );
};

export default CampCategory;
