import React from "react";
import CategoryList from "../CategoryList/CategoryList.component";
import StyledHeader from "./Header.style";
import logo from "./../../assets/images/logo.svg";
import Currency from "../Currency/Currency.component";
import Cart from "../Cart/Cart.component";
import { Link } from "react-router-dom";
class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <div className="header-container container">
          <CategoryList />
          <Link to="/">
            <img src={logo} alt="Shop company logo" width={41} height={41} />
          </Link>
          <div className="header__wrapper">
            <Currency />
            <Cart />
          </div>
        </div>
      </StyledHeader>
    );
  }
}

export default Header;
