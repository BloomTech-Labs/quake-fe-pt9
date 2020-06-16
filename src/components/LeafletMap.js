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
      fema: {},
      magnitude: 5, // minimun magnitude to display on map.
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
      return L.circleMarker(latlng, this.state.geojsonMarkerOptions).bindPopup(
        function(layer) {
          return feature.title;
        }
      );
    };
  }
 
  componentDidMount() {
    axios
      .get(`https://labspt9-quake-be.herokuapp.com/getquakes?mag=${this.state.magnitude}&date=2w`)
      .then(res => {
        this.setState({ quakes: res.data });

        axios.get(`https://www.fema.gov/api/open/v1/FemaRegions`)
        .then(res=> {
          this.setState({fema: res.data.FemaRegions})
          console.log('FEMA INFO', this.state.fema )
        })


       });

      
       
       
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        lat: this.props.userData.coords[1],
        lng: this.props.userData.coords[0],
        zoom: this.props.userData.zoom
      });
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

export default LeafletMap;
