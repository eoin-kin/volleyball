import React from "react";
import { TopNav } from "../Components/TopNav";
import "./Shop.css";
import ShopItem from "../Components/ShopItem";
import BottomBar from "../Components/BottomBar";
function Shop() {
  return (
    <>
      <TopNav />
      <div className="parent">
        <div className="shop-items">
          <ShopItem
            picture="t-black.webp"
            description="Black Training T-Shirt"
            link="https://buy.stripe.com/fZe02YfcT4aV08g7ss"
          />
          <br />
          <ShopItem
            picture="t-maroon.webp"
            description="Maroon Training T-Shirt"
            link="https://buy.stripe.com/28o9Dyc0HazjaMU145"
          />
          <br />
          <ShopItem
            picture="custom-jersey.webp"
            description="Custom Jersey"
            link="https://buy.stripe.com/8wM02Y0hZ36R5sAaEH"
          />
        </div>
      </div>
    </>
  );
}
export default Shop;
