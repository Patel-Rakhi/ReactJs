import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;

  const {
    cloudinaryImageId,
    name,
    areaName,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = restaurantData?.info;

  return (
    <div className="restro-card">
      <div className="card">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt={name}
          className="restro-img"
        />
        <div className="restro-info">
          <h2>{name}</h2>
          <h3>
            {areaName}{" "} {avgRating} Ratings
          </h3>
          <h4>{costForTwo + " " + deliveryTime}</h4>
          <h4>{cuisines.join(",")}</h4>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
