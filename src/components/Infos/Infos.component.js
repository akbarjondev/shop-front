import React from "react";
import { connect } from "react-redux";
import {
  aAddOneProduct,
  aRemoveOneProduct,
  aDeleteProduct,
} from "../../store/common.actions";
import StyledInfos from "./Infos.style";

class Infos extends React.Component {
  render() {
    return (
      <StyledInfos className="infos cart__items">
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
                (price) => price.currency.label === this.props.currency.label
              )[0].amount;

              this.props.sumPrice(productAmount * product.quantity);

              return (
                <div className="info" key={product.product}>
                  <div className="info__left">
                    <h4 className="info__title">{product.productName}</h4>
                    <div className="info__price">
                      {this.props.currency.symbol}
                      {productAmount.toFixed(2)}
                    </div>
                    <div className="info__attributes">
                      {product.attributes.map((item) => (
                        <div className="info__attribute-wrapper" key={item.id}>
                          <div className="info__attribute" title={item.id}>
                            {item.id}
                          </div>
                          <div className="info__attribute" title={item.value}>
                            {item.id === "Color" ? (
                              <span
                                className="info__swatch"
                                style={{ backgroundColor: item.value }}
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
                      disabled={product.quantity === 1 ? true : false}
                    >
                      -
                    </button>
                  </div>
                  <div className="info__right">
                    <img
                      className="info__image"
                      src={product.image}
                      alt="product title"
                      width={105}
                      height={137}
                    />
                    <button
                      className="info__delete"
                      onClick={() => this.props.deleteProduct(product)}
                    >
                      <span className="visually-hidden">Delete item</span>
                    </button>
                  </div>
                </div>
              );
            }

            return null;
          })}
      </StyledInfos>
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
  deleteProduct: (data) => dispatch(aDeleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Infos);
