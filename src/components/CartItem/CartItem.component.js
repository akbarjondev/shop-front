import React from "react";
import { connect } from "react-redux";
import { aDeleteProduct } from "../../store/common.actions";
import StyledCartItem from "./CartItem.style";
import CountControls from "../CountControls/CountControls.component";

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

        <CountControls product={product} />

        <div className="info__right">
          <img
            className="info__image"
            src={product.gallery[0]}
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
  deleteProduct: (data) => dispatch(aDeleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
