/**
 * This component should render a plot with Plotly, taking these three props:
 *
 * - xData: the data to be rendered on the x-axis as an array
 * - yData: The data to be rendered on the y-axis as an array
 * - type:  The type of plot we want Plotly to render
 *
 * To see an example of how you should use Plotly look at the index.html file in the public/ folder.
 * (and feel free to delete the code in there)
 */
import React, { PureComponent } from 'react';
import Plotly from 'plotly.js/dist/plotly.js';

const graphOptions = {
  margin: {
    t: 0, r: 0, l: 30
  },
  xaxis: {
    gridcolor: 'transparent'
  }
};

const displayOptions = {
  displayModeBar: false
};

class Plot extends PureComponent {
  element;

  renderGraph = () => {
    const { xData, yData, type } = this.props

    const data = [{
      x: xData,
      y: yData,
      type: type
    }];

    Plotly.newPlot(this.element, data, graphOptions, displayOptions);
  }

  componentDidMount () {
    this.renderGraph()
  }

  componentDidUpdate () {
    this.renderGraph()
  }

  render () {
    return <div ref={node => this.element = node} />
  }
}

export default Plot;
