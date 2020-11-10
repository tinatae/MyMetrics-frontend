import React from "react";
import { withRouter } from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons, FieldColors} from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class Medications extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amt: "",
            unit: "",
            category: "Medication",
            makePrivate: false,
            filled: false,
        };

        this.showLogo = this.showLogo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.exploreCategory = this.exploreCategory.bind(this);
        this.goToProfile = this.goToProfile.bind(this);
        this.askRoutes = this.askRoutes.bind(this);
    }

    showLogo(category) {
        if (this.props.location.pathname === `/${FieldRoutes[category]}`) {
            return (
                <div id="field-logo">
                    {AllWhiteIcons[category]}
                    <span>Medication ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>        
                </div>
            );
        } else {
            return (
                <div id="field-logo" onClick={this.exploreCategory(category)}>
                    {AllWhiteIcons[category]}
                    <span>MEDICATION</span>
                </div>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let newMedication = {
            date: Date.now,
            user: this.props.currentUser.id,
            username: this.props.currentUser.username,
            category: "Medication",
            amt: this.state.amt,
            unit: this.state.unit,
            makePrivate: this.state.makePrivate
        };

        this.props.createMedication(newMedication)
        .then(() => this.setState({ filled: true }))
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    exploreCategory = (category) => e => {
        this.props.history.push(`/${FieldRoutes[category]}`)
    }

    goToProfile = (user) => e => {
        this.props.history.push(`/profile/${user}`)
    }

    askRoutes(user) {
        if (this.state.filled !== false && this.props.location.pathname === "/new_day") {
            return (
                <div id="ask-routes">
                    Metric has been successfully created! Check it out on your&nbsp;
                    <button onClick={this.goToProfile(user)}>Profile</button>
                    &nbsp;or&nbsp;
                    <button onClick={this.exploreCategory("Medication")}>Explore Page</button>
                    &nbsp;or feel free to stay here & fill-out more metrics!
                </div>
            )
         } else if (this.state.filled !== false && this.props.location.pathname === "/meds") {
            return (
                <div id="ask-routes">
                    Metric has been successfully created! Check it out on your&nbsp;
                    <button onClick={this.goToProfile(user)}>Profile</button>     
                    &nbsp;or feel free to stay here & scroll through more metrics!
                </div>
            )  
        } else { return null }
    };

    render() {
        const { amt, unit, category } = this.state;

        return (
            <div className="medication field-add" style={{backgroundColor: FieldColors["Medication"]}}>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        {this.showLogo(category)}
                        <div id="add-inputs">
                            <div>Did we take our Medicine Today?</div>
                            <div>
                                <select
                                    name="Medications"
                                    value={amt}
                                    onChange={this.update("amt")}>
                                    <option disabled value=""> Yes | No </option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                                
                                <select
                                    id="unit"
                                    name="Unit"
                                    value={unit}
                                    onChange={this.update("unit")}
                                >
                                    <option disabled value=""> - Unit Type - </option>
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

                        <div id="make-private"><span>Make&nbsp;Private</span>
                            <input
                                type="checkbox"
                                value="true"
                                onClick={this.update("makePrivate")}
                            />
                            <input id="submit" type="submit" value="Submit" />
                        </div>   
                    </div>
                </form>
                <div>{this.askRoutes(this.props.currentUser.id)}</div>
            </div>
        );
    }
}

export default withRouter(Medications);