import React, { Component } from "react";
import "./style.scss"

class ShoppingCart extends Component {
  render() {
    const currentCurrency = this.props.currentCurrency
    return (
        <ul className="shopping-cart-items">
        {this.props.cart.map((cartItem) => (
          <li className="item" key={cartItem.id}>
            <div className="item-info">
            <h1 className="item-brand">{cartItem.brand}</h1>
            <h2 className="item-title">{cartItem.product_name}</h2>
            <p className="cost">
              {cartItem.price[currentCurrency].currency.symbol}
              {cartItem.price[currentCurrency].amount}
            </p>
            <ul>
              {cartItem.attributes.map(attr => (
                <li key={attr.id}>{attr.name}</li>
              ))}
            </ul>
            </div>
          </li>
        ))}
        </ul>
    );
  }
}

export default ShoppingCart;
