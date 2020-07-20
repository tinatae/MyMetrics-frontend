import React from 'react';

class MentalsEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMood: this.props.currentMood,
            balance: this.props.balance,
            anxiety: this.props.anxiety,
            notes: this.props.notes,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let updatedMental = {
            _id: this.props.id,
            currentMood: this.state.currentMood,
            balance: this.state.balance,
            anxiety: this.state.anxiety,
            notes: this.state.notes,
        }

        this.props.editMental(updatedMental)
            .then(() => window.location.reload());
    };

    render() {

        return (
            <div className="mental-edit-section">
                <form onSubmit={this.handleSubmit}>

                    <div id="mental-qs">
                        <h3>How are we feeling today?</h3>
                        <select
                            name="Mental"
                            value={this.state.currentMood}
                            onChange={this.update("currentMood")}
                        >
                            <option disabled value="">{" "}- Please select from menu -{" "}</option>
                            <option value="Happy">Happy</option>
                            <option value="Sad">Sad</option>
                            <option value="Upset">Upset</option>
                            <option value="Inspired">Inspired</option>
                            <option value="Tired">Tired</option>
                            <option value="Confused">Confused</option>
                            <option value="Productive">Productive</option>
                            <option value="Unproductive">Unproductive</option>
                            <option value="Neutral">Not Any Particular Way</option>
                        </select>
                    </div>

                    <div id="mental-qs">
                        <h3>How Balanced do we Feel?</h3>
                        <h4>(1 = Not at all | 10 = Extremely Well-Balanced)</h4>
                        <select
                            name="Balance"
                            value={this.state.balance}
                            onChange={this.update("balance")}
                        >
                            <option disabled value="">- Please Rate out of 10 -</option>
                            <option value="1">1 | Not at all</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 | Kinda Balanced</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10 | Extremely Well-Balanced</option>
                        </select>
                    </div>

                    <div id="mental-qs">
                        <h3>How Anxious do we feel?</h3>
                        <h4>(1 = Not At All | 10 = Extremely Anxious)</h4>
                        <select
                            name="Anxiety"
                            value={this.state.anxiety}
                            onChange={this.update("anxiety")}
                        >
                            <option disabled value="">- Please Rate out of 10 -</option>
                            <option value="1">1 | Not At All</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5 | Kinda Anxious</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10 | Extremely Anxious</option>
                        </select>
                    </div>

                    <div id="mental-qs">
                        <h3>Notes on the Day</h3>
                        <input
                            id="notes"
                            type="Notes"
                            value={this.state.notes}
                            onChange={this.update("notes")}
                        />
                    </div>                   

                    <div><input id="edit-button" type="submit" value="Update Metric" /></div>
                    
                </form>
            </div>
        );
    }
}

export default MentalsEditForm;