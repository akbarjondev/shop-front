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
    if (this.props.categories.list.length === 0) {
      this.props.saveCategories(this.props.data.categories);
    }
  }

  render() {
    const { data } = this.props;
    const activeCategory = this.props.categories.activeCategory || "all";

    return (
      !data.loading &&
      this.props.categories.list.length && (
        <StyledCardList listLength={this.props.categories.list.length}>
          {this.props.categories.list
            .filter((list) => list.name === activeCategory)[0]
            .products.map((item) => {
              return (
                <Link to={`/product/${item.id}`} key={item.id}>
                  <Card
                    id={item.id}
                    image={item.gallery[0]}
                    title={item.name}
                    inStock={item.inStock}
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
