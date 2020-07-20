import React from "react";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserPageMentalBarGraph = ({
    metrics,
}) => {

    //date: Date 
    //currentMood: String
    //balance: Number
    //anxiety: Number
    //notes: String 

    const metricHash = {};
    let sumHashValues = 0;

    for (let i = (metrics.length - 1); i >= 0; i--) {
        if (!metricHash[metrics[i].currentMood]) metricHash[metrics[i].currentMood] = 0;
        metricHash[metrics[i].currentMood] += 1;
        sumHashValues += 1;
    }

    const dateHash = {};

    for (let i = (metrics.length - 1); i >= 0; i--) {
        if (!dateHash[metrics[i].currentMood]) dateHash[metrics[i].currentMood] = [];
        dateHash[metrics[i].currentMood].push(metrics[i].date);
    };

    let currentMoodDataPts = [];

    for (let i = 0; i <= Object.keys(metricHash).length - 1; i++) {
        currentMoodDataPts.push({
            label: Object.keys(metricHash)[i],
            // percent: Math.round(Object.values(metricHash)[i] / sumHashValues * 100),
            y: Object.values(metricHash)[i],
            dataY: `<span style='font-weight: bold; color: blue;'>${Object.values(metricHash)[i]}</span>`,
            allMetricCount: `<span style='color: blue; font-weight: bold;'>${sumHashValues} reported metric(s)</span>`,
            dates: Object.values(dateHash)[i].map(date => " ".concat(new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })))
        })
    };

    const options = {
      // exportEnabled: true,
      animationEnabled: true,
      theme: "light2",
      backgroundColor: "lightblue",
      // axisX: {title: "Mood", reversed: true},
      axisY: {
        // interlacedColor: "rgba(1,77,101,.2)",
        // gridColor: "rgba(1,77,101,.1)",
        title: "Count"
      },
      // legend: {
      //     cursor: "pointer",
      // },
      data: [
        {
          type: "bar",
          // showInLegend: true,
          toolTipContent:
            "{dataY} out of {allMetricCount}. See{dates}",
          legendText: "Reflecting metrics from:{dates}",
          indexLabelFontSize: 16,
          indexLabelFontColor: "white",
          indexLabel: "{label} Count: {y} from{dates}",
          indexLabelPlacement: "inside",

          // color: "#014D65",
          dataPoints: currentMoodDataPts
        }
      ]
    };

    return (
        <div className="userpage-graphs"
        style={{ background: 'lightblue' }}
        >
            <div id="graph-title">Mentals</div>
            <div id="graph-start-date">Current Moods</div>
            <CanvasJSChart options={options} />

        </div>
    );
};

export default UserPageMentalBarGraph;