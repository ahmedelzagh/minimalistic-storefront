import { Component } from "react";

class Currencies extends Component {

  render() {
    const currencies = this.props.data.currencies;

    return (
      <select onChange={this.props.changeCurrencyHandler}>
        {currencies.map((currency) => (
          <option key={currency.label} value={currency.label}>
            {currency.symbol}
            {currency.label}
          </option>
        ))}
      </select>
    );
  }
}

export default Currencies;
