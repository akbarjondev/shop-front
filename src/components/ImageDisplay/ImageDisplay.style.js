import styled from "styled-components";

export default styled.div.attrs({
  className: "display",
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 730px;
  width: 100%;

  .display__left {
    max-height: 550px;
    overflow-y: auto;
    width: 100px;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 40px;

    .display__image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      object-position: center;
      cursor: pointer;
    }
  }

  .display__main {
    font-size: 0;
    max-width: 610px;
    width: 100%;
    margin-left: 40px;

    .display__main-image {
      width: 610px;
      height: 510px;
      object-fit: contain;
      object-position: center;
    }
  }
`;
