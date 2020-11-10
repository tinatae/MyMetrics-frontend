import React from "react";
import { FieldColors, AllWhiteIcons, FieldNames, SelectUnits } from '../fields/shared/style_refs';
import "../stylesheets/user-page.css";
import "../stylesheets/fa-icons.css";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserPageSelectHolder = ({ date, name, metrics }) => {

    const betterName = FieldNames[name];
    const color = FieldColors[name];
    const icon = AllWhiteIcons[name];
    const units = SelectUnits[name];

    var runningTotal = 0;
    var runningCount = 0;

    const runningTotalHash = metrics.reduce(function(obj, metric) {
        if (!obj[metric.date]) {
            obj[metric.date] = {runningTotal: 0, runningCount: 0};
        }

        runningTotal += metric.amt;
        runningCount++;
        obj[metric.date].runningTotal = runningTotal;
        obj[metric.date].runningCount = runningCount;
        return obj
    }, {})


    let dps = [];
 
    for (let i = 0; i < metrics.length; i++) {
        dps.push({
            label: new Date(metrics[i].date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' '), 
            dataLabel: `<span style="font-weight: bold;">${new Date(metrics[i].date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</span>`, 
            y: metrics[i].amt,
            unitName: units[0][0].toLowerCase().concat(units[0].slice(1)),
            words: '<span style="font-size: 13px;">Reported Daily Average from</span>',
            metricCount: `<span style="color: blue; font-weight: bold;">${runningTotalHash[metrics[i].date].runningCount} metric(s)</span>`,
            runningAverage: `<span style="font-style: italic; color: darkblue; font-weight: bold;">${(runningTotalHash[metrics[i].date].runningTotal/runningTotalHash[metrics[i].date].runningCount).toFixed(1)} ${units[0][0].toLowerCase().concat(units[0].slice(1))}</span>`,
            startDate: new Date(metrics[0].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
            endDate: new Date(metrics[metrics.length - 1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })
        })
    };
    
    const options = {
        animationEnabled: true,
        theme: "light2",
        backgroundColor: color,
        // backgroundColor: "white",
        colorSet: "black",
        // title: {text: betterName},
        axisX: {title: "Date"},
        // axisY: {title: y},
        axisY: {title: units[0]},
        // axisY: {title: "Servings"},
        legend: {cursor: "pointer"},
        data: [{ type: "line", 
        dataPoints: dps,
        showInLegend: true,

        toolTipContent: "{dataLabel} {words} {metricCount}: {runningAverage}",
        legendText: "Reflecting metrics from: {startDate} - {endDate}",
        indexLabelFontSize: 15,
        indexLabelFontColor: "white",
        indexLabel: "Reported {y} {unitName}",
        indexLabelPlacement: "inside",

        indexLabelMaxWidth: 69,
        indexLabelWrap: true,
    }]
    }

    return (
        <div className="userpage-graphs" style={{ background: `${color}` }}>
            <div id="graph-title">{icon} {betterName}</div>
            <div id="graph-start-date">Start Date: {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).split(',').join('.')}</div> 
            
            <div className="challenge-line-graph">
                <CanvasJSChart options = {options} />
            </div> 
        </div>
    )

};

export default UserPageSelectHolder;