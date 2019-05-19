import React, { Component } from "react";
import VatDetailsDisplay from "./VatDetailsDisplay";
import VatNumberInput from "./VatNumberInput";

class VatRecord extends Component {
  render() {
    return (
      <div>
        <VatNumberInput />
        <VatDetailsDisplay />
      </div>
    );
  }
}

export default VatRecord;
