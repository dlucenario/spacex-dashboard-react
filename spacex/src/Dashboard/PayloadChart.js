import React from 'react';
import Chart from "chart.js";
import classes from './Dashboard.module.css';

import { Typography } from '@material-ui/core';

Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif"
Chart.defaults.global.legend.display = false;
Chart.defaults.global.elements.line.tension = 0.3;
let myLineChart;

class PayloadChart extends React.Component {

    chartRef = React.createRef();

    componentDidMount() {
    }

    componentDidUpdate() {
        this.buildChart();
    }

    buildChart = () => {
        const dataList = [];
        const labelList = [];

        for(let x = 0; x < this.props.chartData.length; x++) {
            dataList.push(this.props.chartData[x].kilograms);
            labelList.push(this.props.chartData[x].payloadID);
        }
        const myChartRef = this.chartRef.current.getContext("2d");
        const gradientLine = myChartRef.createLinearGradient(500,0,100,0);
        gradientLine.addColorStop(0, '#3358f4');
        gradientLine.addColorStop(1, '#1d8cf8');

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "bar",
            data: {
                //Bring in data
                labels: labelList,
                datasets: [
                    {
                        label: "Kilograms",
                        data: dataList,
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
                            display: false,
                            labelString: 'Payload ID'
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
                <div style = {{height: '330px', paddingBottom: '30px'}}>
                <Typography style = {{color:'#9a9a9a', paddingBottom: '10px'}}>
                    Heaviest Payloads
                </Typography>
                {/* <Typography style = {{color:'#ffffff', fontSize: '32px' ,paddingBottom: '10px'}}>
                    Payloads
                </Typography> */}
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
                </div>
            </div>
        )
    }

}

export default PayloadChart;