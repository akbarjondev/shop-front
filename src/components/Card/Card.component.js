import React from "react";
import StyledCard from "./Card.style";

class Card extends React.Component {
  render() {
    return (
      <StyledCard>
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
          <button className="card__cart-btn">
            <span className="visually-hidden">Add item to cart</span>
          </button>
        </div>
      </StyledCard>
    );
  }
}

export default Card;
