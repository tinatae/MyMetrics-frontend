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

    var sumMoodCount = 0;

    const countAndDateHash = metrics.reduce(function(obj, metric) {
      if (!obj[metric.currentMood]) {
        obj[metric.currentMood] = {moodCount: 0, dates: []}
      }

      obj[metric.currentMood].moodCount++;
      obj[metric.currentMood].dates.push(metric.date)
      sumMoodCount++;
      return obj;

    }, {})

    let currentMoodDataPts = [];

    for (let i = 0; i < sumMoodCount; i++) {
        currentMoodDataPts.push({
            label: Object.keys(countAndDateHash)[i],
            y: Object.values(countAndDateHash)[i].moodCount,
            dataY: `<span style='font-weight: bold; color: blue;'>${Object.values(countAndDateHash)[i].moodCount}</span>`,
            allMetricCount: `<span style='color: blue; font-weight: bold;'>${sumMoodCount} reported metric(s)</span>`,
            dates: Object.values(countAndDateHash)[i].dates.map(date => " ".concat(new Date(date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })))
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