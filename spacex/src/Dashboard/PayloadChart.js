import React from 'react';
import Chart from "chart.js";

import Container from '../components/Container';
import payloadIcon from '../images/icons/product.svg';

// Chart.defaults.global.defaultFontFamily = "'Lato', sans-serif"
// Chart.defaults.global.legend.display = true;
// Chart.defaults.global.elements.line.tension = 0.3;
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
        gradientLine.addColorStop(0, '#1B262C');
        gradientLine.addColorStop(1, '#1B262C');

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
                        backgroundColor: '#3282b8',
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

            <Container
            logo = {payloadIcon}
            title = {`Heaviest Payload`}
            headerExist = {true}>
                <div style ={{position: 'relative', height: '300px'}} >
                <canvas
                     id="myChart"
                     ref={this.chartRef}/>
                </div>


            </Container>
            // <div className = {classes.dashboardCardContainer}>
            //     <div style = {{height: '330px', paddingBottom: '30px',position: 'relative'}}>
            //     <Typography style = {{color:'#9a9a9a', paddingBottom: '10px'}}>
            //         Heaviest Payloads
            //     </Typography>
            //     {/* <Typography style = {{color:'#ffffff', fontSize: '32px' ,paddingBottom: '10px'}}>
            //         Payloads
            //     </Typography> */}
            //     <canvas
            //         id="myChart"
            //         ref={this.chartRef}
            //     />
            //     </div>
            // </div>

        )
    }

}

export default PayloadChart;