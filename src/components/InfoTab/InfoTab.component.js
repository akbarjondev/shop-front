import React from "react";
import StyledInfoTab from "./InfoTab.style";

class InfoTab extends React.Component {
  render() {
    const { product } = this.props;

    return (
      <StyledInfoTab>
        <h2 className="infotab__heading">{product.name}</h2>
        <h3 className="infotab__brand">{product.brand}</h3>
        {product.attributes.map((attribute) => {
          return (
            <div key={attribute.id} className="attrs infotab__attrs">
              <h4 className="attrs__heading">{attribute.name}:</h4>
              <div className="attrs__items">
                {attribute.items.map((item) => {
                  return (
                    <div
                      key={item.id}
                      data-value={item.value}
                      className="attrs__item"
                    >
                      {item.displayValue}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
        <h4 className="infotab__size">Price:</h4>
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
        <button className="infotab__btn">Add to cart</button>
        <div
          className="infotab__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        ></div>
      </StyledInfoTab>
    );
  }
}

export default InfoTab;
