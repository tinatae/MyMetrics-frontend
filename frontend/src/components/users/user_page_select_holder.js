// import React from "react";
// import { FieldColors, AllWhiteIcons, FieldNames } from '../fields/shared/style_refs';
// import "../stylesheets/user-page.css";
// import "../stylesheets/fa-icons.css";
// import CanvasJSReact from '../../canvasjs.react';
// const CanvasJSChart = CanvasJSReact.CanvasJSChart;

// // { date, name, metrics } = props;

// class UserPageSelectHolder extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             graphUnit: ""
//         };

//         this.handleUnit = this.handleUnit.bind(this);
//     }

//     update(field) {
//         return e => this.setState({ [field]: e.currentTarget.value });
//     }

//     handleUnit(category) {
//         switch (category) {
//             case "Alcohol":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="drink">drink(s)</option>
//                         <option value="shot">shot(s)</option>
//                         <option value="bottle">bottle(s)</option>
//                         <option value="serving">serving(s)</option>
//                     </select>
//                 );
//                 break;
//             case "BadFat":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="serving">serving(s)</option>
//                         <option value="item">item(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Caffeine":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="fl. oz.">fl. oz.</option>
//                         <option value="cup">cup(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Carb":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="serving">serving(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Cigarette":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="cigarette">cigarette(s)</option>
//                         <option value="pack">pack(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Exercise":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="minute">min(s)</option>
//                         <option value="hour">hour(s)</option>
//                         <option value="meter">meter(s)</option>
//                         <option value="mile">mile(s)</option>
//                         <option value="time">time(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Fasting":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
//                         <option value="hour">hour(s)</option>
//                     </select>
//                 );
//                 break;
//             case "GoodFat":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value="">- Unit Type -</option>
//                         <option value="serving">serving(s)</option>
//                         <option value="item">item(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Hydration":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value="">- Unit Type -</option>
//                         <option value="cup">cup(s)</option>
//                         <option value="gallon">gallon(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Protein":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="oz.">oz.</option>
//                         <option value="gram">gram(s)</option>
//                         <option value="serving">serving(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Sleep":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value="">- Unit Type - </option>
//                         <option value="hour">hour(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Sugar":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="sweet">sweet(s)</option>
//                         <option value="serving">serving(s)</option>
//                     </select>
//                 );
//                 break;
//             case "Vegetable":
//                 return (
//                     <select value={this.state.graphUnit} onChange={this.update("graphUnit")}>
//                         <option disabled value=""> - Unit Type - </option>
//                         <option value="serving">serving(s)</option>
//                         <option value="vegetable">vegetable(s)</option>
//                     </select>
//                 );
//                 break;
//             default: return console.log("Sorry, category could not be found")
//         }
//     }

//     render() {
//         // category, amt, unit
//         function categoryConversion(name, metric, currentUnit) {

//             switch (name)  {
//                 case "Alcohol": 
//                     if (currentUnit === "") {
//                         // metric.unit === "serving";
//                         return metric.amt;
//                     } else if (currentUnit === "drink")  {
//                         // metric.unit = "drink"
//                         return metric.amt;
//                     } else if (currentUnit === "bottle") {
//                         // metric.unit = "bottle"
//                         return metric.amt;
//                     } else if (currentUnit === "shot") {
//                         // metric.unit = "shot"
//                         return metric.amt;
//                     } else { 
//                         // metric.unit = "serving"
//                         return metric.amt;
//                     }
//                     console.log(metric)
//                     break;
//                 case "Sugar":
//                     if (currentUnit === "sweet") {
//                         return metric.amt
//                      } else { return metric.amt};
//                     break;
//                 default: return console.log("Sorry the category could not be found");
//             }
//         }

//         const {date, name, metrics} = this.props;

//         const betterName = FieldNames[name];
//         const color = FieldColors[name];
//         const icon = AllWhiteIcons[name];

//         const metricHash = {}; // CUMULATIVE SUM FOR EACH UNIQUE DATE-TIME-STAMP
//         const dateHash = {}; // PURE COUNT OF HOW MANY METRICS ADDED FOR EACH UNIQUE DATE-TIME-STAMP
//         let sumHashValues = 0; // RETURNS CUMULATIVE LUMP SUM ONLY

//         for (let i = 0; i < metrics.length; i++) {
//             if (!metricHash[metrics[i].date]) metricHash[metrics[i].date] = 0;
//             if (!dateHash[metrics[i].date]) dateHash[metrics[i].date] = 0;
//             sumHashValues += categoryConversion(name, metrics[i], this.state.graphUnit);
//             metricHash[metrics[i].date] += sumHashValues;

//             dateHash[metrics[i].date] += Object.values(metricHash).length;
//         }

//         for (let i = 0; i < metrics.length; i++) {
//             if (!dateHash[metrics[i].totalCount]) dateHash[metrics[i].totalCount] = [];
//             dateHash[metrics[i].totalCount].push(metrics[i].date);
//         };


//         let dps = [];

