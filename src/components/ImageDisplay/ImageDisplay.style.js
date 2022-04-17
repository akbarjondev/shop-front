import styled from "styled-components";

export default styled.div.attrs({
  className: "display",
})`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 730px;

  .display__left {
    max-width: 80px;
    width: 100%;
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

    .display__main-image {
      width: 610px;
      height: 510px;
      object-fit: contain;
      object-position: center;
    }
  }
`;
