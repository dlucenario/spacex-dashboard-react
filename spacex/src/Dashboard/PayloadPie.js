import React from 'react';
import Container from '../components/Container';

import pieChartIcon from '../images/icons/pie.svg'

import Chart from "chart.js";
let myLineChart;

class PayloadPie extends React.Component {
    chartRef = React.createRef();

    componentDidUpdate() {
        if(this.props.launchData !== undefined) {
            this.buildChart();
        }

    } 

    prepareData = () => {
        let customerList = [];
        for(let x = 0; x < this.props.launchData.length; x++) {
            const nationality = this.props.launchData[x].nationality;

            customerList.push(nationality);
        }
        //remove duplicates
        customerList = [...new Set(customerList)];
        const data = [...customerList];
        data.fill(0);

        for(let x = 0; x < this.props.launchData.length; x++) {
            const nationality = this.props.launchData[x].nationality;

            for(let y = 0; y < customerList.length; y++) {

                if(nationality === customerList[y]) {
                    data[y]++;
                }
            }
        }

        //filter nationality with 1 or 2 launches
        let others = 0;
        const filteredDataSet = [];
        const filteredCustomerList = [];
        for(let x = 0; x < data.length; x++) {

            if(data[x] === 1 || data[x] === 2) {
                others = others + data[x];
            } else {
                filteredCustomerList.push(customerList[x]);
                filteredDataSet.push(data[x]);
            }
        }
        
        filteredDataSet.push(others);
        filteredCustomerList.push('Others');

        return {
            customerList: filteredCustomerList,
            data: filteredDataSet
        }
    }

    fillColor = (length) => {
        //my color palette
        const colorSelection = [
            'rgb(27,38,44)',
            'rgb(15,76,117)',
            'rgb(50,130,184)',
            'rgb(187,225,250)'
        ];

        const colorArray = [];
        let y = 0;
        for(let x = 0; x < length; x++) {
            if(y >= colorSelection.length) y = 0;
            colorArray.push(colorSelection[y]);
            y++;
        }
        return colorArray;
    }

    buildChart = () => {
        const chartInputs = this.prepareData();
        
        const dataList = chartInputs.data;
        const labelList = chartInputs.customerList;

        const myChartRef = this.chartRef.current.getContext("2d");
        const gradientLine = myChartRef.createLinearGradient(500,0,100,0);
        gradientLine.addColorStop(0, '#3282b8');
        gradientLine.addColorStop(1, '#3282b8');

        if (typeof myLineChart !== "undefined") myLineChart.destroy();

        myLineChart = new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: labelList,
                datasets: [
                    {
                        data: dataList,
                        backgroundColor: this.fillColor(dataList.length),
                        borderColor: '#ffffff',
                        borderWidth: 3,
                        fill: false,

                    }
                ]
            },
            options: {
                //Customize chart options
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    position: 'right',
                    align: 'center'
                }
            }
        });
    }


    render() {
        return(
            <Container
            logo = {pieChartIcon}
            title = {this.props.title}
            secondaryTitle = {`Based on Payload Data`}
            headerExist = {true}>
                <div style = {{position:'relative', height: '250px'}}>
                    <canvas
                        id={this.props.chartId}
                        ref={this.chartRef}
                    />
                </div>
            
            </Container>
        )
    }
}

export default PayloadPie;