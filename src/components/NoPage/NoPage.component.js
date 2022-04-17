import React from "react";
import StyledNoPage from "./NoPage.style";

class NoPage extends React.Component {
  render() {
    return (
      <StyledNoPage>
        <h2>Uppps! Content not found :(</h2>
      </StyledNoPage>
    );
  }
}

export default NoPage;
