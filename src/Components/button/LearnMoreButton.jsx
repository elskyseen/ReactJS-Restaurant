import React from "react";

const LearnMoreButton = ({ handleShowMore, isDisabled }) => {
  return (
    <button
      className={
        (isDisabled
          ? "bg-slate-100 text-slate-300 border-slate-300 cursor-not-allowed"
          : "border-blue-950 text-blue-950 bg-white") +
        " uppercase w-full py-2 border  max-w-max px-24"
      }
      onClick={() => handleShowMore(8)}
      disabled={isDisabled}
    >
      learn more
    </button>
  );
};

export default LearnMoreButton;
