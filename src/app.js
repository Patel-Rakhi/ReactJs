import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Home from "./components/Home";
import RestaurantMenu from "./components/RestaurantInfo";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
//import {name} from "./components/Header";

/**  Project
 * Header
 * - Logo
 * -Nav Bar
 * Body
 * -Search
 * -Restraunt container
 * -Rasturant Card
 * Footer
 * -copy reight
 * -Address
 * -Contracts
 *
 */

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
