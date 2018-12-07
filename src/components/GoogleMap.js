import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import Geocode from "react-geocode";

const GOOGLE_MAPS_API_KEY = "AIzaSyCB1RaEoOoDKQ8oaJ4mZvBlCb0DKeV7qh8";

class GoogleMap extends Component {
  state = {
    center: {
      lat: 45.6272259,
      lng: -122.6727305
    },
    geocoded: false,
    zoom: 11
  };

  updateLocation() {
    if (!this.state.geocoded) {
      Geocode.fromAddress(this.props.location).then(response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({
          center: {
            lat: lat,
            lng: lng
          },
          geocoded: true,
          zoom: 16
        });
      });
    }
    Geocode.setApiKey(GOOGLE_MAPS_API_KEY);
  }

  render() {
    if (!this.state.geocoded) this.updateLocation();
    return (
      <div
        style={{
          height: this.props.height ? this.props.height : "20vmax",
          width: this.props.width ? this.props.width : "30vmax"
        }}
      >
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
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
