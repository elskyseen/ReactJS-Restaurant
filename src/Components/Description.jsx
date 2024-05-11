import React from "react";
import { shortText } from "../utils/shortText";
import ShortButton from "./button/ShortButton";

const Description = ({ description, isShortText, handleShortText }) => {
  return (
    <p>
      {description && isShortText
        ? shortText(description) + "..."
        : description}
      <ShortButton
        isShortText={isShortText}
        handleShortText={handleShortText}
      />
    </p>
  );
};

export default Description;
