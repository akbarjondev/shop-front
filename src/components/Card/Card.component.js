import React from "react";
import StyledCard from "./Card.style";
import { connect } from "react-redux";
import { aSelectProduct } from "./../../store/common.actions";
import Notifier from "../Notifier/Notifier.component";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      openNotifier: false,
    };

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(event) {
    event.preventDefault();

    let { name, id, prices, gallery, attributes, brand } = this.props.product;

    const selectedAttributes = attributes.map((attr) => {
      return {
        id: attr.id,
        value: attr.items[0].value,
      };
    });

    const uniqId = selectedAttributes.map((attr) => attr.value).join("-");

    this.props.selectProduct({
      productName: name,
      product: id + uniqId,
      prices: prices,
      gallery: gallery,
      quantity: 1,
      inCart: true,
      attributes: selectedAttributes,
      brand: brand,
    });

    this.setState({
      openNotifier: true,
    });

    setTimeout(() => {
      this.setState({
        openNotifier: false,
      });
    }, 3000);
  }

  render() {
    let { product, price } = this.props;

    return (
      <>
        <Notifier open={this.state.openNotifier} />
        <StyledCard inStock={product.inStock}>
          <div className="card__info">
            <h3 className="card__title">{product.name}</h3>
            <div className="card__price">{price}</div>
          </div>
          <div className="card__top">
            <img
              className="card__image"
              src={product.gallery[0]}
              alt={product.title}
              width={354}
              height={330}
            />
            {product.inStock ? (
              <button
                className="card__cart-btn"
                onClick={(e) => this.addToCart(e)}
              >
                <span className="visually-hidden">Add item to cart</span>
              </button>
            ) : null}
            <div className="card__out-of-stock">Out of stock</div>
          </div>
        </StyledCard>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  selectProduct: (data) => dispatch(aSelectProduct(data)),
});

export default connect(null, mapDispatchToProps)(Card);
