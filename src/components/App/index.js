import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header";
import Category from "../../views/Category";
import Product from "../../views/Product";
import Checkout from "../../views/Checkout/Checkout";
import NotFount from "../../views/NotFound/NotFount";

class App extends Component {
  state = {
    currentCurrency: 0,
    cart: [],
  };

  // I can use indexOf() instead of switch to get the index number of the currency which will be helpful when adding new currencies.
  changeCurrencyHandler = (e) => {
    const currency = e.target.value;
    switch (currency) {
      case "USD":
        this.setState({ currentCurrency: 0 });
        break;
      case "GBP":
        this.setState({ currentCurrency: 1 });
        break;
      case "AUD":
        this.setState({ currentCurrency: 2 });
        break;
      case "JPY":
        this.setState({ currentCurrency: 3 });
        break;
      case "RUB":
        this.setState({ currentCurrency: 4 });
        break;
      default:
        this.setState({ currentCurrency: 0 });
    }
  };

  addToCartHandler = (productData, selectedAttributes) => {
    const cartItems = this.state.cart;
    const productExist = cartItems.find((item) => item.id === productData.id);
    if (productExist) {
      this.setState({
        cart:
          cartItems.map(
            item => item.id === productData.id
            ? {...item, quantity: item.quantity + 1, attributes: selectedAttributes}
            : item
            )

      })
    } else {
      this.setState({
        cart: [
          ...cartItems,
          {
            id: productData.id,
            product_name: productData.name,
            brand: productData.brand,
            quantity: 1,
            selectedAttributes: selectedAttributes,
            attributes: productData.attributes,
            price: productData.prices
          },
        ],
      });
    }
  };

  render() {
    console.log(this.state);
    const currentCurrency = this.state.currentCurrency;
    return (
      <div className="Container">
        <Router>
          <Header changeCurrencyHandler={this.changeCurrencyHandler} currentCurrency={currentCurrency} cart={this.state.cart} />
          <Routes>
            <Route path="/" element={<Navigate to="/category/all" />} />
            <Route path="/category/:categoryId" element={<Category currentCurrency={currentCurrency} />} />
            <Route path="/category/:categoryId/product/:id" element={<Product addToCartHandler={this.addToCartHandler} currentCurrency={currentCurrency} />} />
            <Route path="/checkout" element={<Checkout cart={this.state.cart} currentCurrency={currentCurrency} />} />
            <Route path="*" element={<NotFount />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
