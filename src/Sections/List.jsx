import React from "react";
import { baseImageUrl } from "../utils/variables";
import Card from "../Components/card/Card";
import LearnMoreButton from "../Components/button/LearnMoreButton";

const List = ({ restaurants, handleShowMore, filter, currentShow }) => {
  return (
    <section className="px-2 lg:px-20 pb-20">
      <h1 className="text-xl lg:text-3xl font-medium capitalize pt-10 pb-6">
        all restaurant
      </h1>
      <div className="grid gris-cols-1 lg:grid-cols-12 gap-4 lg:gap-x-10 lg:gap-y-16 mb-14">
        {restaurants.map((restaurant, index) => {
          return (
            <Card
              image={`${baseImageUrl}/medium/${restaurant.pictureId}`}
              title={restaurant.name}
              rate={restaurant.rating}
              price={restaurant.price}
              isOpen={restaurant.isOpen}
              destination={restaurant.city}
              id={restaurant.id}
              key={index}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        {Object.keys(filter).length === 0 && (
          <LearnMoreButton
            handleShowMore={handleShowMore}
            isDisabled={currentShow > restaurants.length}
          />
        )}
      </div>
    </section>
  );
};

export default List;
