import React from "react";
import { connect } from "react-redux";
import { aSelectProduct, aEditProduct } from "../../store/common.actions";
import StyledInfoTab from "./InfoTab.style";

class InfoTab extends React.Component {
  constructor(props) {
    super(props);

    this.attributeWrapper = React.createRef();

    this.attributeClicked = this.attributeClicked.bind(this);
  }

  componentDidMount() {
    this.attributeWrapper.current.addEventListener(
      "click",
      this.attributeClicked
    );
  }

  // select product's attribute and add it to cart
  attributeClicked(event) {
    if (
      event.target.nodeName === "BUTTON" &&
      event.target.contains(event.target)
    ) {
      let { product, id, value } = event.target.dataset;

      let findedProduct = this.props.cart.list.find(
        (item) => item.product === product
      );

      if (findedProduct === undefined) {
        this.props.selectProduct({
          product,
          quantity: 1,
          attributes: [
            {
              id,
              value,
            },
          ],
        });
      } else {
        this.props.editProduct({
          product,
          attributes: [
            {
              id,
              value,
            },
          ],
        });
      }
    }
  }

  render() {
    const { product } = this.props;

    return (
      <StyledInfoTab>
        <h2 className="infotab__heading">{product.name}</h2>
        <h3 className="infotab__brand">{product.brand}</h3>
        <div className="infotab__wrapper" ref={this.attributeWrapper}>
          {product.attributes.map((attribute) => {
            return (
              <div key={attribute.id} className="attrs infotab__attrs">
                <h4 className="attrs__heading">{attribute.name}:</h4>
                <div className="attrs__items">
                  {attribute.items.map((item) => {
                    // active class when select attribute
                    let isActiveClass = "";

                    // check if attribute is selected and make active class based on iteration
                    let findedProduct = this.props.cart.list.find(
                      (item) => item.product === product.id
                    );
                    if (this.props.cart.list.length > 0 && findedProduct) {
                      let attribures = findedProduct.attributes;

                      if (attribures.length > 0) {
                        isActiveClass = attribures.find(
                          (attr) => attr.id === attribute.id
                        )
                          ? attribures.find((attr) => attr.id === attribute.id)
                              .value === item.value
                          : false;
                      }
                    }

                    return (
                      <button
                        key={item.id}
                        className={`attrs__item ${
                          attribute.name === "Color" ? "attrs__item--color" : ""
                        } ${isActiveClass ? "attrs__item--active" : ""}`}
                        data-id={attribute.id}
                        data-value={item.value}
                        data-product={product.id}
                        style={{
                          backgroundColor:
                            attribute.name === "Color" ? item.value : "",
                        }}
                      >
                        {attribute.name === "Color" ? "" : item.displayValue}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <h4 className="infotab__price-heading">Price:</h4>
        <div className="infotab__price">
          {this.props.currency.currentCurrency.symbol}
          {
            product.prices.find(
              (price) =>
                price.currency.label ===
                this.props.currency.currentCurrency.label
            ).amount
          }
        </div>
        {product.inStock ? (
          <button className="infotab__btn">Add to cart</button>
        ) : (
          <div className="infotab__btn infotab__btn--stock">Out of stock</div>
        )}
        <div
          className="infotab__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </StyledInfoTab>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  selectProduct: (data) => dispatch(aSelectProduct(data)),
  editProduct: (data) => dispatch(aEditProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);
