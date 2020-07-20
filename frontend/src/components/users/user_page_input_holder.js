import React from "react";
import { FieldColors, AllWhiteIcons, FieldNames } from '../fields/shared/style_refs';
import "../stylesheets/user-page.css";
import "../stylesheets/fa-icons.css";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserPageInputHolder = ({ date, name, metrics }) => {
  const betterName = FieldNames[name];
  const color = FieldColors[name];
  const icon = AllWhiteIcons[name];

  const ynHash = {};

  for (let i = 0; i < metrics.length; i++) {
    if (!ynHash[metrics[i].amt]) ynHash[metrics[i].amt] = 0;
    ynHash[metrics[i].amt] += 1;
  }

  const sumYNHashValues = ynHash["Yes"] && ynHash["No"] ? (ynHash["Yes"] + ynHash["No"]) : (ynHash["Yes"] ? (ynHash["Yes"]) : ynHash["No"]);

  const ynDateHash = {};

  for (let i = 0; i < metrics.length; i++) {
    if (!ynDateHash[metrics[i].amt]) ynDateHash[metrics[i].amt] = [];
    ynDateHash[metrics[i].amt].push(metrics[i].date);
  }

  const ynDateNoteHash = {};

  for (let i = 0; i < metrics.length; i++) {
    if (!ynDateNoteHash[metrics[i].amt]) {
      ynDateNoteHash[metrics[i].amt] = [];
      ynDateNoteHash[metrics[i].amt].push(
        `<span style='font-style: italic; color: darkblue; font-weight: bold;'>${metrics[i].amt}</span>
        <br/><span style='font-size: 13px;'>Notes on the Day:</span>
        <br/><span style='font-size: 13px; font-weight: bold;'>${new Date(metrics[i].date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}</span>: <span style='font-size: 13px; font-style: italic; color: blue;'>${metrics[i].unit}</span>`)
    } else {
      ynDateNoteHash[metrics[i].amt].push(`<br/><span style='font-size: 13px; font-weight: bold;'>${new Date(metrics[i].date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}</span>: <span style='font-size: 13px; font-style: italic; color: blue;'>${metrics[i].unit}</span>`)
    }
  };

  let dps = [];

  for (let i = 0; i < Object.keys(ynHash).length; i++) {
    dps.push({
      name: Object.keys(ynHash)[i],
      y: Math.round((Object.values(ynHash)[i] / sumYNHashValues) * 100),
      nameMetricCount: Object.values(ynHash)[i],
      allMetricCount: sumYNHashValues,
      dates: Object.values(ynDateHash)[i].map(date => " ".concat(new Date(date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" }))),
      notes: Object.values(ynDateNoteHash)[i]
    });
  }

  const options = {
    animationEnabled: true,
    cutoutPercentage: 30,
    theme: "light2",
    backgroundColor: color,
    legend: {
      cursor: "pointer"
    },
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        toolTipContent: "{notes}",
        // "Percentage reflecting {nameMetricCount} metric(s) out of {allMetricCount} total metric count",
        legendText: "Reflecting metrics from:{dates}",
        indexLabelFontSize: 16,
        indexLabelFontColor: "white",
        indexLabel: "{name} ({y}%)",
        indexLabelMaxWidth: 120,
        indexLabelWrap: true,

        dataPoints: dps
      }
    ]
  };

  return (
    <div className="userpage-graphs" style={{ background: `${color}` }}>
      <div id="graph-title">
        {icon} {betterName}
      </div>
      <div id="graph-start-date">
        Start Date:{" "}
        {new Date(date)
          .toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric"
          })
          .split(",")
          .join(".")}
      </div>

      <div className="challenge-donut-graph">
        <CanvasJSChart options={options} />
      </div>
    </div>
  );
};;

export default UserPageInputHolder;