import React from "react";

// import "../stylesheets/fa-icons.css";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;


const UserPageMentalLineGraph = ({
    metrics,
}) => {

    let balanceDataPts = [];

    // console.log(metrics[metrics.length-1].date); RETURNS OLDEST DATE
    // console.log(metrics[0].date); // RETURNS MOST RECENT METRIC DATE

    for (let i = metrics.length-1; i >= 0; i--) {
        balanceDataPts.push({ 
            label: new Date(metrics[i].date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join('.'), 
            dataLabel: `<span style="font-weight: bold;">${new Date(metrics[i].date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join('.')}</span> <span style="font-size: 13px;">Notes from the Day:</span>`, 
            y: metrics[i].balance,
            mood: metrics[i].currentMood,
            notes: `<span style="font-style: italic; color: blue;">${metrics[i].notes}</span>`,
            startDate: new Date(metrics[metrics.length-1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
            endDate: new Date(metrics[0].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })
        })
    };

    const balanceOptions = {
      animationEnabled: true,
      theme: "light2",
      backgroundColor: "lightblue",
      colorSet: "black",
      axisX: { title: "Date" },
      axisY: { title: "Balance (Out of 10)" },
      legend: { cursor: "pointer" },
      data: [
        {
          type: "line",
          dataPoints: balanceDataPts,
          showInLegend: true,

          toolTipContent: '{dataLabel}<br/>{notes}',
          legendText: "Reflecting metrics from: {startDate} - {endDate}",
          indexLabelFontSize: 16,
          indexLabelFontColor: "white",
          indexLabel: "Reported {y} out of 10",
          indexLabelPlacement: "inside",

          indexLabelMaxWidth: 69,
          indexLabelWrap: true
        }
      ]
    };

    return (
        <div className="userpage-graphs"
        style={{ background: 'lightblue'}}
        >
            <div id="graph-title">Mentals</div>
            <div id="graph-start-date">Balance</div>
            <CanvasJSChart options={balanceOptions} />
        </div>
    );
};

export default UserPageMentalLineGraph;