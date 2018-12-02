import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

class GoogleMap extends Component {
  state = {
    center: {
      lat: 45.6272259,
      lng: -122.6727305
    },
    zoom: 11
  };

  componentDidMount() {
    Geocode.setApiKey("AIzaSyCB1RaEoOoDKQ8oaJ4mZvBlCb0DKeV7qh8");
    if (this.props.location) {
      Geocode.fromAddress(this.props.location).then(response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          center: {
            lat: lat,
            lng: lng
          },
          zoom: 16
        });
      });
    }
  }

  render() {
    return (
      <div
        style={{
          height: this.props.height ? this.props.height : "20vmax",
          width: this.props.width ? this.props.width : "30vmax"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCB1RaEoOoDKQ8oaJ4mZvBlCb0DKeV7qh8" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={this.state.center}
          zoom={this.state.zoom}
        />
      </div>
    );
  }
}

export default GoogleMap;
