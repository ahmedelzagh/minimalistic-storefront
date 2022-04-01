import React, { Component } from "react";
import Attributes from "./Attributes";

export default class ProductDec extends Component {
  state = {
    selectedAttributes: [],
  };

  setAttribute = (e) => {
    e.preventDefault();
    const selectedAttrs = this.state.selectedAttributes;
    const targtedAttrId = e.target.parentElement.parentElement.id;
    const attrExist = selectedAttrs.find((attr) => attr.id === targtedAttrId);
    if (attrExist) {
      this.setState({
        selectedAttributes: selectedAttrs.map((attr) => (attr.id === targtedAttrId ? { ...attr, selected: e.target.value } : attr)),
      });
    } else {
      this.setState({
        selectedAttributes: [
          ...selectedAttrs,
          {
            id: targtedAttrId,
            selected: e.target.value,
          },
        ],
      });
    }
  };

  render() {
    const productData = this.props.data.product;
    const currentCurrency = this.props.currentCurrency;
    const selectedAttributes = this.state.selectedAttributes;

    return (
      <div className="card-container">
        <div className="product-images">
          {productData.gallery.map((item) => (
            <img src={item} alt="item-img" key={item} />
          ))}
        </div>
        <div className="product-preview">
          <img src={productData.gallery[0]} alt={productData.name} />
        </div>
        <div className="product-info">
          <h1 className="brand">{productData.brand}</h1>
          <h2 className="product-name">{productData.name}</h2>
          <Attributes attributes={productData.attributes} setAttribute={this.setAttribute} />
          <div className="price-info">
            <p className="price-tag">PRICE:</p>
            <p className="cost">
              {productData.prices[currentCurrency].currency.symbol}
              {productData.prices[currentCurrency].amount}
            </p>
          </div>
          <button onClick={() => this.props.addToCartHandler(productData, selectedAttributes)} disabled={productData.attributes.length !== selectedAttributes.length}>ADD TO CART</button>
          <div className="product-description" dangerouslySetInnerHTML={{ __html: productData.description }} />
        </div>
      </div>
    );
  }
}
