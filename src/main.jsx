import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import Storefront from "./Pages/Storefront.jsx";
import "./master.css";
import Players from "./Pages/Players.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  { path: "/players", element: <Players /> },
  { path: "/about", element: <About /> },
  { path: "contact", element: <Contact /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
