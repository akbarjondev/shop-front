import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import StyledProductInfo from "./ProductInfo.style";
import { getProductById } from "../../graphql/queries";
import ImageDisplay from "../ImageDisplay/ImageDisplay.component";
import { aSetActiveImage, aSetSize } from "./../../store/common.actions";
import InfoTab from "../InfoTab/InfoTab.component";

class ProductInfo extends React.Component {
  render() {
    const { data } = this.props;
    const product = data.product;

    return (
      !data.loading && (
        <StyledProductInfo>
          <ImageDisplay
            gallery={product.gallery}
            selectActiveImage={this.props.selectActiveImage}
            selectedImage={this.props.selectedImage}
          />
          <InfoTab product={product} currency={this.props.currency} />
        </StyledProductInfo>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  selectedImage: state.product.selectedImageURL,
  selectedSize: state.product.selectedSize,
  currency: state.currency,
  cartList: state.cart.list,
});

const mapDispatchToProps = (dispatch) => ({
  selectActiveImage: (data) => dispatch(aSetActiveImage(data)),
  selectSize: (data) => dispatch(aSetSize(data)),
});

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
