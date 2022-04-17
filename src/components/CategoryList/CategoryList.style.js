import styled from "styled-components";
import { colors } from "../../config";

export default styled.ul.attrs({
  className: "list",
})`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  a {
    text-decoration: none;
  }

  .list__btn {
    display: inline-block;
    padding: 0 16px 30px;
    font-size: 16px;
    line-height: 19px;
    text-transform: uppercase;
    color: ${colors.black};
    background-color: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;

    :hover {
      border-bottom: 2px solid ${colors.green};
    }
  }

  .list__btn--active {
    font-weight: 600;
    color: ${colors.green};
    border-bottom: 2px solid ${colors.green};
  }
`;
