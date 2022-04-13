import styled from "styled-components";
import arrow from "./../../assets/images/arrow-down.svg";
import { colors } from "./../../config";

export default styled.div.attrs({
  className: "currency",
})`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 22px;
  padding: 0;
  position: relative;

  ::after {
    content: "";
    display: block;
    width: 6px;
    height: 3px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 10px;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }

  .currency__list {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: absolute;
    top: 110%;
    background-color: ${colors.white};
    right: 50%;
    transform: translateX(65%);
    box-shadow: 0 10px 20px 5px rgba(0, 0, 0, 0.1);
  }

  .currency__item {
    display: flex;
    font-size: 18px;
    line-height: 28px;
    padding: 10px 20px;
    font-weight: 500;

    :first-child {
      padding-top: 20px;
    }

    :last-child {
      padding-bottom: 20px;
    }

    :hover {
      color: ${colors.white};
      background-color: ${colors.black};
    }
  }

  .currency__symbol {
    display: inline-block;
    min-width: 30px;
  }
`;
