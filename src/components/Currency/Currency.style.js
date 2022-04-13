import styled from "styled-components";
import arrow from "./../../assets/images/arrow-down.svg";

export default styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-right: 22px;
  padding: 0;

  ::after {
    content: "";
    display: block;
    width: 6px;
    height: 3px;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-size: contain;
    margin-left: 10px;
    transform: ${(props) => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
  }
`;
