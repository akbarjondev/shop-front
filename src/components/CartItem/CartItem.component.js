import React from "react";
import { connect } from "react-redux";
import {
  aAddOneProduct,
  aRemoveOneProduct,
  aDeleteProduct,
} from "../../store/common.actions";
import StyledCartItem from "./CartItem.style";

class CartItem extends React.Component {
  render() {
    let { product, productAmount } = this.props;

    return (
      <StyledCartItem>
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
      </StyledCartItem>
    );
  }
}

const mapStateToProps = (state) => ({
  currency: state.currency.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  incrementProduct: (data) => dispatch(aAddOneProduct(data)),
  decrementProduct: (data) => dispatch(aRemoveOneProduct(data)),
  deleteProduct: (data) => dispatch(aDeleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
