import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({ className = "h-[158px]", image = defaultImage }) => {
  return (
    <div className={className}>
      <img
        src={image}
        alt=""
        className="object-cover w-full h-full rounded-2xl"
      />
      {/* <source
        src="https://cdn.dribbble.com/userupload/4028264/file/original-dc90fa5c9b2aee6911e977d98c69addc.mp4"
        className="object-cover w-full h-full rounded-2xl"
        type="video/mp4"
      /> */}
    </div>
  );
};

export default CampImage;
