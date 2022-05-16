import React from "react";
import { connect } from "react-redux";
import parser from "html-react-parser";
import { aSelectProduct, aAddOneProduct } from "../../store/common.actions";
import Notifier from "../Notifier/Notifier.component";
import StyledInfoTab from "./InfoTab.style";

class InfoTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      productAttributesCount: this.props.product.attributes.length,
      timerId: null,
      openNotifier: false,
      selectedAttributes: [],
      readyForCart: false,
    };

    this.attributeSelector = this.attributeSelector.bind(this);
  }

  componentDidMount() {
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

  attributeSelector(id, value) {
    this.setState({
      readyForCart: true,
      selectedAttributes: [
        ...this.state.selectedAttributes.filter((attr) => attr.id !== id),
        {
          id,
          value,
        },
      ],
    });
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

  // add product to store
  addOneProduct(product) {
    let { id, name, gallery, prices, brand } = product;

    const uniqId = this.state.selectedAttributes
      .sort((id1, id2) => (id1.id < id2.id ? -1 : id1.id > id2.id ? 1 : 0))
      .map((attr) => attr.value)
      .join("-");

    this.props.selectProduct({
      productName: name,
      prices: prices,
      product: id + uniqId,
      gallery: gallery,
      quantity: 1,
      inCart: true,
      attributes: this.state.selectedAttributes,
      brand: brand,
    });

    this.setState({
      openNotifier: true,
      readyForCart: false,
      selectedAttributes: [],
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
            {product.attributes.map((attribute) => {
              return (
                <div key={attribute.id} className="attrs infotab__attrs">
                  <h4 className="attrs__heading">{attribute.name}:</h4>
                  <div className="attrs__items">
                    {attribute.items.map((item) => {
                      // active class when select attribute
                      let isActiveClass = "";

                      if (
                        this.state.selectedAttributes.length > 0 &&
                        this.state.readyForCart
                      ) {
                        isActiveClass = this.state.selectedAttributes.find(
                          (attr) => attr.id === attribute.id
                        )
                          ? this.state.selectedAttributes.find(
                              (attr) => attr.id === attribute.id
                            ).value === item.value
                          : false;
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
                            this.attributeSelector(attribute.name, item.value)
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
              disabled={
                this.state.productAttributesCount !==
                this.state.selectedAttributes.length
              }
              onClick={() => this.addOneProduct(product)}
              className="infotab__btn"
            >
              Add to cart
            </button>
          ) : (
            <div className="infotab__btn infotab__btn--stock">Out of stock</div>
          )}
          <div className="infotab__description">
            {parser(product.description)}
          </div>
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
  addOneProduct: (data) => dispatch(aAddOneProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoTab);
