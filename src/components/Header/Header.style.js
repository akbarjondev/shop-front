import styled from "styled-components";
import { colors } from "../../config";

export default styled.header.attrs({
  className: "header",
})`
  padding-top: 24px;
  padding-bottom: 16px;
  position: fixed;
  z-index: 10000;
  width: 100%;
  left: 0;
  top: 0;
  background-color: ${colors.white};

  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header__wrapper {
    display: flex;
    justify-content: flex-end;
    max-width: 234px;
    width: 100%;
    display: flex;
    align-items: center;
  }
`;
