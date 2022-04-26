import styled from "styled-components";
import { colors } from "../../config";

export default styled.div.attrs({
  className: "cart",
})`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  .cart__wrapper {
    position: relative;
    z-index: 2;
    cursor: auto;
  }

  .cart__dropdown {
    position: absolute;
    top: 53px;
    right: 0;
    background-color: ${colors.white};
    padding: 8px 16px 20px;
    width: 325px;
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
  }

  .info {
    margin-bottom: 40px;
    display: flex;

    &__left {
      max-width: 136px;
      line-height: 26px;
      font-size: 16px;
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
      gap: 8px;
    }

    &__attribute {
      text-align: center;
      min-width: 24px;
      height: 24px;
      font-size: 14px;
      font-weight: 4;
      line-height: 1.6;
      padding: 0;
      padding-left: 8px;
      padding-right: 8px;
      background-color: #ffffff;
      border: 1px solid ${colors.black};

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
      margin-left: 18px;
      margin-right: 10px;
    }

    &__rugulator {
      cursor: pointer;
    }

    &__image {
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
  }
`;
