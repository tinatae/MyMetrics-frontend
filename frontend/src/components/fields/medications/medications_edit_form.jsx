import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class MedicationsEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          amt: this.props.amt,
          unit: this.props.unit
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showTitle = this.showTitle.bind(this);
        this.changeLabel = this.changeLabel.bind(this);
    }

    componentDidMount() {
        this.props.fetchMedication(this.props.id);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    showTitle() {
        if (this.props.location.pathname === "/new_day") {
            return null
        } else { return (<h5 style={{ color: `${this.props.color}` }}>- {this.props.formType} -</h5>) 
        }
    };

    changeLabel() {
        if (this.props.location.pathname === "/new_day") {
            return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Medication"]}<span>UPDATE TODAY'S MEDICATION METRIC</span></div>)
        } else { return (<div id="from" style={{ color: `${this.props.color}` }}>from&nbsp;{new Date(this.props.date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</div>) 
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let updatedMetric = {
            _id: this.props.id,
            amt: this.state.amt,
            unit: this.state.unit
        }

        this.props.editMedication(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
            <div className="medication-edit">
                <form onSubmit={this.handleSubmit}>
                    {this.showTitle()}

                    <div className="form">

                        {/* <i className="fas fa-prescription"></i> */}
    
                        {this.changeLabel()}
                        <div id="add-edit-inputs">
                            <div>Did we take our Medicine Today?</div>
                            <div>
                                <select
                                    name="amt"
                                    value={this.state.amt}
                                    onChange={this.update("amt")}
                                >
                                    <option disabled value="">&nbsp;Yes | No&nbsp;</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                <select
                                    id="unit"
                                    name="Unit"
                                    value={this.state.unit}
                                    onChange={this.update("unit")}
                                >
                                    <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
                                        <option value="My pill">My Pill</option>
                                        <option value="My pills">My Pills</option>
                                        <option value="My shot">My Shot</option>
                                        <option value="My shots">My Shots</option>
                                        <option value="My tonic">My Tonic</option>
                                        <option value="My tonics">My Tonics</option>
                                        <option value="My medicine">My Medicine</option>
                                        <option value="skipped">Skipped Today</option>
                                        <option value="not applicable">Not Applicable</option>
                                </select>
                            </div>
                        </div>

                        <div><input id="edit-button" type="submit" value="Update Metric" /></div>
                    </div>
                </form>
            </div>

        );
    }
}

export default withRouter(MedicationsEditForm);