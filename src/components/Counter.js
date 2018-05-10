import React, { Component } from 'react';
import carto from '@carto/carto.js';

class Counter extends Component {
    constructor(props){
        super(props)

        const sourceLayer = new carto.source.SQL(props.source);
        
        this.formulaDataview = new carto.dataview.Formula(sourceLayer, 'pop_max', {
            operation: carto.operation.SUM
        });
    }
    
    state = {
        data: {
            result: 0,
            operation: '',
        },
    }

    

    componentDidMount() {
        // when there is a change on the data, execute function to
        // display result from dataview in DOM element
        this.formulaDataview.on('dataChanged', data => this.setState({ data }));

        // add category dataview to client
        this.props.client.addDataview(this.formulaDataview);
        
        // Set bounding box filter
        const bboxFilter = new carto.filter.BoundingBoxLeaflet(this.props.map);
        
        // add filter to formula dataview, so when the BBOX change, the formula data view will be recalculated
        this.formulaDataview.addFilter(bboxFilter);
    }

    render() {
        const { result, operation } = this.state.data;
        
        return (
            <div id='box'>
                <h4>Total of inhabitants: {result}</h4><p>with {operation.toUpperCase()} operation</p>
            </div>
        );
    }

    
}

export default Counter;