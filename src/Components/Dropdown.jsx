import React from "react";

const Dropdown = ({ name, placeholder, options, handleChangeFunction }) => {
  return (
    <select
      name={name}
      id={name}
      className="col-span-1 py-2 px-4 bg-white border-b border-slate-400 capitalize text-blue-900"
      onChange={handleChangeFunction}
    >
      <option hidden selected>
        {placeholder}
      </option>
      {options?.map((option, index) => {
        return (
          <option value={option.value} key={index}>
            {option?.option}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