//         for (let i = 0; i < metrics.length; i++) {
//             dps.push({
//                 label: new Date(metrics[i].date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' '),
//                 dataLabel: `<span style="font-weight: bold;">${new Date(metrics[i].date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</span>`,
//                 y: metrics[i].amt,
//                 words: '<span style="font-size: 13px;">Reported Daily Average from</span>',
//                 metricCount: `<span style="color: blue; font-weight: bold;">${dateHash[metrics[i].date]} metric(s)</span>`,
//                 runningAverage: `<span style="font-style: italic; color: darkblue; font-weight: bold;">${(metricHash[metrics[i].date] / dateHash[metrics[i].date]).toFixed(1)} servings</span>`,
//                 startDate: new Date(metrics[0].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
//                 endDate: new Date(metrics[metrics.length - 1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
//                 unitLabel: this.state.graphUnit
//             })
//         };

//         var unitLabel = this.state.graphUnit;

//         const options = {
//             animationEnabled: true,
//             theme: "light2",
//             backgroundColor: color,
//             // backgroundColor: "white",
//             colorSet: "black",
//             // title: {text: betterName},
//             axisX: { title: "Date" },
//             axisY: { title: `unitLabel`},
//             // axisY: { title: "Servings" },
//             legend: { cursor: "pointer" },
//             data: [{
//                 type: "line",
//                 dataPoints: dps,
//                 showInLegend: true,

//                 toolTipContent: "{dataLabel} {words} {metricCount}: {runningAverage}",
//                 legendText: "Reflecting metrics from: {startDate} - {endDate}",
//                 indexLabelFontSize: 15,
//                 indexLabelFontColor: "white",
//                 indexLabel: "Reported {y} {unitLabel}",
//                 indexLabelPlacement: "inside",

//                 indexLabelMaxWidth: 69,
//                 indexLabelWrap: true,
//             }]
//         }

//         return (
//             <div className="userpage-graphs" style={{ background: `${color}` }}>
//                 <div id="graph-title">{icon} {betterName}</div>
//                 <div id="graph-start-date">Start Date: {new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }).split(',').join('.')}</div>
//                 {this.handleUnit(name)}
//                 <div className="challenge-line-graph">
//                      <CanvasJSChart options={options} />
//                 </div>
//             </div>
//         )
//     }
// }


// export default UserPageSelectHolder;

import React from "react";
import { FieldColors, AllWhiteIcons, FieldNames } from '../fields/shared/style_refs';
import "../stylesheets/user-page.css";
import "../stylesheets/fa-icons.css";
import CanvasJSReact from '../../canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const UserPageSelectHolder = ({ date, name, metrics }) => {

    const betterName = FieldNames[name];
    const color = FieldColors[name];
    const icon = AllWhiteIcons[name];

    const metricHash = {}; // CUMULATIVE SUM FOR EACH UNIQUE DATE-TIME-STAMP  1/1 
    const dateHash = {}; // PURE COUNT OF HOW MANY METRICS ADDED UP TO UNIQUE DATE-TIME-STAMP. (FOR RUNNING AVERAGE)
    let sumHashValues = 0; // RETURNS CUMULATIVE LUMP SUM ONLY (ALSO FOR RUNNING AVERAGE)

    for (let i = 0; i < metrics.length; i++) {
        if (!metricHash[metrics[i].date]) metricHash[metrics[i].date] = 0;
        if (!dateHash[metrics[i].date]) dateHash[metrics[i].date] = 0;
        sumHashValues += metrics[i].amt;
        metricHash[metrics[i].date] += sumHashValues;
        
        dateHash[metrics[i].date] += Object.values(metricHash).length;
    }

    for (let i = 0; i < metrics.length; i++) {
        if (!dateHash[metrics[i].anxiety]) dateHash[metrics[i].anxiety] = [];
        dateHash[metrics[i].anxiety].push(metrics[i].date);
    };


    let dps = [];
 
    for (let i = 0; i < metrics.length; i++) {
        dps.push({
            label: new Date(metrics[i].date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' '), 
            dataLabel: `<span style="font-weight: bold;">${new Date(metrics[i].date).toLocaleDateString('en-US', {weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</span>`, 
            y: metrics[i].amt,
            words: '<span style="font-size: 13px;">Reported Daily Average from</span>',
            metricCount: `<span style="color: blue; font-weight: bold;">${dateHash[metrics[i].date]} metric(s)</span>`,
            runningAverage: `<span style="font-style: italic; color: darkblue; font-weight: bold;">${(metricHash[metrics[i].date]/dateHash[metrics[i].date]).toFixed(1)} servings</span>`,
            startDate: new Date(metrics[0].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }),
            endDate: new Date(metrics[metrics.length - 1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' })
        })
    };

    console.log(metricHash);
    console.log(dateHash);
    
    const options = {
        animationEnabled: true,
        theme: "light2",
        backgroundColor: color,
        // backgroundColor: "white",
        colorSet: "black",
        // title: {text: betterName},
        axisX: {title: "Date"},
        // axisY: {title: y},
        axisY: {title: "Servings"},
        legend: {cursor: "pointer"},
        data: [{ type: "line", 
        dataPoints: dps,
        showInLegend: true,

        toolTipContent: "{dataLabel} {words} {metricCount}: {runningAverage}",
        legendText: "Reflecting metrics from: {startDate} - {endDate}",
        indexLabelFontSize: 15,
        indexLabelFontColor: "white",
        indexLabel: "Reported {y} servings",
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

