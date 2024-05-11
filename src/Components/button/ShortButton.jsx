import React from "react";

const ShortButton = ({ isShortText, handleShortText }) => {
  return (
    <button
      onClick={handleShortText}
      className="capitalize text-sm text-slate-300"
    >
      {isShortText ? "show more" : "show less"}
    </button>
  );
};

export default ShortButton;
