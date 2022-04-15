import React from "react";
import { connect } from "react-redux";
import CardList from "../CardList/CardList.component";
import StyledCategories from "./Categories.style";

class Categories extends React.Component {
  render() {
    return (
      <StyledCategories>
        <h2 className="categories__heading">{this.props.activeCategory}</h2>
        <CardList />
      </StyledCategories>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
});

export default connect(mapStateToProps)(Categories);
