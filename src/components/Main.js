import React from "react";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);

  const [searchText, setSearchText] = useState("");

  //fetching api data

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9849815&lng=77.553344&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    // setRestaurantsList(json);
    setRestaurantsList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRes(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return (
    <div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Restaurant"
          className="input-box"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* 
        //search functionality */}
        <button
          className="search-btn"
          onClick={() => {
            let filteredRes = restaurantsList.filter((restaurant) => {
              console.log(restaurant);
              return restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase());
            });
            setFilteredRes(filteredRes);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurants-container">
        {filteredRes.map((restaurant) => {
          // console.log(restaurant.info.id);
          return (
            <Link
              key={restaurant.info.id}
              to={"restaurants/id" + restaurant.info.id}
            >
              
              <RestaurantCard resData={restaurant.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Main;
