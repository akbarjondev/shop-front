import React from "react";
import StyledImageDisplay from "./ImageDisplay.style";

class ImageDisplay extends React.Component {
  componentDidMount() {
    // every time new product is selected, make active image initial value ''
    this.props.selectActiveImage("");
  }

  render() {
    console.log(this.props);

    return (
      <StyledImageDisplay>
        <div className="display__left">
          {this.props.gallery.map((image) => {
            return (
              <img
                key={image.split("/").reverse()[0].split(".")[0]}
                className="display__image"
                src={image}
                height={80}
                width={90}
                alt=""
                onClick={() =>
                  this.props.selectedImage === image
                    ? null
                    : this.props.selectActiveImage(image)
                }
              />
            );
          })}
        </div>
        <div className="display__main">
          <img
            className="display__main-image"
            src={
              this.props.selectedImage
                ? this.props.selectedImage
                : this.props.gallery[0]
            }
            height={510}
            width={610}
            alt="rasm"
          />
        </div>
      </StyledImageDisplay>
    );
  }
}

export default ImageDisplay;
