import React from "react";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDesc from "./parts/CampDesc";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";
import { useNavigate } from "react-router-dom";

// const a = useContext(AuthContext);
const CampaignItem = ({ id }) => {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    navigate(`/campaign/${id}`);
    window.scrollTo(0, 0);
  };
  return (
    <div
      onClick={handleClickNavigate}
      className="cursor-pointer hover:shadow-md hover:rounded-2xl "
    >
      <CampImage></CampImage>
      <div className="px-5 py-4 ">
        <CampCategory></CampCategory>
        <CampTitle>Powered Kits Learning Boxes</CampTitle>
        <CampDesc>
          {" "}
          Fun, durable and reusable boxes with eco-friendly options.
        </CampDesc>
        <div className="flex items-start justify-between mb-5 gap-x-5">
          <CampMeta></CampMeta>
          <CampMeta amount="173" text="Total backers"></CampMeta>
        </div>
        <CampAuthor></CampAuthor>
      </div>
    </div>
  );
};

export default CampaignItem;
