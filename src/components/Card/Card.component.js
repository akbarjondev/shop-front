import React from "react";
import StyledCard from "./Card.style";
import { connect } from "react-redux";
import { aSelectProduct } from "./../../store/common.actions";

class Card extends React.Component {
  render() {
    return (
      <StyledCard inStock={this.props.product.inStock}>
        <div className="card__info">
          <h3 className="card__title">{this.props.product.name}</h3>
          <div className="card__price">{this.props.price}</div>
        </div>
        <div className="card__top">
          <img
            className="card__image"
            src={this.props.product.gallery[0]}
            alt={this.props.product.title}
            width={354}
            height={330}
          />
          {this.props.product.inStock ? (
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

const mapDispatchToProps = (dispatch) => ({
  selectProduct: (data) => dispatch(aSelectProduct(data)),
});

export default connect(null, mapDispatchToProps)(Card);
