import styled from "styled-components";
import { colors } from "./../../config";

export default styled.div.attrs({
  className: "cardlist",
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 103px;
  gap: 16px;

  .cardlist__link {
    display: block;
    max-width: 386px;
    width: 100%;
    height: 444px;
    text-decoration: none;
    color: ${colors.black};
  }
`;
