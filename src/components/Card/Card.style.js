import styled from "styled-components";
import { colors } from "./../../config";
import whiteCart from "./../../assets/images/cart-white.svg";

export default styled.div.attrs({
  className: "card",
})`
  display: flex;
  flex-direction: column;
  padding: 16px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: filter 0.2s ease;

  // inStock
  ${(props) => (props.inStock ? "opacity: 1;" : "opacity: 0.5;")}

  :hover {
    filter: drop-shadow(0px 4px 35px rgba(168, 172, 176, 0.19));
  }

  :hover .card__cart-btn {
    visibility: visible;
  }

  .card__top {
    position: relative;
    order: -1;
  }

  .card__image {
    width: 354px;
    height: 330px;
    object-fit: cover;
    object-position: center;
  }

  .card__cart-btn {
    visibility: hidden;
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 15px;
    width: 52px;
    height: 52px;
    background-color: ${colors.green};
    background-image: url(${whiteCart});
    background-repeat: no-repeat;
    background-size: auto;
    background-position: center;
    border: none;
    border-radius: 50%;
    transform: translateY(48%);
    filter: drop-shadow(0px 4px 11px rgba(29, 31, 34, 0.1));
    cursor: pointer;
    transition: transform 0.2s ease-out;

    :hover {
      transform: translateY(48%) scale(1.05);
    }
  }

  .card__out-of-stock {
    position: absolute;
    display: ${(props) => (props.inStock ? "none" : "inline-block")};
    text-transform: uppercase;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 24px;
    line-height: 38px;
  }

  .card__info {
    margin-top: 24px;
    font-size: 18px;
    line-height: 28px;
  }

  .card__title {
    margin: 0;
    font-weight: 300;
  }

  .card__price {
    font-weight: 500;
  }
`;
