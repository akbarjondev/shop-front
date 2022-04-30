import React from "react";
import StyledSlider from "./Slider.styled";

class Slider extends React.Component {
  render() {
    return (
      <StyledSlider>
        <button className="slider__control slider__control--left">
          <span className="visually-hidden">Prev</span>
        </button>
        <div className="slider__images">
          {this.props.images.map((image) => (
            <img
              className="slider__image"
              key={image}
              src={image}
              width={141}
              height={185}
              alt={"slider"}
            />
          ))}
        </div>
        <button className="slider__control slider__control--right">
          <span className="visually-hidden">Next</span>
        </button>
      </StyledSlider>
    );
  }
}

export default Slider;
