import styled from "styled-components";
import chevron from "./../../assets/images/chevron-right.svg";

export default styled.div.attrs({
  className: "slider",
})`
  display: flex;
  align-items: center;
  position: relative;
  width: 141px;

  .slider {
    &__images {
      display: flex;
      flex-wrap: nowrap;
      width: 141px;
      overflow: hidden;
    }

    &__image {
      width: 141px;
      height: 185px;
      display: inline-block;
      object-fit: contain;
      object-position: center;
    }

    &__control {
      position: absolute;
      display: inline-block;
      width: 24px;
      height: 24px;
      border: none;
      padding: 0;
      background-color: transparent;
      background-image: url(${chevron});
      background-repeat: no-repeat;
      background-position: center;
      background-size: auto;
      cursor: pointer;

      &--left {
        left: 0;
      }

      &--right {
        transform: rotate(180deg);
        right: 0;
      }
    }
  }
`;
