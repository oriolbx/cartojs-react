import React, { Component } from 'react';
import carto from '@carto/carto.js';

class Counter extends Component {
    constructor(props){
        super(props)

        const sourceLayer = new carto.source.SQL(props.source);
        
        const formulaDataview = new carto.dataview.Formula(sourceLayer, 'pop_max', {
            operation: carto.operation.SUM
        });

        // when there is a change on the data, execute function to
        // display result from dataview in DOM element
        formulaDataview.on('dataChanged', function(data){
            let content = `<h4>Total of inhabitants: ${data.result}</h4><p>with ${data.operation.toUpperCase()} operation</p>`
            document.getElementById('box').innerHTML = content; 
        });

        // add category dataview to client
        props.client.addDataview(formulaDataview);
        
        // Set bounding box filter
        const bboxFilter = new carto.filter.BoundingBoxLeaflet(props.map);
        
        // add filter to formula dataview, so when the BBOX change, the formula data view will be recalculated
        formulaDataview.addFilter(bboxFilter);
    }

    render(){
        return (
            <div id='box'></div>
        );
    }

    
}

export default Counter;