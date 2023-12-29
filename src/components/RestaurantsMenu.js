import React, { useState, useEffect } from "react";
import { MENU_API } from "./Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(`${MENU_API}${resId}`);
        if (response.ok) {
          const data = await response.json();
          setResInfo(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching menu:", error);
        // Handle errors here
      }
    };

    if (resId) {
      fetchMenu();
    }
  }, [resId]);

  const name = resInfo?.data?.cards[0]?.card?.card?.info?.name || "";
  const cuisines = resInfo?.data?.cards[0]?.card?.card?.info?.cuisines || [];
  const costForTwoMessage =
    resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage || "";
  const itemCards =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards || [];

  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards.map((item, index) => (
          <li key={index}>{item.card.info.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
