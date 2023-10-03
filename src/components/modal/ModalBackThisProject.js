import React from "react";
import CampaignPerk from "modules/campaign/CampaignPerk";
import { Button } from "components/button";
import ReactModal from "react-modal";
import { motion } from "framer-motion";
const ModalBackThisProject = ({ modalIsOpen, onClick }) => {
  const customStyles = {
    content: {},
  };

  return (
    <motion.div
      className="flex-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ReactModal
        style={customStyles}
        isOpen={modalIsOpen}
        overlayClassName={`modal-overlay fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center `}
        className="moda-content w-full max-w-[521px] bg-white rounded-2xl outline-none p-10 relative max-h-[90vh] overflow-y-auto scroll-hidden"
      >
        <button
          className="absolute w-11 h-11 flex items-center justify-center z-10 cursor-pointer right-10 top-[10px]"
          onClick={onClick}
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="font-bold text-[25px] mb-10 text-center mt-10">
          Back this project
        </h2>
        <p className="mb-3 text-sm">Enter the contribute amount</p>
        <input
          type="text"
          name="amount"
          placeholder="$10"
          className="px-5 py-2 text-lg font-medium border rounded-md border-strock"
        />
        <p className="my-5 text-text3">
          Contribution are not associatied with perks
        </p>
        <Button className="px-10 text-white bg-primary">Continue</Button>
        <div className="mb-[60px]"></div>
        <CampaignPerk></CampaignPerk>
      </ReactModal>
    </motion.div>
  );
};

export default ModalBackThisProject;
