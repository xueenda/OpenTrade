import React from 'react';
import { Chart } from 'chart.js';
import classes  from './PL.module.css';
import { Line } from 'react-chartjs-2';
import './chart.css';
import Hammer from 'hammerjs';
import * as zoom from 'chartjs-plugin-zoom';
import Measure from 'react-measure';
import {connect} from "react-redux";

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'TF',
      fill: true,
      lineTension: 0.1,
      backgroundColor:  'rgba(46, 62, 59, 0.4)',
      borderColor: '#21852f',
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
      data: [-65, 59, 80, 81, 56, 55, 40]
    },
    {
      label: 'KGI',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(46, 58, 66, 0.4)',
      borderColor: 'rgb(38, 90, 82)',
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
      data: [-165, 259, -80, 25, 56, 55, 140]
    },
    {
      label: 'MS',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(46, 59, 67, 0.4)',
      borderColor: 'rgb(40, 87, 80)',
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
      data: [5, 159, -180, 2, 5, 155, -140]
    },
    {
      label: 'SIM',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(46, 62, 74, 0.4)',
      borderColor: 'rgb(38, 103, 114)',
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
      data: [21, -423, 189, 43, -193, -43, 198]
    },
    {
      label: 'Total',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(62, 52, 59, 0.4)',
      borderColor: 'rgb(105, 62, 50)',
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
      data: [100, 1000, 100, 100, -1000, -100, -100]
    },
  ]
};

const dataWhite = {
 labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
 datasets: [
   {
     label: 'TF',
     fill: true,
     lineTension: 0.1,
     backgroundColor:  'rgba(46, 62, 59, 0.1)',
     borderColor: '#21852f',
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
     data: [-65, 59, 80, 81, 56, 55, 40]
   },
   {
     label: 'KGI',
     fill: true,
     lineTension: 0.1,
     backgroundColor: 'rgba(46, 58, 66, 0.1)',
     borderColor: 'rgb(38, 90, 82)',
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
     data: [-165, 259, -80, 25, 56, 55, 140]
   },
   {
     label: 'MS',
     fill: true,
     lineTension: 0.1,
     backgroundColor: 'rgba(46, 59, 67, 0.1)',
     borderColor: 'rgb(40, 87, 80)',
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
     data: [5, 159, -180, 2, 5, 155, -140]
   },
   {
     label: 'SIM',
     fill: true,
     lineTension: 0.1,
     backgroundColor: 'rgba(46, 62, 74, 0.1)',
     borderColor: 'rgb(38, 103, 114)',
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
     data: [21, -423, 189, 43, -193, -43, 198]
   },
   {
     label: 'Total',
     fill: true,
     lineTension: 0.1,
     backgroundColor: 'rgba(62, 52, 59, 0.1)',
     borderColor: 'rgb(105, 62, 50)',
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
     data: [100, 1000, 100, 100, -1000, -100, -100]
   },
 ]
};

const options = {
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    xAxes: [{
        display: true,


    }],
    yAxes: [{
        display: true,
        // ticks: {
        //     beginAtZero: true
        // }

    }],
    pan: {
        // Boolean to enable panning
        enabled: true,
        mode: 'xy',
        // rangeMin: {
        //     x: null,
        //     y: null
        // },
        // rangeMax: {
        //     x: null,
        //     y: null
        // }
    },
    zoom: {
        enabled: true,
        drag: true,
        mode: 'xy',
        // rangeMin: {
        //     // Format of min zoom range depends on scale type
        //     x: null,
        //     y: null
        // },
        // rangeMax: {
        //     // Format of max zoom range depends on scale type
        //     x: null,
        //     y: null
        // }
    }
  }
}



class pl extends React.Component {


  componentWillMount(){
      Chart.plugins.register(zoom)
  }

	render() {
		return (
      <Measure bounds>
        {({measureRef}) => (
        <div ref={measureRef} style={{
             marginTop: this.props.isDark ? "10px" : "0",
             height: this.props.isDark ? "calc(100% - 54px)" : "calc(100% - 42px)",
             background: this.props.isDark ? "#31313d" : this.props.isBlue ? "#010839" : "white"
             }}>
          <Line data={this.props.isDark ?  data : dataWhite} height={null} redraw={true} options={options}/>
        </div>)}
      </Measure>
		)
	}
}

const mapStateToProps = (state) => {
 return {
   isDark: state.theme === "dark" ? true : false,
   isBlue: state.theme === "blue" ? true : false
 }
}

export default connect(mapStateToProps)(pl);