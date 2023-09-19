import { defaultImage } from "constants/global";
import React from "react";
import CampTitle from "./parts/CampTitle";
import { Button } from "components/button";

const CampaignPerk = ({ showButton = false }) => {
  return (
    <div>
      <div className="bg-white shadow-1 rounded-xl">
        <img
          src={defaultImage}
          alt=""
          className="h-[232px] object-cover rounded-xl w-full"
        />
        <div className="p-5">
          <span className="inline-block px-3 py-1 mb-5 text-xs font-medium text-white rounded-sm bg-secondary bg-opacity-80">
            Featured
          </span>
          <CampTitle className="mb-2 text-xl font-semibold">
            Special One Camera
          </CampTitle>
          <div className="flex items-center mb-4 gap-x-3">
            <span className="text-xl font-bold text-1">$2,724 USD</span>
            <span className="font-medium line-through text-md text-error">
              $1,504 USD
            </span>
            <span className="font-medium text-md text-error">(12% OFF)</span>
          </div>
          <div className="flex flex-col mb-4 gap-y-1">
            <strong>Estimated Shipping</strong>
            <span className="text-text2">October 2022 </span>
          </div>
          <p className="mb-4 text-text2">
            <strong className="text-text1">05 </strong>
            Claimed
          </p>
          <p className="text-text2">
            Ships to: <strong className="text-text2">Worldwide</strong>
          </p>
        </div>
      </div>
      {showButton && (
        <div className="mt-6">
          <Button className="w-full text-white bg-secondary"></Button>
        </div>
      )}
    </div>
  );
};

export default CampaignPerk;
