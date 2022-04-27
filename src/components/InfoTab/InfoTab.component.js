import React from "react";
import { connect } from "react-redux";
import {
  aSelectProduct,
  aEditProduct,
  aAddOneProduct,
} from "../../store/common.actions";
import Notifier from "../Notifier/Notifier.component";
import StyledInfoTab from "./InfoTab.style";

class InfoTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productAttributesCount: this.props.product.attributes.length,
      checkedButtonCounter: 0,
      isAddButtonDisabled: true,
      timerId: null,
      openNotifier: false,
    };

    this.refAttributeWrapper = React.createRef();

    this.attributeClicked = this.attributeClicked.bind(this);
  }

  componentDidMount() {
    this.refAttributeWrapper.current.addEventListener(
      "click",
      this.attributeClicked
    );

    // check selected attrs
    this.checkAllAttributesSelected();
  }

  componentDidUpdate() {
    // check selected attrs
    this.checkAllAttributesSelected();
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  // check if all attributes selected
  checkAllAttributesSelected() {
    // find product is exist in the temporary list
    let isProductExist = this.props.cart.list.find(
      (item) => item.product === this.props.product.id
    );

    // check if all attributes are selected then remove disabled from 'add to cart' btn
    if (
      (Boolean(isProductExist) &&
        this.state.productAttributesCount ===
          isProductExist.attributes.length &&
        this.state.isAddButtonDisabled) ||
      (this.state.productAttributesCount === 0 &&
        this.state.isAddButtonDisabled)
    ) {
      this.setState({
        isAddButtonDisabled: false,
      });
    }
  }

  // select product's attribute and add it to cart
  attributeClicked(event) {
    if (
      event.target.nodeName === "BUTTON" &&
      event.target.contains(event.target)
    ) {
      let { product, id, value } = event.target.dataset;
      let { name, prices, gallery } = this.props.product;

      let findedProduct = this.props.cart.list.find(
        (item) => item.product === product
      );

      if (findedProduct === undefined) {
        this.props.selectProduct({
          productName: name,
          prices,
          product,
          image: gallery[0],
          quantity: 0,
          inCart: false,
          attributes: [
            {
              id,
              value,
            },
          ],
        });
      } else {
        this.props.editProduct({
          productName: name,
          prices,
          product,
          image: gallery[0],
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

  // iterate product count
  addOneProduct(productId) {
    this.props.addOneProduct({
      product: productId,
    });

    // set Notifier
    this.setState({
      openNotifier: true,
      timerId: setTimeout(() => {
        this.setState({
          openNotifier: false,
        });
      }, 3000),
    });
  }

  render() {
    const { product } = this.props;

    return (
      <>
        <Notifier open={this.state.openNotifier} />
        <StyledInfoTab>
          <h2 className="infotab__heading">{product.name}</h2>
          <h3 className="infotab__brand">{product.brand}</h3>
          <div className="infotab__wrapper" ref={this.refAttributeWrapper}>
            {product.attributes.map((attribute, attributeIndex) => {
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
                      if (
                        this.props.cart.list.length > 0 &&
                        findedProduct &&
                        !findedProduct.inCart
                      ) {
                        let attribures = findedProduct.attributes;

                        if (attribures.length > 0) {
                          isActiveClass = attribures.find(
                            (attr) => attr.id === attribute.id
                          )
                            ? attribures.find(
                                (attr) => attr.id === attribute.id
                              ).value === item.value
                            : false;
                        }
                      }

                      return (
                        <button
                          key={item.id}
                          className={`attrs__item ${
                            attribute.name === "Color"
                              ? "attrs__item--color"
                              : ""
                          } ${isActiveClass ? "attrs__item--active" : ""}`}
                          data-id={attribute.id}
                          data-value={item.value}
                          data-product={product.id}
                          style={{
                            backgroundColor:
                              attribute.name === "Color" ? item.value : "",
                          }}
                          onClick={() =>
                            this.setState({
                              checkedButtonCounter: attributeIndex + 1,
                            })
                          }
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
            <button
              disabled={this.state.isAddButtonDisabled}
              onClick={() => this.addOneProduct(product.id)}
              className="infotab__btn"
            >
              Add to cart
            </button>
          ) : (
            <div className="infotab__btn infotab__btn--stock">Out of stock</div>
          )}
          <div
            className="infotab__description"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        </StyledInfoTab>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
  selectProduct: (data) => dispatch(aSelectProduct(data)),
  editProduct: (data) => dispatch(aEditProduct(data)),
  addOneProduct: (data) => dispatch(aAddOneProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);
