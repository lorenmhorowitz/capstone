import React, { Component } from "react";
import "../css/CardSlide.css";
import { Carousel } from "react-responsive-carousel";

class CardSlide extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: []
    };

    this.initializePictures();
  }

  initializePictures = () => {
    const pictures = [];

    let x = 1;
    this.props.images.forEach(image => {
      const picture = (
        <div key={x}>
          <img
            style={{ width: this.props.width, height: "100%" }}
            src={image}
          />
        </div>
      );
      pictures.push(picture);
      x += 1;
    });
    this.state.slides = pictures;
  };

  render() {
    return (
      <Carousel infiniteLoop={true} showThumbs={false}>
        {this.state.slides}
      </Carousel>
    );
  }
}

export default CardSlide;
