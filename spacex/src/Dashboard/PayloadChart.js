import React from 'react';
import Chart from "chart.js";
import classes from './Dashboard.module.css';

import { Typography } from '@material-ui/core';

Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.3;

class PayloadChart extends React.Component {
    chartRef = React.createRef();

    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const gradientLine = myChartRef.createLinearGradient(500,0,100,0);
        gradientLine.addColorStop(0, '#3358f4');
        gradientLine.addColorStop(1, '#1d8cf8');

        new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: ["12", "43", "24","15", "18","43", "43"],
                datasets: [
                    {
                        label: "Sales",
                        data: [86, 67, 91, 12, 44, 23, 12],
                        backgroundColor: '#27293D',
                        borderColor: gradientLine,
                        borderWidth: 2,
                        fill: true,

                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: { display: true },
                        scaleLabel: {
                            display: true,
                            labelString: 'Flight Number'
                        },
                        gridLines: {
                            display: true,
                            drawBorder: false
                        }
                    }],
                    yAxes: [{
                        ticks: { display: true },
                        scaleLabel: {
                            display: true,
                            labelString: 'Weight in Kilograms'
                        },
                        gridLines: {
                            display: false,
                            drawBorder: false
                        }
                    }]
                }
            }
        });
    }

    render() {
        return(
            <div className = {classes.dashboardCardContainer}>
                <Typography>
                    Payload Chart
                </Typography>
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }

}

export default PayloadChart;