import React, {Component} from 'react';
import L from 'leaflet';
import {Map, TileLayer, GeoJSON} from 'react-leaflet';

import data from '../data/2.5_month.geojson.json'

function filterByMag(data, mag) {
  return data.features.filter((feature) => {
    return feature.properties.mag >= mag;
  })
}

const geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff0000",
    color: "#000",
    weight: 1,
    opacity: .5,
    fillOpacity: 0.5
};

const quakeStyles = (feature, latlng) => {
  return L.circleMarker(latlng, geojsonMarkerOptions);
}


class WorldMap extends Component {
  constructor() {
     super()
     this.state = {
       lat: 0,
       lng: 0,
       zoom: 1,
       quakes: filterByMag(data, 4.5)
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
        <GeoJSON data={this.state.quakes} pointToLayer={quakeStyles}/>
      </Map>
    )
  }
}

export default WorldMap;
