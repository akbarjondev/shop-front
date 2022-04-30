import React from "react";
import StyledSlider from "./Slider.styled";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: this.props.images || [],
      activeImage: this.props.images[0] || "123",
      activeIndex: 0,
    };
  }

  render() {
    return (
      <StyledSlider>
        {this.state.images.length > 1 && (
          <button
            className="slider__control slider__control--left"
            onClick={() =>
              this.setState({
                activeIndex:
                  this.state.activeIndex === 0
                    ? this.state.images.length - 1
                    : this.state.activeIndex - 1,
              })
            }
          >
            <span className="visually-hidden">Prev</span>
          </button>
        )}

        <div className="slider__images">
          <img
            className="slider__image"
            src={this.state.images[this.state.activeIndex]}
            width={141}
            height={185}
            alt={"slider"}
          />
        </div>
        {this.state.images.length > 1 && (
          <button
            className="slider__control slider__control--right"
            onClick={() =>
              this.setState({
                activeIndex:
                  this.state.activeIndex >= this.state.images.length - 1
                    ? 0
                    : this.state.activeIndex + 1,
              })
            }
          >
            <span className="visually-hidden">Next</span>
          </button>
        )}
      </StyledSlider>
    );
  }
}

export default Slider;
