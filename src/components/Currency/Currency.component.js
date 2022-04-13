import React from "react";
import StyledCurrency from "./Currency.style";

class Currency extends React.Component {
  render() {
    return <StyledCurrency isOpen={true}>$</StyledCurrency>;
  }
}

export default Currency;
