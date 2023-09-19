import React from "react";

const Gap = ({ gap }) => {
  return <div className={gap ? `mb-[${gap}]` : "mb-10"}></div>;
};

export default Gap;
