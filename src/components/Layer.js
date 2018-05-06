import { Component } from 'react';
import carto from '@carto/carto.js';

class Layer extends Component{
    constructor(props){
        super(props);

        const { source, style } = props;

        const sourceLayer = new carto.source.SQL(source);
        const styleLayer = new carto.style.CartoCSS(style);

        this.layer = new carto.layer.Layer(sourceLayer, styleLayer);

    }

    componentDidMount(){
        const { client, map } = this.props;

        client.addLayer(this.layer);
        client.getLeafletLayer().addTo(map);
    }

    render(){
        return null;
    }
}

export default Layer;