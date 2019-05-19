import React from "react";

const VatDetailsDisplay = props => {
  const { record, clearRecord, error } = props;
  let vatItems;

  record.map(rec => {
    if (rec.Valid) {
      vatItems = (
        <li key={rec.Name} className="list-group-item">
          <h5 className="list-group-item-dark">VAT Number</h5>
          <p>{`${rec.CountryCode} ${rec.VATNumber}`}</p>
          <h5 className="list-group-item-dark">Company Name</h5>
          <p>{rec.Name}</p>
          <h5 className="list-group-item-dark">Address</h5>
          <p>{rec.Address}</p>
        </li>
      );
    } else {
      vatItems = <p className="text-white">VAT Number have no Record </p>;
    }
    return true;
  });
  return (
    <div>
      {record.length ? (
        <div>
          <div className="container bg-dark">
            <div className="row ">
              <div className="col-md text-center ">
                <h3 className="text-center text-white"> VAT DETAILS</h3>
                <ul className="list-group  ">{vatItems}</ul>
              </div>
            </div>{" "}
          </div>
          <button
            type="button"
            className="btn btn-danger mt-3"
            onClick={clearRecord}
          >
            CLEAR
          </button>
        </div>
      ) : null}
      {error ? <p>Invalid VAT Number</p> : null}
    </div>
  );
};

export default VatDetailsDisplay;
