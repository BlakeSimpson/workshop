import React from 'react';
import ReactDOM from 'react-dom';
import Plot from './Plot';

// The weather data
const weather = {
  // The dates of the below temperature forecasts
  xData: ["2017-02-21 18:00:00", "2017-02-21 21:00:00", "2017-02-22 00:00:00", "2017-02-22 03:00:00", "2017-02-22 06:00:00", "2017-02-22 09:00:00", "2017-02-22 12:00:00", "2017-02-22 15:00:00", "2017-02-22 18:00:00", "2017-02-22 21:00:00", "2017-02-23 00:00:00", "2017-02-23 03:00:00", "2017-02-23 06:00:00", "2017-02-23 09:00:00", "2017-02-23 12:00:00", "2017-02-23 15:00:00", "2017-02-23 18:00:00", "2017-02-23 21:00:00", "2017-02-24 00:00:00", "2017-02-24 03:00:00", "2017-02-24 06:00:00", "2017-02-24 09:00:00", "2017-02-24 12:00:00", "2017-02-24 15:00:00", "2017-02-24 18:00:00", "2017-02-24 21:00:00", "2017-02-25 00:00:00", "2017-02-25 03:00:00", "2017-02-25 06:00:00", "2017-02-25 09:00:00", "2017-02-25 12:00:00", "2017-02-25 15:00:00", "2017-02-25 18:00:00", "2017-02-25 21:00:00", "2017-02-26 00:00:00", "2017-02-26 03:00:00", "2017-02-26 06:00:00", "2017-02-26 09:00:00", "2017-02-26 12:00:00", "2017-02-26 15:00:00"],
  // THe forecast temperature in degrees celsius
  yData: [19.82, 18.95, 18.64, 17.99, 17.14, 17.29, 17.26, 17.54, 17.46, 17.26, 17.23, 17.09, 17.09, 17.49, 18.23, 17.98, 17.64, 17.13, 16.52, 16.11, 15.83, 15.87, 16.68, 17.19, 16.96, 16.39, 16.83, 16.68, 16.54, 16.45, 17.37, 17.7, 17.26, 17.39, 17.59, 17.21, 16.94, 17.48, 18.62, 18.72]
}

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      y: props.y,
      x: props.x,
      type: props.type
    };
  }

  setType = (event) => {
    const type = event.target.value
    this.setState({type: type})
  }

  render () {
    return (
      <div>
        <h1>The Weather in Vienna</h1>
        <Plot xData={this.state.x} yData={this.state.y} type={this.state.type} />

        <select value={this.state.type} onChange={this.setType}>
          <option value="scatter">Scatter graph</option>
          <option value="bar">Bar graph</option>
        </select>
      </div>
    )
  }
}

ReactDOM.render(
  <App type="bar" x={weather.xData} y={weather.yData} />,
  document.getElementById('root')
);
