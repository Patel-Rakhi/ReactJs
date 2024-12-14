import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link, useParams } from "react-router";
// import { restaurantList } from "../utils/mockData";

const Body = () => {
  const [restaurantLists, setrestaurantLists] = useState([]);
  const [filteredrestaurantLists, setfilteredrestaurantLists] = useState([]);

  const [searchName, setsearchName] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    setrestaurantLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestaurantLists(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const resId = useParams();

  return restaurantLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="filter">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search.."
            value={searchName}
            className="search"
            onChange={(e) => {
              setsearchName(e.target.value);
            }}
          />
          <button
            type="submit"
            className="searchbtn"
            onClick={() => {
              const filterlist = restaurantLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchName.toLowerCase())
              );
              setfilteredrestaurantLists(filterlist);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          type="button"
          onClick={() => {
            const restaurants = restaurantLists.filter(
              (res) => res.info.avgRating > 4
            );
            //console.log(restaurants);
            setrestaurantLists(restaurants);
          }}
        >
          Filter Top restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredrestaurantLists.map((restaurant) => (
          <Link to={"/restaurants/" + restaurant.info.id} key={restaurant.info.id} style={{ textDecoration: 'none' }}>
            <RestaurantCard restaurantData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
