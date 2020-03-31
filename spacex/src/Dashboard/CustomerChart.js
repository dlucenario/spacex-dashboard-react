import React from 'react';
import classes from './Dashboard.module.css';
import { Typography } from '@material-ui/core';

import Chart from "chart.js";
class CustomerChart extends React.Component {

    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        new Chart(myChartRef, {
            type: 'pie',
            data: {
                datasets: [{
                    data: [10,20,30],
                    backgroundColor: ['#27293D', '#ffffff', '696969'],
                    borderColor: 'd3d3d3',
                    borderWidth: 2,
                }],
                labels: [
                    'Dom', 'Mary', 'Dylan'
                ],

            },
            options: {

            }
        });
    }

    render() {
        return(
            <div className = {classes.dashboardCardContainer}>
                <Typography>
                    Customer Chart
                </Typography>
                <canvas
                    id="customerChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }

}

export default CustomerChart;