import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import color from 'rcolor';
import LatestComents from './LatestComments';

class Graph extends Component {
  constructor() {
    super();
    // displayName: 'Graph',
    this.state = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Monthly Users',
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 206, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
            'rgba(255, 159, 64, 0.6)',
            'rgba(255, 99, 132, 0.6)'
          ],
          borderColor: 'none',
          //   borderColor: [
          //     'rgba(255,99,132,1)',
          //     'rgba(54, 162, 235, 1)',
          //     'rgba(255, 206, 86, 1)',
          //     'rgba(75, 192, 192, 1)',
          //     'rgba(153, 102, 255, 1)',
          //     'rgba(255, 159, 64, 1)'
          // ],
          borderWidth: 3,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data: [65, 59, 80, 81, 56, 55, 40]
        }
      ]
    };
  }
  componentDidMount() {
    var that = this;

    setInterval(() => {
      var oldDataSet = that.state.datasets[0];
      var newData = [];

      for (var x = 0; x < that.state.labels.length; x++) {
        newData.push(Math.floor(Math.random() * 3));
      }
      //that.state.labels.backgroundColor
      var newDataSet = {
        ...oldDataSet
      };

      newDataSet.data = newData;
      newDataSet.backgroundColor = [
        'rgba(255, 99, 132, 0.6)',
        'rgb(54, 162, 235)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgb(153, 102, 255)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)',
        '#F0F8FF',
        '#FAEBD7'
      ];
      // newDataSet.borderColor = color();
      newDataSet.hoverBackgroundColor = color();
      newDataSet.hoverBorderColor = color();

      var newState = {
        ...that.state,
        datasets: [newDataSet]
      };

      this.setState(newState);
    }, 5000);
  }
  render() {
    return <Bar data={this.state} />;
  }
}

class Experience extends Component {
  // displayName: 'testing ',

  render() {
    const testDiv = (
      <div class='chartContainer' id="chartContainer" style={{ height: '400px', width: '100%' }} />
    );
    return (
      <div>
        {/* <h2>Testing Datasets</h2> */}
        <section className="section section-visitors blue lighten-4">
          <div className="row">
            <div className="col s12 m6 18">
              <div className="card-panel">
                <Graph />
              </div>
             
            </div>
             <LatestComents />
          </div>
        
        </section>
      </div>
    );
  }
}

export default Experience;
