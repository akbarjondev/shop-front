import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { connect } from "react-redux";
import StyledCategoryList from "./CategoryList.style";
import { getCategories } from "./../../graphql/queries";
import { aSetCategoryActive } from "./../../store/common.actions";

class CategoryList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      !data.loading && (
        <StyledCategoryList>
          {data.categories.map((category) => {
            return (
              <li className="list__item" key={category.name}>
                <button
                  className="list__btn"
                  onClick={() =>
                    this.props.dispatchSetActiveCategory(category.name)
                  }
                >
                  {category.name}
                </button>
              </li>
            );
          })}
        </StyledCategoryList>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.category.activeCategory,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetActiveCategory: (data) => dispatch(aSetCategoryActive(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(graphql(getCategories)(CategoryList));
