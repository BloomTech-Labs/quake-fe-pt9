import React, {Component} from 'react';
import L from 'leaflet';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';

import data from '../data/2.5_month.geojson.json';

class WorldMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 0,
      lng: 0,
      zoom: 1,
      quakes: data, // geoJSON data
      mag: 5, // minimun magnitude to display on map.
      geojsonMarkerOptions: { // These are options to be passed to markerStyles().
        radius: 8,
        fillColor: "#f00", // red
        color: "#000",
        weight: 1,
        opacity: 0.5,
        fillOpacity: 0.5
      },
    };
    // fn passed to the filter prop of react-leaflets GeoJSON component.
    this.filterByMag = (feature, layer) => {
      return feature.properties.mag >= this.state.mag;
    };
    // styles fn to pass to pointToLayer() to have the quakes appear as red circles.
    // the .bindPopup() creates a popup for each circle showing the quake titles.
    this.markerStyles =  (feature, latlng) => {
      return L.circleMarker(latlng, this.state.geojsonMarkerOptions)
        .bindPopup(function (layer) {
          return feature.properties.title;
        });
    };
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={this.state.quakes}
          pointToLayer={this.markerStyles}
          filter={this.filterByMag}
        />
      </Map>
    )
  }
}

export default WorldMap;
