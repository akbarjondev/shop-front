import React from "react";
import StyledBagList from "./BagList.style";
import Slider from "../Slider/Slider.component";
import { connect } from "react-redux";
import { aDeleteProduct } from "../../store/common.actions";
import CountControlsComponent from "../CountControls/CountControls.component";

class BagList extends React.Component {
  render() {
    return (
      <StyledBagList>
        {this.props.cart.length === 0 && <h3>Cart is empty!</h3>}
        {this.props.cart.map((product) => {
          return (
            <li className="baglist__item" key={product.product}>
              <div className="baglist__left">
                <h2 className="baglist__heading">{product.productName}</h2>
                <h3 className="baglist__brand">{product.brand}</h3>
                <div className="baglist__price">
                  {this.props.currency.symbol}
                  {
                    product.prices.find(
                      (price) =>
                        price.currency.label === this.props.currency.label
                    )["amount"]
                  }
                </div>
                <div className="baglist__attrs">
                  {product.attributes.map((attr) => {
                    return (
                      <div className="attr baglist__attr" key={attr.id}>
                        <div className="attr__spec">{attr.id}</div>
                        <div className="attr__spec">
                          {attr.id === "Color" ? (
                            <span
                              className="attr__spec-color"
                              style={{ backgroundColor: attr.value }}
                            ></span>
                          ) : (
                            attr.value
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="baglist__right">
                <CountControlsComponent product={product} />
                <Slider images={product.gallery} />
                <button
                  className="baglist__delete"
                  onClick={() => this.props.deleteProduct(product)}
                >
                  <span className="visually-hidden">Delete item</span>
                </button>
              </div>
            </li>
          );
        })}
      </StyledBagList>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart.list,
  currency: state.currency.currentCurrency,
});

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (data) => dispatch(aDeleteProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BagList);
