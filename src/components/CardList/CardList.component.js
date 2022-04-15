import React from "react";
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
    console.log(this.props.categories.list[0]);
    const activeCategory = this.props.categories.activeCategory || "all";
    return (
      !data.loading &&
      this.props.categories.list.length && (
        <StyledCardList>
          {this.props.categories.list
            .filter((list) => list.name === activeCategory)[0]
            .products.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  image={item.gallery[0]}
                  title={item.name}
                  price={
                    this.props.currency.currentCurrency.symbol +
                    item.prices.filter(
                      (price) =>
                        price.currency.label ===
                        this.props.currency.currentCurrency.label
                    )[0].amount
                  }
                />
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
