import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react";

const Rating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars <= 0.5;
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars.push(faStar);
    } else if (i === fullStars && hasHalfStar) {
      stars.push(faStarHalfStroke);
    } else {
      stars.push(starRegular);
    }
  }
  return (
    <div className="flex gap-1">
      {stars.map((star, index) => {
        return <FontAwesomeIcon icon={star} key={index} className="text-blue-900"/>;
      })}
    </div>
  );
};

export default Rating;
