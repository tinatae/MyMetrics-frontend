import React from 'react';
import { withRouter } from "react-router-dom";
import "../../stylesheets/add-page.css";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class DrugsEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amt: this.props.amt,
            unit: this.props.unit,
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showTitle = this.showTitle.bind(this);
        this.changeLabel = this.changeLabel.bind(this);
    }

    componentDidMount() {
        this.props.fetchDrug(this.props.id);
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
            return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Drug"]}<span>UPDATE TODAY'S REC. DRUG METRIC</span></div>)
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

        this.props.editDrug(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
            <div className="drug-edit">
                <form onSubmit={this.handleSubmit}>
                    {this.showTitle()}

                    <div className="form">       
                        {this.changeLabel()}

                        <div id="add-edit-inputs"> 
                            <div>Did you use or take recreational drugs today?</div>
                            <div>
                                <select
                                    name="amt"
                                    value={this.state.amt}
                                    onChange={this.update("amt")}>
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
                                    <option disabled value="">&nbsp;- Quantity -&nbsp;</option>
                                    <option value="A little">A little</option>
                                    <option value="Just enough">Just enough</option>
                                    <option value="Too much">Too much</option>
                                    <option value="Didn't touch">Didn't touch</option>
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

export default withRouter(DrugsEditForm);