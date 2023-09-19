import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
// import LayoutDashboard from "layout/LayoutDashboard";
import CampaginFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React from "react";
import { v4 } from "uuid";
// import Button from "components/button/Button";
const DashboardPage = () => {
  return (
    <>
      <Heading number={4}> Your Campaign</Heading>
      <CampaginFeature></CampaginFeature>
      <Gap></Gap>
      <Heading> Popular Campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading> Recent Campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </>
  );
};

export default DashboardPage;
