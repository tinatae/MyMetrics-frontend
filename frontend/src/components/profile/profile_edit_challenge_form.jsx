import React from 'react';
import { withRouter } from 'react-router-dom';
import { AllColoredIcons, FieldNames, FieldColors } from '../fields/shared/style_refs';
import "../stylesheets/profile.css";

class ProfileEditChallengeForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            edited: false
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    update(name) {
        const makeBoolean = { "true": true, "false": false };

        return e => { 
            switch (name) {
                case this.props.userChallenges[0].name:
                    let updatedChallenge1 = {
                        _id: this.props.userChallenges[0]._id,
                        user: this.props.userChallenges[0].user,
                        makePrivate: makeBoolean[e.currentTarget.value]
                    };
                    this.props.editChallenge(updatedChallenge1)
                    .then(() => window.location.reload());
                    break;

                case this.props.userChallenges[1].name:
                    let updatedChallenge2 = {
                        _id: this.props.userChallenges[1]._id,
                        user: this.props.userChallenges[1].user,
                        makePrivate: makeBoolean[e.currentTarget.value]
                    };
                    this.props.editChallenge(updatedChallenge2)
                    .then(() => window.location.reload());
                    break;

                case this.props.userChallenges[2].name:
                    let updatedChallenge3 = {
                        _id: this.props.userChallenges[2]._id,
                        user: this.props.userChallenges[2].user,
                        makePrivate: makeBoolean[e.currentTarget.value]
                    };
                    this.props.editChallenge(updatedChallenge3)
                    .then(() => window.location.reload());
                    break;
                    
                default:
                    return console.log("Sorry, there was an issue updating Challenges");
            }
        }
    };

    handleDelete = (id) => e => {
        this.props.discardChallenge(id)
        .then(() => window.location.reload());  
    };
 

    render() {
        console.log(this.props.userChallenges);

        if (this.props.userChallenges.length === 0) {
            return (
            
            <div id="edit-no-current-challenges">
                <div>Hello, {this.props.username}. Feel free to edit the Privacy status of your Challenges below, or else add a new Challenge!</div>
            </div>) 
            
                } else {

            return (         
                this.props.userChallenges.map(challenge => {       
                return (
                    <div key={challenge._id} id="edit-challenge-holder">
                        <div id="challenge-holder">
                            <div id="challenge-holder-content">
                                <div>
                                    <div id="icon-and-name">
                                        <div>{AllColoredIcons[challenge.name]}</div>
                                        <div style={{color: FieldColors[challenge.name]}}>{FieldNames[challenge.name]}</div>
                                    </div>
                                    <div onClick={this.handleDelete(challenge._id)}><i className="far fa-times-circle"></i></div>
                                </div>
                                <div id="make-private">
                                    <span id="edit-words">Make Private:</span>
                            
                                    <select name="makePrivate" value={challenge.makePrivate} onChange={this.update(challenge.name)} >
                                        <option disabled value=""> - Please Select - </option>
                                        <option value="true">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        )} 
        
    }
};

export default withRouter(ProfileEditChallengeForm);