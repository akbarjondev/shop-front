import React from "react";
import StyledNotifier from "./Notifier.style";

class Notifier extends React.Component {
  constructor(props) {
    super(props);

    this.refNotifierBody = React.createRef();
  }

  render() {
    return (
      <StyledNotifier open={this.props.open} ref={this.refNotifierBody}>
        Item successfully added.
      </StyledNotifier>
    );
  }
}

export default Notifier;
