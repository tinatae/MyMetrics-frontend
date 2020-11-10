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

  const ynHash = metrics.reduce(function(obj, metric) {
    obj[metric.amt].count++;
    obj[metric.amt].dates.push(metric.date);
    obj[metric.amt].notes.push(`<br/><span style='font-size: 13px; font-weight: bold;'>${new Date(metric.date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" })}</span>: <span style='font-size: 13px; font-style: italic; color: blue;'>${metric.unit}</span>`)
    return obj
  }, {"Yes": {count: 0, dates: [], notes: ["<span style='font-style: italic; color: darkblue; font-weight: bold;'>Yes</span><br/><span style='font-size: 13px;'>Notes on the Day:</span>"]}, "No": {count: 0, dates: [], notes: ["<span style='font-style: italic; color: darkblue; font-weight: bold;'>No</span><br/><span style='font-size: 13px;'>Notes on the Day:</span>"]}} )

  let dps = [];

  let sumMetrics = ynHash["Yes"].count + ynHash["No"].count

  for (let i = 0; i < Object.keys(ynHash).length; i++) {
    dps.push({
      name: Object.keys(ynHash)[i],
      y: Math.round((Object.values(ynHash)[i].count / sumMetrics) * 100),
      nameMetricCount: Object.values(ynHash)[i].count,
      allMetricCount: sumMetrics,
      dates: Object.values(ynHash)[i].dates.map(date => " ".concat(new Date(date).toLocaleDateString("en-US", { month: "numeric", day: "numeric" }))),
      notes: Object.values(ynHash)[i].notes
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