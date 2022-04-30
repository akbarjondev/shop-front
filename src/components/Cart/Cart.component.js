import React from "react";
import StyledCart from "./Cart.style";
import cartImage from "./../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { aCheckOut } from "./../../store/common.actions";
import CartItem from "../CartItem/CartItem.component";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpen: false,
    };

    this.refCartButton = React.createRef();
    this.clickOutside = this.clickOutside.bind(this);
    this.cartHandler = this.cartHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.clickOutside);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.clickOutside);
  }

  clickOutside(event) {
    if (
      this.state.cartOpen &&
      this.refCartButton &&
      !this.refCartButton.current.contains(event.target)
    ) {
      this.setState({
        cartOpen: !this.state.cartOpen,
      });
    }
  }

  cartHandler() {
    this.setState({
      cartOpen: !this.state.cartOpen,
    });
  }

  render() {
    let numberOfItem = this.props.cart.list
      .filter((item) => item.inCart)
      .reduce((sum, count) => count.quantity + sum, 0);

    let sumProductPrice = 0;

    return (
      <StyledCart cartOpen={this.state.cartOpen}>
        <div ref={this.refCartButton} className="cart__wrapper">
          <button onClick={(e) => this.cartHandler(e)} className="cart__button">
            <img src={cartImage} alt="Cart, go to cart" />
            {numberOfItem !== 0 && (
              <span className="cart__counter">{numberOfItem}</span>
            )}
          </button>
          <div className="cart__dropdown">
            <h3 className="cart__title">
              My bag
              <span className="cart__count">
                {numberOfItem === 0
                  ? " is empty"
                  : numberOfItem === 1
                  ? " " + numberOfItem + " item"
                  : ", " + numberOfItem + " items"}
              </span>
            </h3>
            <div className="infos cart__items">
              {this.props.cart.list
                .sort((productObj1, productObj2) =>
                  productObj1.product < productObj2.product
                    ? -1
                    : productObj1.product > productObj2.product
                    ? 1
                    : 0
                )
                .map((product) => {
                  if (product.inCart) {
                    let productAmount = product.prices.filter(
                      (price) =>
                        price.currency.label === this.props.currency.label
                    )[0].amount;

                    let productPrice = productAmount * product.quantity;

                    sumProductPrice += productPrice;

                    return (
                      <CartItem
                        key={product.product}
                        product={product}
                        productAmount={productAmount}
                      />
                    );
                  }

                  return null;
                })}
            </div>
            {/* end of info list */}
            <div className="info__total">
              <div className="info__total-left">Total</div>
              <div className="info__total-right">
                {`${this.props.currency.symbol} ${sumProductPrice.toFixed(2)}`}
              </div>
            </div>

            <div className="info__footer">
              <Link
                to="/bag"
                className="info__button"
                onClick={() => this.cartHandler()}
              >
                View bag
              </Link>
              <button
                className="info__button"
                onClick={() => {
                  alert("We have received your order, thank you :)");
                  this.props.checkOut();
                }}
                disabled={numberOfItem === 0 ? true : false}
              >
                Check out
              </button>
            </div>
          </div>
          {/* end of cart__dropdown */}
        </div>
        <div className="cart__curtain"></div>
      </StyledCart>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
  currency: state.currency.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  checkOut: (data) => dispatch(aCheckOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
