import styled from "styled-components";
import { colors } from "../../config";

export default styled.div.attrs({
  className: "notifier notifier--active",
})`
  padding: 16px 32px;
  display: inline-block;
  position: fixed;
  top: -250px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.green};
  color: ${colors.white};
  transition: all 0.3s ease-in-out;
  z-index: 100000;

  &.notifier--active {
    top: ${(props) => (props.open ? "0px" : "")};
  }
`;
