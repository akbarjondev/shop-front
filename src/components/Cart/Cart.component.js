import React from "react";
import StyledCart from "./Cart.style";
import cartImage from "./../../assets/images/cart.svg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  aRemoveOneProduct,
  aAddOneProduct,
  aCheckOut,
} from "./../../store/common.actions";

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartOpen: false,
    };

    console.log(this.state);

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
      // console.log(event.target.containes());
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
              {this.props.cart.list.map((product) => {
                if (product.inCart) {
                  let productPrice =
                    product.prices.filter(
                      (price) =>
                        price.currency.label === this.props.currency.label
                    )[0].amount * product.quantity;

                  sumProductPrice += productPrice;

                  return (
                    <div key={product.product} className="info">
                      <div className="info__left">
                        <h4 className="info__title">{product.productName}</h4>
                        <div className="info__price">
                          {this.props.currency.symbol}
                          {productPrice.toFixed(2)}
                        </div>
                        <div className="info__attributes">
                          {product.attributes.map((item) => (
                            <div
                              className="info__attribute-wrapper"
                              key={item.id}
                            >
                              <div className="info__attribute" title={item.id}>
                                {item.id}
                              </div>
                              <div
                                className="info__attribute"
                                title={item.value}
                              >
                                {item.id === "Color" ? (
                                  <span
                                    style={{
                                      display: "inline-block",
                                      backgroundColor: item.value,
                                      width: "10px",
                                      height: "10px",
                                    }}
                                  ></span>
                                ) : (
                                  item.value
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="info__middle">
                        <button
                          onClick={() => this.props.incrementProduct(product)}
                          className="info__rugulator info__attribute"
                        >
                          +
                        </button>
                        <div className="info__counter">{product.quantity}</div>
                        <button
                          onClick={() => this.props.decrementProduct(product)}
                          className="info__rugulator info__attribute"
                        >
                          -
                        </button>
                      </div>
                      <img
                        className="info__image"
                        src={product.image}
                        alt="product title"
                        width={105}
                        height={137}
                      />
                    </div>
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
              <Link to="/bag" className="info__button">
                View bag
              </Link>
              <button
                className="info__button"
                onClick={() => {
                  alert("We have received your order, thank you :)");
                  this.props.checkOut();
                }}
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
  incrementProduct: (data) => dispatch(aAddOneProduct(data)),
  decrementProduct: (data) => dispatch(aRemoveOneProduct(data)),
  checkOut: (data) => dispatch(aCheckOut(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
