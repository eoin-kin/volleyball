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
            link="https://buy.stripe.com/test_fZe01Y6Ec2ivaGI6oq"
          />
          <br />
          <ShopItem
            picture="t-maroon.webp"
            description="Maroon Training T-Shirt"
            link="https://buy.stripe.com/test_28o5migeM6yL7uweUU"
          />
          <br />
          <ShopItem
            picture="custom-jersey.webp"
            description="Custom Jersey"
            link="https://buy.stripe.com/test_aEU3ea3s0aP15mocMN"
          />
        </div>
      </div>
    </>
  );
}
export default Shop;
