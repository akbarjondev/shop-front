import styled from "styled-components";
import { colors } from "../../config";

export default styled.div.attrs({
  className: "cart",
})`
  background-color: transparent;
  border: none;
  padding: 0;

  .cart__wrapper {
    position: relative;
    z-index: 2;
  }

  .cart__button {
    background-color: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  .cart__counter {
    position: absolute;
    left: 13px;
    bottom: 11px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 20px;
    height: 20px;
    border-radius: 50px;
    background-color: ${colors.black};
    color: ${colors.white};
    font-weight: 700;
    font-family: "Roboto";
    font-size: 14px;
    line-height: 16px;
  }

  .cart__dropdown {
    position: absolute;
    top: 53px;
    right: 0;
    background-color: ${colors.white};
    padding: 8px 16px 20px;
    width: 325px;
    visibility: ${(props) => (props.cartOpen ? "visible" : "hidden")};
  }

  .cart__title {
    font-size: 16px;
    margin: 0;
    line-height: 26px;
  }

  .cart__count {
    font-weight: 500;
  }

  .infos {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    max-height: 540px;
    overflow-y: auto;
  }

  .info__total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;

    &-left {
      font-weight: 500;
      font-family: "Roboto";
      font-size: 16px;
      line-height: 18px;
    }

    &-right {
      font-weight: 700;
      font-size: 16px;
      line-height: 26px;
    }
  }

  .info__footer {
    display: flex;
    justify-content: space-between;

    .info__button {
      padding: 16px 32px;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      background-color: ${colors.white};
      border: 1px solid ${colors.black};
      text-decoration: none;
      color: ${colors.black};
      cursor: pointer;

      :last-child {
        background-color: ${colors.green};
        border-color: ${colors.green};
        color: ${colors.white};
      }
    }
  }

  .cart__curtain {
    position: fixed;
    top: 91px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #393748;
    opacity: 0.22;
    cursor: auto;
    visibility: ${(props) => (props.cartOpen ? "visible" : "hidden")};
  }
`;
