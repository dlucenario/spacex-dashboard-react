import React from 'react';
import Container from '../components/Container';

import lineChartIcon from '../images/icons/line-chart.svg'

import Chart from "chart.js";

Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif"
Chart.defaults.global.elements.line.tension = 0.3;

let myLineChart;

class LaunchPerYear extends React.Component {
    chartRef = React.createRef();

    componentDidUpdate() {
        if(this.props.launchData !== undefined) {
            this.buildChart();
        }

    } 

    prepareData = () => {
        
        let yearList = [];
        for(let x = 0; x < this.props.launchData.length; x++) {
            const launchDate = this.props.launchData[x].launchDate;
            const year = launchDate.slice(launchDate.length - 4);

            yearList.push(year);
        }
        //remove duplicates
        yearList = [...new Set(yearList)];
        const data = [...yearList];
        data.fill(0);

        for(let x = 0; x < this.props.launchData.length; x++) {
            const launchDate = this.props.launchData[x].launchDate;
            const year = launchDate.slice(launchDate.length - 4);

            for(let y = 0; y < yearList.length; y++) {

                if(year === yearList[y]) {
                    data[y]++;
                }
            }
        }

        return {
            year: yearList,
            data: data
        }
    }

    buildChart = () => {
        const chartInputs = this.prepareData();
        const dataList = chartInputs.data;
        const labelList = chartInputs.year;

        const myChartRef = this.chartRef.current.getContext("2d");
        const gradientLine = myChartRef.createLinearGradient(500,0,100,0);
        gradientLine.addColorStop(0, '#3282b8');
        gradientLine.addColorStop(1, '#3282b8');

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: labelList,
                datasets: [
                    {
                        label: "Launches",
                        data: dataList,
                        backgroundColor: '#3282b8',
                        borderColor: gradientLine,
                        borderWidth: 3,
                        fill: false,

                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                legend: {
                    display: false
                },
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
                            display: false,
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
            <Container
            logo = {lineChartIcon}
            title = {`Launch per Year`}
            headerExist = {true}>
                <div style = {{position:'relative', height: '250px'}}>
                    <canvas
                        id="myChart"
                        ref={this.chartRef}
                    />
                </div>

            </Container>
        )
    }
}

export default LaunchPerYear;