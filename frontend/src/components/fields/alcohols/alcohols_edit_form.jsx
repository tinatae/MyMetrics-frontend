import React from 'react';
import {withRouter} from 'react-router-dom';
import { AllColoredIcons } from "../../fields/shared/style_refs";
import "../../stylesheets/add-page.css";

class AlcoholsEditForm extends React.Component {
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
        this.props.fetchAlcohol(this.props.id);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    showTitle() {
        if (this.props.location.pathname === "/new_day") {
            return null
        } else {
            return (<h5 style={{ color: `${this.props.color}` }}>- {this.props.formType} -</h5>) 
        }
    };

    changeLabel() {
        if (this.props.location.pathname === "/new_day") {
            return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Alcohol"]}<span>UPDATE TODAY'S ALCOHOL METRIC</span></div>)
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

        this.props.editAlcohol(updatedMetric)
       .then(() => window.location.reload()); 
    };

    render() {

        return (
            <div className="alcohol-edit">
                <form onSubmit={this.handleSubmit}>
                {this.showTitle()}

                    <div className="form">
                        {this.changeLabel()}
                        <div id="add-edit-inputs">
                            <div>
                                Daily Drink Count
                            </div>
                            <div>
                                <select
                                    name="amt"
                                    value={this.state.amt}
                                    onChange={this.update("amt")}
                                >
                                    <option disabled value="">&nbsp;- Quantity -&nbsp;</option>
                                    <option value="0">0</option>
                                    <option value="1">1 | Single 12 oz. bottle of 5% Beer</option>
                                    <option value="2">2 | Single 12 oz. bottle of 7% Beer</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5 | 750 mL Standard bottle of Wine</option>
                                    <option value="6">6 | 6-pack of Beers (5%)</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9 | 6-pack of Beers (7%)</option>
                                    <option value="10">10 | Full 1.5 L Magnum Bottle of Wine</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17 | Full 750 mL bottle of 40-Proof Spirit</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                </select>

                                <select
                                    id="unit"
                                    name="unit"
                                    value={this.state.unit}
                                    onChange={this.update("unit")}
                                >
                                    <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
                                    <option value="drink">drink(s)</option>
                                    <option value="shot">shot(s)</option>
                                    <option value="bottle">bottle(s)</option>
                                    <option value="serving">serving(s)</option>
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

export default withRouter(AlcoholsEditForm);