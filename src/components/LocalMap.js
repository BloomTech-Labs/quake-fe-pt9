import React, { Component } from "react";
import L from "leaflet";
import { Map, TileLayer, GeoJSON } from "react-leaflet";
import axios from "axios";

class LocalMap extends Component {
  constructor(props) {
    super();
    this.state = {
      lat: props.userCoords[1],
      lng: props.userCoords[0],
      zoom: 7,
      quakes: {}, // geoJSON data
      magnitude: 4, // minimun magnitude to display on map.
      geojsonMarkerOptions: {
        // These are options to be passed to markerStyles().
        radius: 8,
        fillColor: "#f00", // red
        color: "#000",
        weight: 1,
        opacity: 0.5,
        fillOpacity: 0.5
      }
    };
    // fn passed to the filter prop of react-leaflets GeoJSON component.
    this.filterByMag = (feature, layer) => {
      return feature.properties.magnitude >= this.state.magnitude;
    };
    // styles fn to pass to pointToLayer() to have the quakes appear as red circles.
    // the .bindPopup() creates a popup for each circle showing the quake titles.
    this.markerStyles = (feature, latlng) => {
      return L.circleMarker(latlng, this.state.geojsonMarkerOptions).bindPopup(
        function(layer) {
          return feature.title;
        }
      );
    };
  }

  componentDidMount() {
    axios.get(`https://epicentral-app.herokuapp.com/getquakes`).then(res => {
      console.log(res.data);
      const quakes = res.data;
      this.setState({ quakes });
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps !== this.props){
        this.setState({
            lat: this.props.userCoords[1],
            lng: this.props.userCoords[0]
        })

    } 
    
  }
    
   
  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
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

export default LocalMap;
