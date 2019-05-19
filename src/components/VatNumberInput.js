import React from "react";

const VatNumberInput = props => {
  const { handleChange, handleSubmit, vatNumber } = props;
  return (
    <div>
      {" "}
      <div className="row justify-content-center">
        <div className="col-sm-6 ">
          <div className="card card-body my-3  ">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <div className="input-group-prepend">
                  <div className="input-group-text bg-dark text-white">
                    <i className="fas fa-list-ol" />
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Enter VAT Number including Country (e.g. EE100247019)"
                  value={vatNumber}
                  onChange={handleChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark btn-sm btn-block mt-3 "
              >
                CHECK
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VatNumberInput;
