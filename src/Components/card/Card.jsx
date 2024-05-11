import React from "react";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const Card = ({ image, title, rate, price, destination, isOpen, id }) => {
  return (
    <div className="col-span-1 lg:col-span-3 min-h-full flex flex-col justify-between gap-3">
      <div className="flex flex-col gap-1">
        <img src={image} alt="restaurant" />
        <h1 className="text-xl lg:text-2xl text-blue-950">{title}</h1>
        <Rating rating={rate} />
        <div className="flex items-center justify-between">
          <p className="uppercase text-slate-400 text-xs lg:text-base">
            {destination} - ${price}
          </p>
          <div className="flex items-center gap-1">
            <span
              className={
                (isOpen ? "bg-teal-400" : "bg-red-500") +
                " block w-2 h-2 rounded-full"
              }
            ></span>
            <p className="uppercase text-slate-400 text-xs lg:text-base">
              {isOpen ? "open now" : "closed"}
            </p>
          </div>
        </div>
      </div>
      <Link
        to={`/detail/${id}`}
        className="bg-blue-950 text-white uppercase w-full py-2 text-center text-xs lg:text-base"
      >
        learn more
      </Link>
    </div>
  );
};

export default Card;
