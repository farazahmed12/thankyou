import React from "react";

const Support = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-9 ps-5 ">
          <h4>Need Support ?</h4>
          <div className="d-flex flex-row">
            <p className="text-muted">Question regarding your order? </p>
            <p className="fw-bold mx-1"> Call us: 0300-0000000</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="d-flex justify-content-end">
            <button className="btn btn-warning mt-1 me-4">
              Place another order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
