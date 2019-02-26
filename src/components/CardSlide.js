import React, { Component } from "react";
import "../css/CardSlide.css";
import { Carousel } from "react-responsive-carousel";

class CardSlide extends Component {
  constructor(props) {
    super(props);

    const pictures = [];

    let x = 1;
    this.props.images.forEach(image => {
      const picture = (
        <div key={x}>
          <img
            alt={`Property ${x++}`}
            style={{ width: this.props.width, height: "100%" }}
            src={image}
          />
        </div>
      );
      pictures.push(picture);
    });

    this.state = {
      slides: pictures
    };
  }

  render() {
    return (
      <Carousel infiniteLoop={true} showThumbs={false}>
        {this.state.slides}
      </Carousel>
    );
  }
}

export default CardSlide;
