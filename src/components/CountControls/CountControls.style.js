import styled from "styled-components";
import { colors } from "../../config";

export default styled.div.attrs({
  className: "controls",
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: 10px;

  .controls {
    &__rugulator {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid ${colors.black};
      background-color: ${colors.white};
      cursor: pointer;

      &:active {
        background-color: ${colors.black};
        color: ${colors.white};
      }
    }
  }
`;
