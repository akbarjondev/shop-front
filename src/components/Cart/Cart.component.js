import React from "react";
import StyledCart from "./Cart.style";
import cartImage from "./../../assets/images/cart.svg";
import { Link } from "react-router-dom";
// import {}

class Cart extends React.Component {
  render() {
    return (
      <StyledCart>
        <div className="cart__wrapper">
          <img src={cartImage} alt="Cart, go to cart" />
          <div className="cart__dropdown">
            <h3 className="cart__title">
              My bag, <span className="cart__count">2 items</span>
            </h3>
            <div className="infos cart__items">
              <div className="info">
                <div className="info__left">
                  <h4 className="info__title">Apollo Running short</h4>
                  <div className="info__price">$22</div>
                  <div className="info__attributes">
                    <div className="info__attribute">Salom</div>
                    <div className="info__attribute info__attribute--inactive">
                      M
                    </div>
                  </div>
                </div>
                <div className="info__middle">
                  <button className="info__rugulator info__attribute">+</button>
                  <div className="info__counter">1</div>
                  <button className="info__rugulator info__attribute">-</button>
                </div>
                <img
                  className="info__image"
                  src="https://picsum.photos/105/137"
                  alt="product title"
                  width={105}
                  height={137}
                />
              </div>
              <div className="info">
                <div className="info__left">
                  <h4 className="info__title">Apollo Running short</h4>
                  <div className="info__price">$22</div>
                  <div className="info__attributes">
                    <div className="info__attribute">Salom</div>
                    <div className="info__attribute info__attribute--inactive">
                      M
                    </div>
                  </div>
                </div>
                <div className="info__middle">
                  <button className="info__rugulator info__attribute">+</button>
                  <div className="info__counter">1</div>
                  <button className="info__rugulator info__attribute">-</button>
                </div>
                <img
                  className="info__image"
                  src="https://picsum.photos/105/137"
                  alt="product title"
                  width={105}
                  height={137}
                />
              </div>
            </div>
            {/* end of info list */}
            <div className="info__total">
              <div className="info__total-left">Total</div>
              <div className="info__total-right">$100</div>
            </div>

            <div className="info__footer">
              <Link to="/bag" className="info__button">
                View bag
              </Link>
              <button className="info__button">Check out</button>
            </div>
          </div>
          {/* end of cart__dropdown */}
        </div>
        <div className="cart__curtain"></div>
      </StyledCart>
    );
  }
}

export default Cart;
