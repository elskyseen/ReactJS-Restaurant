import React from "react";

const RadioBox = ({ handleIsOpen }) => {
  return (
    <div className="col-span-1 flex gap-2 border-b border-slate-400 py-2">
      <input
        type="radio"
        name="open"
        id="open"
        onChange={(e) => handleIsOpen(e.target.value)}
      />
      <label htmlFor="open" className="capitalize text-blue-900">
        open now
      </label>
    </div>
  );
};

export default RadioBox;
