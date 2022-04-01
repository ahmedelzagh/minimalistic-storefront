import React, { Component } from "react";
import ProductCard from "./ProductCard/ProductCard";
import "./styles.scss";

export default class Category extends Component {
  render() {
    const data = this.props.data.category;
    return (
      <div className="category-page">
        <h2>{data.name}</h2>
        <ul>
          {data.products.map((product) => (
            <ProductCard key={product.id} data={product} currentCurrency={this.props.currentCurrency}/>
          ))}
        </ul>
      </div>
    );
  }
}
