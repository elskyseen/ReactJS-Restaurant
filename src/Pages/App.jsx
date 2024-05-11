import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Sections/Header";
import Filter from "../Sections/Filter";
import List from "../Sections/List";
import { baseUrl } from "../utils/variables";

const App = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [currentShow, setCurrentShow] = useState(8);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({});

  const handleShowMore = (moreShow) => {
    if (currentShow > restaurants.length) return;
    setCurrentShow(currentShow + moreShow);
  };

  const getRestaurants = async () => {
    const categories = ["italia", "bali", "jawa"];
    const restaurants = await axios.get(`${baseUrl}/list`);
    const data = restaurants.data.restaurants.slice(0, currentShow);
    const updatedData = data.map((item, index) => {
      return {
        ...item,
        categorie: categories[index % 3],
        price: (index + 1) ** 2,
        isOpen: index % 2 ? true : false,
      };
    });
    setRestaurants(updatedData);
  };

  useEffect(() => {
    if (getRestaurants) {
      getRestaurants();
    }
  }, []);

  useEffect(() => {
    if (getRestaurants && currentShow) {
      getRestaurants();
    }
  }, [currentShow]);

  useEffect(() => {
    if (restaurants && isOpen) {
      setRestaurants(
        restaurants.filter((restaurant) => {
          return restaurant.isOpen === true;
        })
      );
    }
  }, [isOpen]);

  useEffect(() => {
    if (restaurants && filters) {
      setRestaurants(
        restaurants.filter((restaurant) => {
          return (
            restaurant.price <= parseInt(filters.price) ||
            restaurant.categorie === filters.categorie?.toLowerCase()
          );
        })
      );
    }
  }, [filters]);

  const handleIsOpen = (isOpenValue) => {
    setIsOpen(isOpenValue);
  };

  const handleFilters = (e) => {
    const getKey = e.target.name;
    const getValue = e.target.value;
    setFilters({
      ...filters,
      [getKey]: getValue,
    });
  };

  return (
    <>
      <Header />
      <Filter handleIsOpen={handleIsOpen} handleFilter={handleFilters} />
      <List
        restaurants={restaurants}
        handleShowMore={handleShowMore}
        filter={filters}
        currentShow={currentShow}
      />
    </>
  );
};

export default App;
