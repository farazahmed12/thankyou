import React from "react";

import "./styles/Receipt.css";

const OrderNumber = () => {
  return (
    <div className="Order-Number container border border-1 rounded-border p-3">
      <div className="row">
        {/*  // Order Summary */}

        <div className="col-md-9">
          <div className="d-flex flex-row">
            <h5 className="p-2 mr-2">Your Order is</h5>
            <button className="btn btn-success btn-sm rounded-pill px-4">
              Accepted
            </button>
          </div>
          <div className="d-flex flex-column">
            <h4 className="p-2">Order Number: 295b31 - 14ad98</h4>
            <p className="px-2 py-0 text-muted">
              Your order has been received, we might call you for confirmation
              or address details if required.
            </p>
          </div>
        </div>

        {/** // Share Button  */}
        <div className="col-md-3 vertical-line text-center pt-4">
          <button className="btn btn-warning btn-sm px-3">
            <i class="fa-solid fa-arrow-up-from-bracket mx-2"></i>
            Share
          </button>
          <p className="py-2 text-muted">Share With your friends!</p>
        </div>
      </div>
    </div>
  );
};

export default OrderNumber;
