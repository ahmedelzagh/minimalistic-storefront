// 3rd party imports
import { Component } from "react";
import {NavLink} from "react-router-dom"
// internal imports
import "./styles.scss";
import logo from "./../../assets/img/a-logo.svg";
import shopcart from "./../../assets/img/Empty-Cart.svg";
import CategoriesList from "./CategoriesList"
import CurrenciesList from "./CurrenciesList";


class Header extends Component {
  render() {
    const {changeCurrencyHandler, currentCurrency, cart} = this.props;
    return (
      <header className="header">
        <CategoriesList />
        <NavLink className="navLink" to="/">
        <img className="logo" src={logo} alt="logo" />
        </NavLink>
        <div className="actions">
          <CurrenciesList changeCurrencyHandler={changeCurrencyHandler} currentCurrency={currentCurrency} />
          <span className="shop-cart" value={cart.length}>
          <NavLink className="navLink" to="/checkout">
          <img src={shopcart} alt='shopcart' />
          </NavLink>
          </span>
        </div>
      </header>
    );
  }
}

export default Header;
