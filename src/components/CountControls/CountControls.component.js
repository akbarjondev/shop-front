import React from "react";
import { connect } from "react-redux";
import { aAddOneProduct, aRemoveOneProduct } from "../../store/common.actions";
import StyledControls from "./CountControls.style";

class CountControls extends React.Component {
  render() {
    let { product } = this.props;

    return (
      <StyledControls>
        <button
          onClick={() => this.props.incrementProduct(product)}
          className="controls__rugulator controls__attribute"
        >
          +
        </button>
        <div className="controls__counter">{product.quantity}</div>
        <button
          onClick={() => this.props.decrementProduct(product)}
          className="controls__rugulator controls__attribute"
          disabled={product.quantity === 1 ? true : false}
        >
          -
        </button>
      </StyledControls>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementProduct: (data) => dispatch(aAddOneProduct(data)),
  decrementProduct: (data) => dispatch(aRemoveOneProduct(data)),
});

export default connect(null, mapDispatchToProps)(CountControls);
