import React from "react";

const ClearButton = () => {
  return (
    <button
      className="border border-slate-300 py-1 px-10 text-slate-300 w-full lg:max-w-max hover:bg-blue-950 hover:text-white"
      onClick={() => window.location.reload()}
    >
      clear all
    </button>
  );
};

export default ClearButton;
