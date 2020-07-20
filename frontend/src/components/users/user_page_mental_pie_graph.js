import React from "react";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserPageMentalPieGraph = ({
    metrics,
}) => {
    //date: Date 
    //currentMood: String
    //balance: Number
    //anxiety: Number
    //notes: String 

    const metricHash = {};
    let sumHashValues = 0;

    for (let i = metrics.length-1; i >= 0; i--) {
        if (!metricHash[metrics[i].anxiety]) metricHash[metrics[i].anxiety] = 0;
        metricHash[metrics[i].anxiety] += 1;
        sumHashValues += 1;
    }

    const dateHash = {};

    for (let i = metrics.length-1; i >= 0; i--) {
        if (!dateHash[metrics[i].anxiety]) dateHash[metrics[i].anxiety] = [];
        dateHash[metrics[i].anxiety].push(metrics[i].date);
    };

    let anxietyDataPts = [];

    for (let i = 0; i <= Object.keys(metricHash).length - 1; i++) {
        anxietyDataPts.push({ 
            name: Object.keys(metricHash)[i], 
            y: Math.round(Object.values(metricHash)[i] / sumHashValues * 100), 
            nameMetricCount: `<span style='color: blue; font-weight: bold;'>${Object.values(metricHash)[i]}</span>`,
            allMetricCount: `<span style='color: blue; font-weight: bold;'>${sumHashValues} total reported metric(s)</span>`,
            dates: Object.values(dateHash)[i].map(date => " ".concat(new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }))) 
        })
    };

    const anxietyOptions = {
        animationEnabled: true,
        theme: "light2",
        backgroundColor: "lightblue",
        legend: {
            cursor: "pointer",
            // itemclick: showDetail,
        },
        data: [{
            type: "doughnut",
            showInLegend: true,
            toolTipContent: "Percentage reflects {nameMetricCount} out of {allMetricCount}",
            legendText: "Reflecting metrics from:{dates}",
            indexLabelFontSize: 16,
            indexLabelFontColor: "white",
            indexLabel: "{name} out of 10 ({y}%)",
            // indexLabelPlacement: "inside",

            indexLabelMaxWidth: 120,
            indexLabelWrap: true,

            dataPoints: anxietyDataPts
        }]
    };

    return (
        <div className="userpage-graphs"
        style={{ background: 'lightblue' }}
        >
    
            <div id="graph-title">Mentals</div>
            <div id="graph-start-date">Anxiety</div>
            <CanvasJSChart options={anxietyOptions} />
          
        </div>
    );
};

export default UserPageMentalPieGraph;


// function explodePie(e) {
//     if (typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
//         e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
//     } else {
//         e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
//     }
//     e.chart.render();

// }