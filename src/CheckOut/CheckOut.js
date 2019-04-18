import "../css/CheckOut.css";
import React, { Component } from "react";

import AppBar from "../components/AppBar";
import ListBuilder from "./ListBuilder";

const products = [
  {
    quantity: 4,
    description: "Product A",
    unitPrice: 4.0,
    lineTotal: 16.0
  },
  {
    quantity: 5,
    description: "Product B",
    unitPrice: 7.0,
    lineTotal: 35.0
  }
];

class CheckOut extends Component {
  render() {
    return (
      <div>
        <AppBar />
        <div className="productList">
          <ListBuilder products={products} />
        </div>
      </div>
    );
  }
}

export default CheckOut;
