import React from "react";
import Rating from "../Rating";
import { Link } from "react-router-dom";
import Tag from "../Tag";
import Title from "../Title";
import Description from "../Description";

const DetailCard = ({ restaurant, handleShortText, isShortText }) => {
  return (
    <>
      <div className="flex gap-2">
        {restaurant.categories?.map((categorie, index) => {
          return <Tag tag={categorie} key={index} />;
        })}
      </div>
      <Title title={restaurant.name} />
      <Description
        description={restaurant.description}
        isShortText={isShortText}
        handleShortText={handleShortText}
      />
      <Rating rating={restaurant.rating} />
      <p>
        {restaurant.city} - {restaurant.address}
      </p>
      <Link
        to={"/"}
        className="text-white bg-blue-950 p-2 text-center uppercase border-2 hover:border-blue-950 hover:text-blue-950 hover:bg-white"
      >
        back
      </Link>
    </>
  );
};

export default DetailCard;
