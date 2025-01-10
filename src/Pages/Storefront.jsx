import React from "react";
import { TopNav } from "../Components/TopNav";
import "./Storefront.css";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
function Storefront() {
  return (
    <>
      <TopNav />
      <div className="parent_store">
        <div className="order-form">
          <h1 style={{ justifySelf: "center", paddingBottom: "1rem" }}>
            Order Form
          </h1>
          <div className="item">
            <Form>
              <Form.Select size="lg">
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Select>
              <br />
              <Form.Select size="lg">
                <option>Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Form>
            <div className="pic_and_title">
              <h1>Black Training T-Shirt</h1>
              <img src="/t-black.webp" />
            </div>
          </div>
          <br />
          <div className="item">
            <Form>
              <Form.Select size="lg">
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Select>
              <br />
              <Form.Select size="lg">
                <option>Quantity</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </Form.Select>
            </Form>
            <div className="pic_and_title">
              <h1>Maroon Training T-Shirt</h1>
              <img src="/t-maroon.webp" />
            </div>
          </div>
          <br />
          <div className="item">
            <Form>
              <Form.Select size="lg">
                <option>Size</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </Form.Select>
              <br />
            </Form>
            <div className="pic_and_title">
              <h1>Custom Jersey</h1>
              <img src="/custom-jersey.webp" />
            </div>
          </div>
          <br />
          <div className="d-grid gap-2">
            <Button variant="dark" size="lg">
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Storefront;
