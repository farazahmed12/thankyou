import React from "react";
import ReceiptHead from "./ReceiptHead";
import OrderNumber from "./OrderNumber";
import ReceiptDetails from "./ReceiptDetails";
import Footer from "./Footer.js";
import Support from "./Support";
import "./styles/Receipt.css";

const MainReceipt = () => {
  return (
    <>
      <div className="topbar-container">
        <ReceiptHead />
      </div>
      <main style={{ backgroundColor: "#f2f4f5" }}>
        <div>
          <OrderNumber />
        </div>
        <div>
          <ReceiptDetails />
        </div>
        <Support />
      </main>
      <Footer />
    </>
  );
};
export default MainReceipt;
