import styled from "styled-components";
import { colors } from "../../config";
import trashIcon from "./../../assets/images/trash_full.svg";

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

  .info {
    margin-bottom: 40px;
    display: flex;
    cursor: default;

    &__left {
      max-width: 136px;
      line-height: 26px;
      font-size: 16px;
      width: 100%;
    }

    &__title {
      font-weight: 300;
      margin: 0;
      margin-bottom: 5px;
    }

    &__price {
      font-weight: 500;
      margin-bottom: 27px;
    }

    &__attributes {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    &__attribute-wrapper {
      display: flex;
      border: 1px solid ${colors.black};
      max-width: 130px;
      width: 100%;
    }

    &__attribute {
      text-align: left;
      min-width: 24px;
      height: 24px;
      font-size: 14px;
      font-weight: 4;
      line-height: 1.6;
      padding: 0px;
      padding-left: 8px;
      padding-right: 8px;
      background-color: #ffffff;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      &:first-child {
        width: 60%;
        border-right: 1px solid ${colors.black};
      }

      &:last-child {
        width: 40%;
      }

      &--inactive {
        opacity: 0.5;
        background-color: #a6a6a6;
      }
    }

    &__middle {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-left: auto;
      margin-right: 10px;
    }

    &__rugulator {
      border: 1px solid ${colors.black};
      cursor: pointer;

      &:active {
        background-color: ${colors.black};
        color: ${colors.white};
      }
    }

    &__right {
      position: relative;

      &:hover .info__delete {
        visibility: visible;
      }
    }

    &__delete {
      visibility: hidden;
      display: inline-block;
      width: 30px;
      height: 30px;
      padding: 0;
      background-image: url(${trashIcon});
      background-color: ${colors.red};
      border: none;
      background-repeat: no-repeat;
      background-position: center;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      left: 0;
      transition: visibility 0.1s ease-in-out;
      cursor: pointer;
    }

    &__image {
      width: 105px;
      height: 137px;
      object-fit: contain;
      object-position: center;
      align-self: center;
    }

    &__total {
      display: flex;
      justify-content: space-between;
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

    &__footer {
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
