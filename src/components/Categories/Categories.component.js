import React from "react";
import { connect } from "react-redux";
import StyledCategories from "./Categories.style";

class Categories extends React.Component {
  render() {
    return (
      <StyledCategories>
        <h2 className="categories__heading">{this.props.activeCategory}</h2>
      </StyledCategories>
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.category.activeCategory,
});

export default connect(mapStateToProps)(Categories);
