import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="rounded-md border-2 border-blue-950 p-8 col-span-1 lg:col-span-6">
      <div className="flex justify-between">
        <h1 className="text-2xl text-blue-950">{review.name}</h1>
        <span className="text-slate-400 text-sm">{review.date}</span>
      </div>
      <p className="text-slate-600 text-base max-w-[70%]">{review.review}</p>
    </div>
  );
};

export default ReviewCard;
