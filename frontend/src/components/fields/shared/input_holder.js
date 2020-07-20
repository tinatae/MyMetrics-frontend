import React from "react";
import "../../stylesheets/index-page.css";
import { InputIcons, FieldNames, FieldColors, FieldRoutes } from './style_refs';
import { useHistory } from 'react-router-dom';

const InputHolder = ({
    date, category, user, username, amt, unit
}) => {
  
    const pic = InputIcons[category];
    const name = FieldNames[category];
    const color = FieldColors[category];
    const route = FieldRoutes[category];

    let history = useHistory();

    const handleClick = (user) => e => {
        history.push(`/profile/${user}`);
    };

    const exploreCategory = (category) => e => {
        history.push(`/${route}`)
    }

    return (
        <div className="input-holder">
            <div style={{ background: `${color}` }} id="input-holder-content">
                <div id="input-content"> 
                    <div onClick={exploreCategory(category)} id="field-icon">{pic} {name}</div>
                    <div id="date-section">{new Date(date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</div>            
                    <div id="input-text">{amt}. {unit}</div>
                    <div id="user-icon" onClick={handleClick(user)} ><span>{username}</span><i className="fa fa-user-circle"></i></div>
                </div>

                
                
            </div>
        </div>
    )
}

export default InputHolder;