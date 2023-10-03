import React, { useState } from "react";
import CampImage from "./parts/CampImage";
import CampCategory from "./parts/CampCategory";
import CampTitle from "./parts/CampTitle";
import CampDesc from "./parts/CampDesc";
import CampMeta from "./parts/CampMeta";
import CampProgressionLine from "./parts/CampProgressionLine";
import { Button } from "components/button";
import CampViewAuthor from "./parts/CampViewAuthor";
import CampaignSupport from "./CampaignSupport";
import CampaignPerk from "./CampaignPerk";
import Gap from "components/common/Gap";
import CampaignGrid from "./CampaignGrid";
import CampaignItem from "./CampaignItem";
import ModalBackThisProject from "components/modal/ModalBackThisProject";
import useToggleValue from "hooks/useToggleValue";

const CampaignView = () => {
  const { value: modalIsOpen, handleToggleValue: handleToggleModal } =
    useToggleValue();
  return (
    <>
      <div className="h-[140px] rounded-3xl bg-cover bg-no-repeat bg-center bg-opacity-40 flex items-center justify-center text-white font-bold text-[40px] mb-10 gradient-banner">
        <h1>Education</h1>
      </div>
      <div className="flex items-start gap-x-10 w-full max-w-[1066px]">
        <div className="flex-1">
          <CampImage className="h-[398px] mb-8"></CampImage>
          <div className="flex justify-center gap-x-5">
            {Array(4)
              .fill(0)
              .map((item, index) => (
                <img
                  src="https://source.unsplash.com/random"
                  className="w-[89px] h-[70px] object-cover rounded-lg"
                  key={index}
                  alt=""
                />
              ))}
          </div>
        </div>
        <div className="flex-1 max-w-[443px]">
          <CampCategory
            text="Architecture"
            className="mb-4 text-sm"
          ></CampCategory>
          <CampTitle className="mb-4 text-xl font-bold">
            Remake - We Make architecture exhibition
          </CampTitle>
          <CampDesc className="mb-6 text-sm">
            Remake - We Make: an exhibition about architecture's social agency
            in the face of urbanisation
          </CampDesc>
          <CampViewAuthor></CampViewAuthor>
          <CampProgressionLine
            visualParts={[
              {
                percentage: "23%",
                color: "primary",
              },
            ]}
          ></CampProgressionLine>
          <div className="flex items-start justify-between mb-4 gap-x-5">
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
            <CampMeta size="big"></CampMeta>
          </div>
          <Button
            className="w-full text-white bg-primary"
            onClick={handleToggleModal}
          >
            Back this project
          </Button>
        </div>
      </div>
      <div className="flex items-center justify-between mt-[100px] bg-white p-5 border-b border-b-slate-100 mb-6">
        <div className="flex items-center text-sm font-medium gap-x-14 text-text3">
          <span className="cursor-pointer text-secondary">Campaign</span>
        </div>
        <Button onClick={handleToggleModal} className="text-white bg-primary">
          Back this project
        </Button>
        <ModalBackThisProject
          onClick={handleToggleModal}
          modalIsOpen={modalIsOpen}
        ></ModalBackThisProject>
      </div>
      <div className="grid gap-x-[124px] grid-cols-[1.3fr,1fr] mb-[70px]">
        <div className="text-lg font-semibold bg-white">
          <h2>Story</h2>
        </div>
        <div>
          <CampaignSupport></CampaignSupport>
          <Gap gap="60px"></Gap>
          <div className="flex flex-col gap-y-[30px]">
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
            <CampaignPerk></CampaignPerk>
          </div>
        </div>
      </div>
      <h2 className="mb-10 text-xl font-semibold">
        You also maybe interested in
      </h2>
      <CampaignGrid>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
        <CampaignItem></CampaignItem>
      </CampaignGrid>
    </>
  );
};

export default CampaignView;
