import React from "react";
import styled from "styled-components";
import BagList from "../components/BagList/BagList.component";

const StyledBag = styled.div.attrs({
  className: "bag",
})`
  .bag__heading {
    margin: 80px 0 60px;
    font-size: 32px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;

class CartPage extends React.Component {
  render() {
    return (
      <StyledBag>
        <h2 className="bag__heading">Cart</h2>
        <BagList />
      </StyledBag>
    );
  }
}

export default CartPage;
