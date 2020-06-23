import React, { Component } from 'react';
import carto from '@carto/carto.js';
import Map from './components/Map';
import  Layer  from './components/Layer';
import Counter from './components/Counter';
import populated_places from './layers/populated_places';



class App extends Component {
  
  state = {
      center: [30, 30],
      zoom: 3,
      basemap: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}.png',
      nativeMap: undefined
    }

    carto_client = new carto.Client({
      apiKey: 'default_public',
      username: 'oboix'
    })
    
    mapObjectChangedHandler = (mapObject) => {
      this.setState({
        nativeMap: mapObject
      })
    }



  render() {
    const { center, zoom, basemap } = this.state;
    
    return (

      <main className="wrapper">
        <div>
          <Map 
            center={ center } 
            zoom={ zoom } 
            tileLayer= { basemap } 
            mapObject= { this.mapObjectChangedHandler.bind(this) } /> 

          { this.state.nativeMap ?  
            <div id='map'>
                <Layer 
                  source = { populated_places.query }
                  style= { populated_places.cartocss }
                  client = { this.carto_client }
                  map = { this.state.nativeMap }
                  /> 
            </div> :null }
            
          { this.state.nativeMap ?  
                <Counter
                  source = { populated_places.query }
                  style= { populated_places.cartocss }
                  client = { this.carto_client }
                  map = { this.state.nativeMap }
                /> 
                : null }




        </div>
      </main>
    );
  }
}

export default App;
