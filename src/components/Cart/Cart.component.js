import React from "react";
import StyledCart from "./Cart.style";
import cartImage from "./../../assets/images/cart.svg";

class Cart extends React.Component {
  render() {
    return (
      <StyledCart>
        <img src={cartImage} alt="Cart got to cart" />
      </StyledCart>
    );
  }
}

export default Cart;
