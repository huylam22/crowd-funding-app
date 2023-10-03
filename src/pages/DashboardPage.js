import Gap from "components/common/Gap";
import Heading from "components/common/Heading";
import useAxiosPrivate from "hooks/useAxiosPrivate";
// import LayoutDashboard from "layout/LayoutDashboard";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import CampaignItem from "modules/campaign/CampaignItem";
import React, { useEffect } from "react";
import { v4 } from "uuid";
// import Button from "components/button/Button";
const DashboardPage = () => {
  const axiosPrivate = useAxiosPrivate();
  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const response = await axiosPrivate.get("/api/campaigns");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCampaigns();
  }, []);
  return (
    <>
      <Heading number={4}> Your Campaign</Heading>
      <CampaignFeature id={3}></CampaignFeature>
      <Gap></Gap>
      <Heading> Popular Campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem id={index} key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
      <Gap></Gap>
      <Heading> Recent Campaigns</Heading>
      <CampaignGrid>
        {Array(4)
          .fill(0)
          .map((item, index) => (
            <CampaignItem id={index} key={v4()}></CampaignItem>
          ))}
      </CampaignGrid>
    </>
  );
};

export default DashboardPage;
