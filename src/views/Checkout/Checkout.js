import React, { Component } from 'react'
import ShoppingCart from '../../components/ShoppingCart'

export default class Checkout extends Component {
  render() {
    return (
      <div className='checkout'>
        <h2 className='checkout-title'>Cart</h2>
      <ShoppingCart cart={this.props.cart} currentCurrency={this.props.currentCurrency} />
      </div>
    )
  }
}
