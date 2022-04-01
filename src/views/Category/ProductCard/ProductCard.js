import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss"

export default class ProductCard extends Component {
  render() {
    const data = this.props.data;
    const currentCurrency = this.props.currentCurrency
    return (
      <NavLink to={`/category/${data.category}/product/${data.id}`} onClick={(e) => !data.inStock ? e.preventDefault() : []} >
        <div className={"card" + (!data.inStock ? " no-stock" : "")}>
          <img src={data.gallery[0]} alt="Avatar" className="card-img" />
          <div className="container">
            <h4>{data.brand} {data.name}</h4>
            <p>
              {data.prices[currentCurrency].currency.symbol}
              {data.prices[currentCurrency].amount}
            </p>
          </div>
        </div>
      </NavLink>
    );
  }
}
