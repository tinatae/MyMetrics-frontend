import React from "react";
import '../stylesheets/fa-icons.css';
import "../stylesheets/profile.css";
import {AllColoredIcons, FieldNames} from '../fields/shared/style_refs';

const ProfileChallengeHolder = ({ username, userChallenges }) => {

    const publicChallenges = userChallenges.map(challenge => {
        
        if (challenge.makePrivate !== true) {
            return (
                <div key={challenge._id} id="challenge-holder">
                    <div id="challenge-holder-content">
                        {AllColoredIcons[challenge.name]}
                        <div>{FieldNames[challenge.name]}</div>
                        <div>since {new Date(challenge.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' })}</div>
                    </div>
                </div>
            )
        } else { return null };
        
    });

    const areAllNull = (val) => val === null;

    if ((publicChallenges.length === 0) || (publicChallenges.every(areAllNull))) {
        return (<div id="no-current-challenges">{username} has no Current Challenges</div>)
    } else { return( 
        <div>{publicChallenges}</div> 
    )}
};

export default ProfileChallengeHolder;
