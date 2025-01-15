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
            link="https://buy.stripe.com/test_3csaI45Qd1c62A028c"
          />
          <br />
          <ShopItem
            picture="t-maroon.webp"
            description="Maroon Training T-Shirt"
            link="https://buy.stripe.com/test_9AQ3fCa6t2ga8YobIL"
          />
          <br />
          <ShopItem
            picture="custom-jersey.webp"
            description="Custom Jersey"
            link="https://buy.stripe.com/test_8wM5nKbax9ICdeEdQS"
          />
        </div>
      </div>
    </>
  );
}
export default Shop;
