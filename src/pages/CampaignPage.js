import { Button } from "components/button";
import Heading from "components/common/Heading";
import CampaignFeature from "modules/campaign/CampaignFeature";
import CampaignGrid from "modules/campaign/CampaignGrid";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CampaignPage = () => {
  const [searchParams] = useSearchParams(false);
  const [hasSearch, setHasSearch] = useState(false);

  useEffect(() => {
    if (searchParams.has("query")) {
      const query = searchParams.get("query");
      setHasSearch(true);
      // performSearch(query); // Call the API with the query parameter
    }
  }, [searchParams]);

  return (
    <>
      <div className="flex items-center justify-between px-10 py-8 mb-10 bg-white rounded-3xl">
        <div className="flex items-start gap-x-6">
          <div className="flex items-center justify-center text-white rounded-full w-14 h-14 bg-secondary bg-opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
          <div className="flex-1">
            <h1 className="text-[22px] font-semibold mb-2">
              Create Your Campaign
            </h1>
            <p className="text-sm text-text3">
              Jump right into our editor and create your first Virtue campaign!
            </p>
            <a href="#" className="text-sm text-primary">
              Need any help? Learn More...
            </a>
          </div>
        </div>
        <Button
          type="button"
          kind="ghost"
          className="px-8"
          href="/start-campaign"
        >
          Create Campaign
        </Button>
      </div>
      <Heading number={4}> Your Campaign</Heading>
      <CampaignGrid type="secondary">
        {hasSearch ? (
          <h3>co query truyen vao</h3>
        ) : (
          <>
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
            <CampaignFeature></CampaignFeature>
          </>
        )}
        <div className="relative mt-10 text-center">
          <Button kind="ghost" className="px-8 mx-auto">
            See More+
          </Button>
        </div>
      </CampaignGrid>
    </>
  );
};

export default CampaignPage;
