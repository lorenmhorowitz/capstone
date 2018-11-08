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
            style={{ width: this.props.width, height: this.props.height }}
            src={image}
          />
        </div>
      );
      pictures.push(picture);
      x += 1;
    });
    this.setState({
      slides: pictures
    });
  };

  render() {
    return (
      <div>
        <Carousel infiniteLoop={true} showThumbs={false} dynamicHeight={true}>
          {this.state.slides}
        </Carousel>
      </div>
    );
  }
}

export default CardSlide;
