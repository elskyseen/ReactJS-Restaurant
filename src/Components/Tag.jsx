import React from "react";

const Tag = ({ tag }) => {
  return (
    <span className="rounded-md p-2 bg-blue-950 text-white text-base">
      {tag.name}
    </span>
  );
};

export default Tag;
