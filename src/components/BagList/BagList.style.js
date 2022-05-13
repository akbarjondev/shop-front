import styled from "styled-components";
import { colors } from "./../../config";
import trashIcon from "./../../assets/images/trash_full.svg";

export default styled.ul.attrs({
  className: "baglist",
})`
  .baglist {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    padding: 0;
    margin: 0;

    &__item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #e5e5e5;
      padding-top: 20px;
      margin-bottom: 20px;
    }

    &__heading {
      font-size: 30px;
      line-height: 27px;
      font-weight: 600;
      margin: 0;
      margin-bottom: 16px;
    }

    &__brand {
      font-weight: 400;
      font-size: 30px;
      line-height: 27px;
      margin: 0;
      margin-bottom: 25px;
    }

    &__price {
      font-weight: 700;
      font-size: 24px;
      line-height: 18px;
      margin-bottom: 25px;
    }

    &__attrs {
      display: flex;
      align-items: flex-start;
      gap: 12px;
    }

    &__right {
      display: flex;
      position: relative;

      :hover .baglist__delete {
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
      right: 0px;
      transition: visibility 0.1s ease-in-out;
      cursor: pointer;
    }
  }

  .attr {
    display: flex;
    border: 1px solid ${colors.black};

    &__spec {
      padding: 12px;
      font-size: 16px;
      line-height: 18px;

      &-color {
        display: inline-block;
        width: 12px;
        height: 12px;
      }

      :first-child {
        border-right: 1px solid ${colors.black};
      }
    }
  }
`;
