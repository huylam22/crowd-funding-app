import React from "react";

const CampaignGrid = ({ children, type = "default" }) => {
  if (type !== "default")
    return <div className="grid grid-cols-1 gap-y-10">{children}</div>;

  return (
    <div className="grid grid-cols-1 lg:grid lg:grid-cols-4 lg:gap-x-7 gap-y-10">
      {children}
    </div>
  );
};

export default CampaignGrid;
