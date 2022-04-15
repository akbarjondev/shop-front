import React from "react";
import StyledCard from "./Card.style";

class Card extends React.Component {
  render() {
    return (
      <StyledCard inStock={this.props.inStock}>
        <div className="card__info">
          <h3 className="card__title">{this.props.title}</h3>
          <div className="card__price">{this.props.price}</div>
        </div>
        <div className="card__top">
          <img
            className="card__image"
            src={this.props.image}
            alt={this.props.title}
            width={354}
            height={330}
          />
          {this.props.inStock ? (
            <button className="card__cart-btn">
              <span className="visually-hidden">Add item to cart</span>
            </button>
          ) : null}
          <div className="card__out-of-stock">Out of stock</div>
        </div>
      </StyledCard>
    );
  }
}

export default Card;
