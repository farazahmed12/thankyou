import React from "react";
import ReceiptHead from "./ReceiptHead";
import OrderNumber from "./OrderNumber";
import ReceiptDetails from "./ReceiptDetails";
import "./styles/Receipt.css";

const MainReceipt = () => {
  return (
    <>
      <div className="topbar-container">
        <ReceiptHead />
      </div>
      <div>
        <OrderNumber />
      </div>
      <div>
        <ReceiptDetails />
      </div>
    </>
  );
};
export default MainReceipt;
