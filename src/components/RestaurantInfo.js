
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [restaurantInfo, setrestaurantInfo] = useState(null);
  const { resId } = useParams();
  const fetchMenusData = async () => {
    try {
      const data = await fetch(MENU_API_URL+resId);
      const json = await data.json();

      setrestaurantInfo(json?.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchMenusData();
  }, []);

  const {
    cloudinaryImageId,
    name,
    avgRatingString,
    totalRatingsString,
    cuisines,
    locality,
    sla,
  } = restaurantInfo?.cards[2]?.card?.card?.info || {};

  const cards =
    restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  let itemCards =
    cards.find((c) => c?.card?.card?.itemCards)?.card?.card?.itemCards || [];

    console.log(itemCards);
  return (
    <div className="rest-menu">
      <div className="restMenu-head">
        <h1>
          {name}-{locality}
        </h1>
        <h3>{avgRatingString} Rating - 250$ for two</h3>
        <h3>{cuisines}</h3>
      </div>
      <div className="restMenu-offer">
        <h3>Buy 1 Get 1</h3>
        <h3>50% off on 250</h3>
      </div>
      <div className="restMenu-card">
        <ul>
          {itemCards.map((item) =>     
          <li>{item?.card?.info?.name} Serve for 2 in ({item?.card?.info?.price/100})</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
