import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";

class LeafletMap extends Component {
  constructor(props) {
    super();
    this.state = {
      lat: props.userData.coords[1],
      lng: props.userData.coords[0],
      zoom: 1,
      quakes: {}, // geoJSON data
      magnitude: 2.5, // minimun magnitude to display on map.
      geojsonMarkerOptions: {
        // These are options to be passed to markerStyles().
        radius: 8,
        fillColor: "#f00", // red
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
      }
    };
    // fn passed to the filter prop of react-leaflets GeoJSON component.
    this.filterByMag = (feature, layer) => {
      return feature.properties.magnitude >= this.state.magnitude;
    };
    // styles fn to pass to pointToLayer() to have the quakes appear as red circles.
    // the .bindPopup() creates a popup for each circle showing the quake titles.
    this.markerStyles = (feature, latlng) => {
      const options = {...this.state.geojsonMarkerOptions};
      options.radius = this.magRadius(feature.properties.magnitude);
      options.fillColor = this.dateColor(feature.properties.time);
      return L.circleMarker(latlng, options).bindPopup(
        function(layer) {
          const time = new Date(feature.properties.time)
          return `${feature.title} - ${time}`;
        }
      );
    };
    // Picks a color based on time between the quake and now.
    this.dateColor = (time) => {
      const now = Date.now();
      if (now - time <= 86400000) { //day
        return "red";
      } else if (now - time <= 604800000) { // week
        return "orange";
      } else if (now - time <= 2629800000 / 2) { // two weeks
        return "yellow";
      } else { // over two weeks
        return "green";
      }
    };
    // Picks a radius based on magnitude.
    this.magRadius = (mag) => {
      if (mag <= 4) {
        return 3;
      } else if (mag <= 5) {
        return 5;
      } else if (mag <= 6) {
        return 8;
      } else {
        return 13;
      }
    }
  }

  componentDidMount() {
    axios
      .get(`https://labspt9-quake-be.herokuapp.com/getquakes?mag=${this.state.magnitude}&date=m`)
      .then(res => {
        this.setState({ quakes: res.data });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        lat: this.props.userData.coords[1],
        lng: this.props.userData.coords[0],
        zoom: this.props.userData.zoom // zoom based on search

      });
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom} maxBounds={[[90, 180],[-90,-180]]}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.quakes.features ? (
          <GeoJSON
            data={this.state.quakes}
            pointToLayer={this.markerStyles}
            filter={this.filterByMag}
          />
        ) : null}
      </Map>
    );
  }
}

export default LeafletMap;
