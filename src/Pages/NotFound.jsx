import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full min-h-dvh flex justify-center items-center gap-3 flex-col">
      <h1 className="text-9xl text-blue-900 font-extrabold">404</h1>
      <p className="capitalize text-4xl text-blue-800">not found</p>
      <Link
        to={"/"}
        className="rounded-md bg-blue-300 hover:bg-blue-600 text-white text-base uppercase py-2 px-8"
      >
        back to home
      </Link>
    </div>
  );
};

export default NotFound;
