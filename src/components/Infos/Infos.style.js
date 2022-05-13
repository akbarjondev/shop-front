import styled from "styled-components";
import { colors } from "../../config";
import trashIcon from "./../../assets/images/trash_full.svg";

export default styled.div.attrs({
  className: "infos",
})`
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

    &__swatch {
      display: inline-block;
      width: 10px;
      height: 10px;
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
  }
`;
