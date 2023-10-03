import React from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampProgressionLine from "./parts/CampProgressionLine";
import { useNavigate } from "react-router-dom";

const CampaignFeature = ({ id }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/campaign/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      className="flex lg:flex-row flex-col items-center gap-x-[30px] lg:w-full max-w-[1048px] cursor-pointer hover:shadow-md hover:rounded-2xl"
      onClick={handleClickNavigate}
    >
      <CampImage className="lg:h-[266px] object-cover h-[210px] w-full mb-4 lg:flex-1"></CampImage>
      <div className="lg:flex-1 lg:max-w-[435px]">
        <CampCategory
          text="Architecture"
          className="mb-4 text-sm"
        ></CampCategory>
        <CampTitle className="mb-4 text-xl font-bold">
          Remake - We Make architecture exhibition
        </CampTitle>
        <CampDesc className="mb-6 text-sm">
          Remake - We Make: an exhibition about architecture's social agency in
          the face of urbanisation
        </CampDesc>

        <CampProgressionLine
          visualParts={[
            {
              percentage: "23%",
              color: "primary",
            },
          ]}
        ></CampProgressionLine>
        <div className="flex items-start justify-between gap-x-5">
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
          <CampMeta size="big"></CampMeta>
        </div>
      </div>
    </div>
  );
};

export default CampaignFeature;
