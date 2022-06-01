import styled from "styled-components";
import { colors } from "./../../config";

export default styled.div.attrs({
  className: "cardlist",
})`
  & {
    display: flex;
    flex-wrap: wrap;
    margin-top: 103px;
    gap: 20px;
  }

  .cardlist__link {
    display: block;
    max-width: 386px;
    width: 100%;
    height: 465px;
    text-decoration: none;
    color: ${colors.black};
  }
`;
