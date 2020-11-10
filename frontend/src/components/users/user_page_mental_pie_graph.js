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

    var sumMetricCount = 0;

    const countAndDateHash = metrics.reduce(function(obj, metric) {
        if (!obj[metric.anxiety]) {
            obj[metric.anxiety] = {count: 0, dates: []}
        }
        obj[metric.anxiety].count++;
        obj[metric.anxiety].dates.push(metric.date)
        sumMetricCount++;
        return obj;
    }, {})

    let anxietyDataPts = [];

    for (let i = 0; i < sumMetricCount; i++) {
        anxietyDataPts.push({ 
            name: Object.keys(countAndDateHash)[i], 
            y: Math.round(Object.values(countAndDateHash)[i].count / sumMetricCount * 100), 
            nameMetricCount: `<span style='color: blue; font-weight: bold;'>${Object.values(countAndDateHash)[i].count}</span>`,
            allMetricCount: `<span style='color: blue; font-weight: bold;'>${sumMetricCount} total reported metric(s)</span>`,
            dates: Object.values(countAndDateHash)[i].dates.map(date => " ".concat(new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }))) 
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