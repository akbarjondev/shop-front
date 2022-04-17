import React from "react";
import { graphql } from "@apollo/client/react/hoc";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import StyledProductInfo from "./ProductInfo.style";
import { getProductById } from "../../graphql/queries";
import ImageDisplay from "../ImageDisplay/ImageDisplay.component";
import { aSetActiveImage, aSetSize } from "./../../store/common.actions";

class ProductInfo extends React.Component {
  render() {
    const { data } = this.props;
    const product = data.product;

    console.log(product);

    return (
      !data.loading && (
        <StyledProductInfo>
          <ImageDisplay
            gallery={product.gallery}
            selectActiveImage={this.props.selectActiveImage}
            selectedImage={this.props.selectedImage}
          />
        </StyledProductInfo>
      )
    );
  }
}

const mapStateToProps = (state) => ({
  state,
  selectedImage: state.product.selectedImageURL,
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
