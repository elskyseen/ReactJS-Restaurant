import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { baseImageUrl, baseUrl } from "../utils/variables";
import ReviewCard from "../Components/card/ReviewCard";
import DetailCard from "../Components/card/DetailCard";

const Detail = () => {
  const [restaurant, setRestaurant] = useState({});
  const [isShortText, setIsShortText] = useState(true);
  const { id } = useParams();

  const getDetailRestaurant = async () => {
    try {
      const data = await axios.get(`${baseUrl}/detail/${id}`);
      setRestaurant(data.data.restaurant);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDetailRestaurant();
  }, []);

  const handleShortText = () => {
    setIsShortText(!isShortText);
  };

  return (
    <div className="w-full min-h-max grid grid-cols-1 lg:grid-cols-12 gap-4 py-10 px-2 lg:px-20 relative">
      <div className="col-span-1 lg:col-span-6 flex flex-col gap-3">
        <img
          src={`${baseImageUrl}/small/${restaurant.pictureId}`}
          alt="picture"
          className="w-full"
        />
      </div>
      <div className="col-span-1 lg:col-span-6 flex flex-col gap-2">
        <DetailCard
          restaurant={restaurant}
          isShortText={isShortText}
          handleShortText={handleShortText}
        />
      </div>
      {restaurant.customerReviews &&
        restaurant.customerReviews.map((review, index) => {
          return <ReviewCard review={review} key={index} />;
        })}
    </div>
  );
};

export default Detail;
