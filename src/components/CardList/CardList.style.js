import styled from "styled-components";
import { colors } from "./../../config";

export default styled.div.attrs({
  className: "cardlist",
})`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 103px;
  gap: 16px;

  a {
    text-decoration: none;
    color: ${colors.black};
  }
`;
