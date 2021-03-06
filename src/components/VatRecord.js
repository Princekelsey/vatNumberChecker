import React, { Component } from "react";
import axios from "axios";
import VatDetailsDisplay from "./VatDetailsDisplay";
import VatNumberInput from "./VatNumberInput";
import Spinner from "./Spinner";

class VatRecord extends Component {
  state = {
    vatNumber: "",
    record: [],
    error: null,
    isLoading: false
  };

  // handle the state and setState as input is been gotten
  handleChange = e => {
    this.setState({ vatNumber: e.target.value });
  };

  // set state on form submit and make axios call
  handleSubmit = e => {
    e.preventDefault();
    // check if input is empty
    if (this.state.vatNumber === "") {
      alert("Please Enter a VAT Number");
    }

    const newVatNumber = this.state.vatNumber;

    // check if there is a vat number to use for axios call
    if (newVatNumber) {
      this.setState({ isLoading: true });
      axios
        .get(`https://vat.erply.com/numbers?vatNumber=${newVatNumber}`)
        .then(res => {
          // set the data gotten from the call to the state
          const newRecord = res.data;
          const updatedRecord = [...this.state.record, newRecord];
          this.setState({ record: updatedRecord, isLoading: false });
        })
        .catch(err => {
          // check for error and  setState of error to response status
          if (err.response) {
            this.setState({ error: err.response.status, isLoading: false });
          }
        });
    }
    this.setState({ error: null, vatNumber: "", record: [] });
  };

  // clear the VAT Details state
  clearRecord = () => {
    this.setState({ record: [], error: null });
  };

  render() {
    const { vatNumber, record, error, isLoading } = this.state;
    let spinner = <Spinner />;
    let display = (
      <VatDetailsDisplay
        record={record}
        clearRecord={this.clearRecord}
        error={error}
      />
    );

    return (
      <div className="mt-5 container ">
        <div className="row">
          <div className="col-md-12 text-center ">
            <h1 className="display-4">VAT CHECKER</h1>
            <p className="lead text-danger">
              Input a VAT number and check its validity and details
            </p>
            <VatNumberInput
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              vatNumber={vatNumber}
            />

            {!isLoading ? display : null}

            {isLoading ? spinner : null}
          </div>
        </div>
      </div>
    );
  }
}

export default VatRecord;
