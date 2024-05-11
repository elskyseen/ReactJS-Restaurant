import React from "react";
import Dropdown from "../Components/Dropdown";
import RadioBox from "../Components/RadioBox";
import ClearButton from "../Components/button/ClearButton";

const priceFilters = [
  {
    option: "under $5",
    value: 5,
  },
  {
    option: "under $10",
    value: 10,
  },
  {
    option: "under $20",
    value: 20,
  },
  {
    option: "under $40",
    value: 40,
  },
  {
    option: "under $80",
    value: 80,
  },
  {
    option: "under $160",
    value: 160,
  },
  {
    option: "under $320",
    value: 320,
  },
];

const categorieFilters = [
  {
    option: "Italia",
    value: "italia",
  },
  {
    option: "Bali",
    value: "bali",
  },
  {
    option: "Jawa",
    value: "jawa",
  },
];

const Filter = ({ handleIsOpen, handleFilter }) => {
  return (
    <nav className="border-y-2 border-slate-300 px-2 lg:px-20 py-4 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2">
      <div className="grid grid-cols-2 lg:flex lg:flex-row items-start lg:items-center gap-4">
        <p className="col-span-1">Filter by : </p>
        <RadioBox handleIsOpen={handleIsOpen} />
        <Dropdown
          name="price"
          placeholder="Price"
          options={priceFilters}
          handleChangeFunction={handleFilter}
        />
        <Dropdown
          name="categorie"
          placeholder="Categories"
          options={categorieFilters}
          handleChangeFunction={handleFilter}
        />
      </div>
      <ClearButton />
    </nav>
  );
};

export default Filter;
