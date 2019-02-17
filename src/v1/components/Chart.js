import React, { Component } from 'react';
import {  Line, Pie, Bar } from 'react-chartjs-2';
import color from 'rcolor';
// var CanvasJSReact = require('canvasjs/canvasjs.min');
import CanvasJSReact from './canvasjs.react.js';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;


export default class Chart extends Component {
  constructor(props) {

    super(props);
    this.state = {

      chartData: {
      animationEnabled: true,
			exportEnabled: true,
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Monthly Chart',
      fill: false,
      lineTension: 0.1,
      backgroundColor: color(),
      borderColor: color(),
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [185, 59, 80, 81, 56, 55, 40]
    }
  ]
      }
    };
  }

  componentDidMount() {}
  render() {

    const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light2", //"light1", "dark1", "dark2"
			title:{
				text: "with Index L"
			},
			data: [{
				type: "column", //change type to bar, line, area, pie, etc				
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints: [
					{ x: 10, y: 71 },
					{ x: 20, y: 55 },
					{ x: 30, y: 50 },
					{ x: 40, y: 65 },
					{ x: 50, y: 71 },
					{ x: 60, y: 68 },
					{ x: 70, y: 38 },
					{ x: 80, y: 92, indexLabel: "Highest" },
					{ x: 90, y: 54 },
					{ x: 100, y: 60 },
					{ x: 110, y: 21 },
					{ x: 120, y: 49 },
					{ x: 130, y: 36 }
				]
			}]
		}
    

    return (
      <div>
        <h2>My Chart </h2>
        <section className="section section-visitors blue lighten-4">
          <div className="row">
            <div className="col s12 m6 18">
              <div className="card-panel">
                <div className="chart" id='chartContainer' style={{ height: '300px', width:'100%'}}>
                  
                  <Line
                    data={this.state.chartData}
                    // width={100}
                    // height={50}
                    // options={
                    //   {
                    //     // maintainAspectRatio:false
                    //   }
                    // }
                  />
                  <CanvasJSChart options={options}/>
                </div>
              </div>
            </div>
          </div>

          <div className="col s12 m6 14">Latest Comments </div>
        </section>
      </div>
    );
  }
}
