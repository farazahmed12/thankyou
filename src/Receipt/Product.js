import React from "react";

import "./styles/Receipt.css";

const Product = () => {
  return (
    <div className="my-3">
      {/** Products Listing  */}
      <div className="d-flex flex-row ">
        <i className="fa-solid fa-cart-shopping"></i>
        <h4 className="mx-2">Payment</h4>
      </div>
      <div class="d-flex justify-content-between my-2 rounded product_heading">
        <p className="text-dark p-2">Name</p>
        <p className="text-dark p-2 ms-5">Quantity</p>
        <p className="text-dark p-2">Price</p>
      </div>
      <div class="d-flex justify-content-between my-2 rounded border-bottom">
        <p className="text-dark p-2 fw-bold">Miswak Pack of 12</p>
        <p className="text-dark p-2 fw-bold">2</p>
        <p className="text-dark p-2 fw-bold">Rs. 534</p>
      </div>
      <div class="d-flex justify-content-between my-2 rounded border-bottom">
        <p className="text-dark p-2 fw-bold">Dal Moong 200gm</p>
        <p className="text-dark p-2 fw-bold">5</p>
        <p className="text-dark p-2 fw-bold">Rs. 875</p>
      </div>
    </div>
  );
};

export default Product;
