import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class LearningsEditForm extends React.Component {
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
        this.props.fetchLearning(this.props.id);
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
            return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Learning"]}<span>UPDATE TODAY'S<br/>LEARNED SOMETHING NEW METRIC</span></div>)
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

        this.props.editLearning(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
            <div className="learning-edit">
                <form onSubmit={this.handleSubmit}>
                    {this.showTitle()}

                    <div className="form">

                        {/* <i className="fas fa-brain"></i> */}
       
                        {this.changeLabel()}
                        <div id="add-edit-inputs">
                            <div>Did we learn something new today?</div>
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

                                <input id="textbox"
                                    type="text"
                                    value={this.state.unit}
                                    placeholder="What did you learn! We're all ears"
                                    onChange={this.update("unit")}
                                />
                            </div>

                        </div>

                        <div><input id="edit-button" type="submit" value="Update Metric" /></div>
                    </div>
                </form>
            </div>

        );
    }
}

export default withRouter(LearningsEditForm);