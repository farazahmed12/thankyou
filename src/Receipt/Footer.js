import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className="row py-3">
        <div className="col-md-6">
          <p style={{ fontWeight: "600" }} className="ps-3">
            &copy; 2022 jazaa. All Right Reserved.
          </p>
        </div>
        <div className="col-md-6 d-flex flex-row">
          <p className="py-1 px-1">POWERED BY </p>
          <p
            className="px-2 fw-bold fs-5"
            style={{ borderLeft: "1px solid black" }}
          >
            indolj
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
