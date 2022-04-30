import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { connect } from "react-redux";
import StyledCategoryList from "./CategoryList.style";
import { getCategories } from "./../../graphql/queries";
import { aSetCategoryActive } from "./../../store/common.actions";
import { Link } from "react-router-dom";

class CategoryList extends React.Component {
  render() {
    const {
      data,
      location: { pathname },
    } = this.props;

    return (
      !data.loading && (
        <StyledCategoryList>
          {data.categories.map((category) => {
            return (
              <li className="list__item" key={category.name}>
                <Link
                  to="/"
                  className={
                    this.props.activeCategory === category.name &&
                    pathname !== "/bag"
                      ? "list__btn list__btn--active"
                      : "list__btn"
                  }
                  onClick={() =>
                    this.props.dispatchSetActiveCategory(category.name)
                  }
                >
                  {category.name}
                </Link>
              </li>
            );
          })}
        </StyledCategoryList>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  activeCategory: state.categories.activeCategory,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSetActiveCategory: (data) => dispatch(aSetCategoryActive(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(graphql(getCategories)(CategoryList)));
