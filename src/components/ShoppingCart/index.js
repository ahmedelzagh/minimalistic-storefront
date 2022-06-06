import React, { Component } from "react";
import "./style.scss";

class ShoppingCart extends Component {
  // create a loop that iterates over the cart array and renders a list item for each item in the cart
  // each list item should contain the following:
  // - the item's brand
  // - the item's name
  // - the item's price
  // - the item's attributes
  // - a button that when clicked will remove the item from the cart

  render() {
    const currentCurrency = this.props.currentCurrency;
    const cart = this.props.cart;
    return (
      <ul className="grid-container shopping-cart-items">
        {cart.map((cartItem) => (
          <li className="grid-row item" key={cartItem.id}>
            <div className="grid-container item-info">
              <div className="grid-col">
                <h1 className="item-brand">{cartItem.brand}</h1>
                <h2 className="item-title">{cartItem.product_name}</h2>
                <p className="cost">
                  {cartItem.price[currentCurrency].currency.symbol}
                  {cartItem.price[currentCurrency].amount}
                </p>
                <div className="item-attributes">
                  {cartItem.attributes.map((attribute, index) => (
                    <div key={attribute.id}>
                      <p>{attribute.name}</p>
                      <ul className="attribute-items-list">
                        {attribute.items.map((item) =>
                          item.value === cartItem.selectedAttributes[index].selected ? (
                            <li key={item.value} className="attribute-item selected">
                              {cartItem.selectedAttributes[index].selected}
                            </li>
                          ) : (
                            <li key={item.value} className="attribute-item">
                              {item.value}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid-col">
                <img className="product-img" src={cartItem.preview} alt={`${cartItem.product_name} preview`} />
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default ShoppingCart;
