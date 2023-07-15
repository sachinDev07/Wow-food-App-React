import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

import HomePage from "./pages/HomePage.jsx";
import RestaurantPage from "./pages/RestaurantPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
