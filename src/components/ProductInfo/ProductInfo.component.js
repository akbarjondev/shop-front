import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import StyledProductInfo from "./ProductInfo.style";
import { getProductById, getCurrencies } from "../../graphql/queries";

class ProductInfo extends React.Component {
  render() {
    console.log(this.props);

    const { match, data } = this.props;

    return (
      !data.loading && (
        <StyledProductInfo>
          ProductInfo id: {match.params.productId}
        </StyledProductInfo>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  withRouter(
    graphql(getProductById, {
      options: (props) => ({ variables: { id: props.match.params.productId } }),
    })(ProductInfo)
  )
);
