import styled from "styled-components";
import { colors } from "./../../config";

export default styled.div.attrs({
  className: "infotab",
})`
  display: flex;
  flex-direction: column;
  max-width: 292px;
  margin-left: 100px;

  .infotab__heading,
  .infotab__brand {
    font-size: 30px;
    line-height: 27px;
    margin: 0;
  }

  .infotab__heading {
    font-weight: 600;
    margin-bottom: 16px;
  }

  .infotab__brand {
    font-weight: 400;
    margin-bottom: 43px;
  }

  .attrs {
    margin-bottom: 40px;
  }

  .attrs__heading {
    font-family: "Roboto Condensed";
    font-size: 18px;
    line-height: 18px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
    margin-bottom: 8px;
  }

  .attrs__items {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .attrs__item {
    display: block;
    min-width: 63px;
    padding: 14px;
    border: 1px solid ${colors.black};
    text-align: center;
    cursor: pointer;
    background-color: ${colors.white};
    transition: transform 0.3s ease;

    :hover {
      box-shadow: 0 0 0px 4px ${colors.green};
    }
  }

  .attrs__item--active {
    background-color: ${colors.black};
    color: ${colors.white};
  }

  .attrs__item--active.attrs__item--color {
    box-shadow: 0 0 0px 4px ${colors.black};
  }

  .attrs__item.attrs__item--color {
    display: block;
    min-width: 45px;
    height: 45px;
    border-radius: 50%;
    padding: 0;

    .attrs__display-name {
      visibility: hidden;
    }
  }

  .infotab__price-heading {
    font-family: "Roboto Condensed";
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin: 0;
    margin-bottom: 10px;
  }

  .infotab__price {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin-bottom: 20px;
  }

  .infotab__btn {
    display: inline-block;
    background-color: ${colors.green};
    border: none;
    padding: 16px 32px;
    text-transform: uppercase;
    color: ${colors.white};
    font-size: 16px;
    line-height: 19px;
    font-weight: 600;
    transition: transform 0.3s ease;
    cursor: pointer;

    :disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    :hover {
      background-color: ${colors.black};
    }
  }

  .infotab__btn--stock {
    text-align: center;
    background-color: ${colors.black};
    cursor: not-allowed;
  }

  .infotab__description {
    margin-top: 20px;
  }
`;
