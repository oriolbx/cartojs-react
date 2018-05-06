import React, { Component } from 'react';
import L from 'leaflet';

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
        center: props.center,
        zoom: props.zoom,
        tileLayer: props.tileLayer,
        mapObject: props.mapObject
    }
    
  }
  componentDidMount(){
    // create map
    const map = L.map('map', {
      center: this.state.center,
      zoom: this.state.zoom,
      layers: [
        L.tileLayer( this.state.tileLayer , {
          attribution: ''
        }),
      ]
    });
    

    this.state.mapObject(map)
    

  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;