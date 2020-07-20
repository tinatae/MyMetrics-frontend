import React from "react";
import "../../stylesheets/index-page.css";
import {SelectIcons, FieldNames, FieldColors, FieldRoutes} from './style_refs';
import {useHistory} from 'react-router-dom';

const SelectHolder = ({ date, category, user, username, amt, unit }) => {
    const pic = SelectIcons[category];
    const name = FieldNames[category];
    const color = FieldColors[category];
    const route = FieldRoutes[category];

    function checkPlural(amt, unit) {
        if (amt === 0 && unit !== "fl. oz." && unit !== "oz.") {
            return unit.concat("s")
        } else if (amt > 1 && unit !== "fl. oz." && unit !== "oz.") { 
            return unit.concat("s") 
        } else {
            return unit
        }
    };

    function checkYN(amt) {
        if (amt === "Yes" || amt === "No") {
            return amt.concat(".")      
        } else { return amt}
    }

    let history = useHistory();

    const handleClick = (user) => e => {
        history.push(`/profile/${user}`);
    };  

    const exploreCategory = (category) => e => {
        history.push(`/${route}`)
    }

    return (
        <div className="select-holder">
            <div style={{ background: `${color}` }} id="select-holder-content">
                <div id="select-content">
                    <div onClick={exploreCategory(category)} id="field-icon">{pic} {name}</div>
                    <div id="date-section">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric'}).split(',').join(' ')}</div>     
                    <div id="result">{checkYN(amt)} {checkPlural(amt, unit)}</div>
                    <div id="user-icon" onClick={handleClick(user)} ><span>{username}</span><i className="fa fa-user-circle"></i></div>
                </div>
           
                
            </div>
        </div>
    )
}

export default SelectHolder;


   
