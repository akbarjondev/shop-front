import React from "react";
import { Link } from "react-router-dom";
import StyledCardList from "./CardList.style";
import Card from "./../Card/Card.component";
import { connect } from "react-redux";
import { graphql } from "@apollo/client/react/hoc";
import { aSaveCategories } from "./../../store/common.actions";
import { getListOfCategories } from "./../../graphql/queries";

class CardList extends React.Component {
  componentDidUpdate() {
    // if (this.props.categories.list.length === 0) {
    //   this.props.saveCategories(this.props.data.categories);
    // }
  }

  render() {
    const activeCategory = this.props.categories.activeCategory || "all";

    if (!this.props.data.loading) {
      const { data } = this.props;

      return (
        data.categories.length && (
          <StyledCardList listLength={data.categories.length}>
            {data.categories
              .filter((list) => list.name === activeCategory)[0]
              .products.map((item) => {
                return (
                  <Link
                    className="cardlist__link"
                    to={`/product/${item.id}`}
                    key={item.id}
                  >
                    <Card
                      product={item}
                      price={
                        this.props.currency.currentCurrency.symbol +
                        item.prices.filter(
                          (price) =>
                            price.currency.label ===
                            this.props.currency.currentCurrency.label
                        )[0].amount
                      }
                    />
                  </Link>
                );
              })}
          </StyledCardList>
        )
      );
    }
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories,
  currency: state.currency,
});

const mapDispatchToProps = (dispatch) => ({
  saveCategories: (data) => dispatch(aSaveCategories(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(graphql(getListOfCategories)(CardList));
