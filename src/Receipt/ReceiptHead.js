import React from "react";
import logo from "./logo.jpg";

const ReceiptHead = () => {
  return (
    <>
      {/* // Logo Component */}
      <div className="receipt-head d-flex justify-content-center">
        <div className="logo-medium">
          <img className="img-fluid rounded" src={logo} alt="" />
        </div>
      </div>

      {/* // Thanks Message */}
      <div className="thanks-message d-flex flex-column mb-3 justify-content-center">
        <i class="fa-regular fa-circle-check text-center mb-2"></i>
        <p className="text-muted">
          Thank you,
          <br /> your order has been placed successfully
        </p>
      </div>
    </>
  );
};

export default ReceiptHead;
