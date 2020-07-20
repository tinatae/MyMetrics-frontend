import React from "react";
import MentalEditContainer from '../mental/mentals_edit_container';


// date, userId, currentUserId, id, currentMood, balance, anxiety, notes, discardMental
// } => {
class ProfileMentalHolder extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            editMental: false
        }

        this.makeEdits = this.makeEdits.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.nevermindEdit = this.nevermindEdit.bind(this);
    }   

        handleEdit() {
            return e => {
                this.setState({editMental: true})
            }
        };

        handleDelete(id) {
            return e => {
                this.props.discardMental(id)
                .then(() => window.location.reload());
            }
        };

        makeEdits(showEditable) {
            if (this.props.currentUserId === this.props.userId && showEditable === true && (Date.now() - (1 * 24 * 60 * 60 * 1000) <= new Date(this.props.date).getTime())) {
                return (
                    <div id="mental-edits">
                        <div onClick={this.handleEdit()} ><i className="far fa-edit"></i></div>
                        <div onClick={this.handleDelete(this.props.id)} ><i className="far fa-times-circle"></i></div>
                    </div>
                )
            } else if (this.props.currentUserId === this.props.userId && showEditable === true) {
                return (
                    <div id="mental-edits">
                        <div onClick={this.handleDelete(this.props.id)} ><i className="far fa-times-circle"></i></div>
                    </div>
                )
            } else { return null }
        };

        nevermindEdit() {
            return e => {
                this.setState({editMental: false})
            }
        }


        render() {
            return (
                <div>
                    <div id="mental-holder">
                        <div id="top-row">{new Date(this.props.date).toDateString()}{this.makeEdits(this.props.showEditable)}</div>
                        <div><i className="fas fa-cloud"></i> Current Mood: {this.props.currentMood}</div>
                        <div><i className="fas fa-balance-scale"></i> Balance: {this.props.balance}/10</div>
                        <div><i className="fas fa-water"></i> Anxiety: {this.props.anxiety}/10</div>
                        <div>{this.props.notes}</div>                 
                    </div>
                    <div>
                        {this.state.editMental &&
                            <div>
                                <MentalEditContainer id={this.props.id} currentMood={this.props.currentMood} balance={this.props.balance} anxiety={this.props.anxiety} notes={this.props.notes}/>
                                <button id="nm-button" onClick={this.nevermindEdit()}>Close Mental Edit</button>
                            </div>
                        }
                    </div>
                </div>
            )
        }
        
    };


export default ProfileMentalHolder;