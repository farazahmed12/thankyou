import React from "react";
import Product from "./Product";

const ReceiptDetails = () => {
  return (
    <div className="Receipt-Details container my-3 border border-1 rounded-border p-3">
      <div className="row py-2 border-bottom">
        {/** Order Information Details */}
        <div className="col-md-8 pe-4">
          <div className="d-flex flex-row border-bottom">
            <i className="fa-solid fa-location-dot "></i>
            <h4 className="mx-2">Order Information</h4>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-auto p-2 text-muted">Delivery Address</div>
            <div className="p-2 fw-bold">Test order Karachi ,Near</div>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-auto p-2 text-muted">Type</div>
            <div className="p-2 fw-bold">Delivery</div>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-auto p-2 text-muted">Phone</div>
            <div className="p-2 fw-bold">0300-0000000</div>
          </div>
          <div className="d-flex border-bottom">
            <div className="me-auto p-2 text-muted">Order Date</div>
            <div className="p-2 fw-bold">November 15, 2022, 11:33Am</div>
          </div>
          <div className="d-flex ">
            <div className="me-auto p-2 text-muted">Payment Type</div>
            <div className="p-2 fw-bold">Cash</div>
          </div>
        </div>

        {/** // Payment Details Section */}
        <div className="col-md-4 vertical-line ps-4">
          <div className="d-flex flex-row border-bottom">
            <i className="fa-solid fa-credit-card"></i>
            <h4 className="mx-2">Payment</h4>
          </div>

          <div className="d-flex ">
            <div className="me-auto p-1 ps-0 text-muted">Sub Total</div>
            <div className="p-1 fw-bold">Rs. 1200</div>
          </div>
          <div className="d-flex ">
            <div className="me-auto p-1 ps-0 text-muted">Delivery Fees</div>
            <div className="p-1 fw-bold">Rs. 0</div>
          </div>
          <div className="d-flex ">
            <div className="me-auto p-1 ps-0 text-muted">Tax 0.00%</div>
            <div className="p-1 fw-bold">Rs. 0</div>
          </div>
          <div className="d-flex border-bottom">
            <h4 className="me-auto p-1 ps-0 fw-bold ">Total</h4>
            <h4 className="p-1 fw-bold">Rs. 0</h4>
          </div>

          {/** // Print Section */}
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex flex-column">
                <p className="me-auto mb-0 ">Payment Status</p>
                <p className=" fw-bold">Pending</p>
              </div>
              <div className="d-flex flex-column">
                <p className="me-auto mb-0 ">Payment Status</p>
                <p className=" fw-bold">Pending</p>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="d-flex flex-row">
                <button className="print_btn btn btn-warning btn-sm px-3 ms-auto">
                  <i class="fa-solid fa-print"></i> Print
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Product />
    </div>
  );
};

export default ReceiptDetails;
