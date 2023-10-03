import React, { useEffect, useState } from "react";

const CampProgressionLine = ({
  label,
  backgroundColor = "#EFEFEF",
  // expected format for visual parts
  visualParts = [
    {
      percentage: "0%",
      color: "primary",
    },
  ],
}) => {
  // Reference: https://codesandbox.io/s/react-animated-progress-bar-rh3rz
  const [widths, setWidths] = useState(
    visualParts.map(() => {
      return 0;
    })
  );
  useEffect(() => {
    requestAnimationFrame(() => {
      // Set a new array of percentage widths based on the props
      setWidths(
        visualParts.map((item) => {
          return item.percentage;
        })
      );
    });
  }, [visualParts]);
  return (
    <>
      {/* <div className="w-full rounded-full bg-[#EFEFEF] h-[5px] mb-6"> ****First Design**** </div>
          <div className="w-2/4 h-full rounded-full bg-primary"></div>
        </div> */}
      <div className="">{label}</div>
      <div
        className={`h-[5px] rounded-full flex my-6 w-full mx-0 bg-[${backgroundColor}]`}
      >
        {visualParts.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                width: widths[index],
              }}
              className={`rounded-full progressVisualPart bg-${item.color}`}
            />
          );
        })}
      </div>
    </>
  );
};

export default CampProgressionLine;
