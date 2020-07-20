import React from "react";
import { withRouter } from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons } from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class Learnings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            amt: "",
            unit: "",
            category: "Learning",
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
                    <span>Learned Something New ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>
                </div>
            );
        } else {
            return (
                <div id="field-logo" onClick={this.exploreCategory(category)}>
                    {AllWhiteIcons[category]}
                    <span>LEARNED SOMETHING NEW</span>
                </div>
            )
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        let newLearning = {
            date: Date.now,
            user: this.props.currentUser.id,
            username: this.props.currentUser.username,
            category: "Learning",
            amt: this.state.amt,
            unit: this.state.unit,
            makePrivate: this.state.makePrivate
        };

        this.props.createLearning(newLearning)
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
                    <button onClick={this.exploreCategory("Learning")}>Explore Page</button>
                    &nbsp;or feel free to stay here & fill-out more metrics!
                </div>
            )
         } else if (this.state.filled !== false && this.props.location.pathname === "/newthing") {
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
            <div className="learning">
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        {this.showLogo(category)}

                        <div id="add-inputs">
                            <div>Did we learn something new today?</div>
                            <div>
                                <select
                                    name="Learnings"
                                    value={amt}
                                    onChange={this.update("amt")}>
                                    <option disabled value="">&nbsp;Yes | No&nbsp;</option>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>

                                <input id="textbox"
                                    type="text"
                                    value={unit}
                                    placeholder="What did you learn! We're all ears"
                                    onChange={this.update("unit")}
                                />
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

export default withRouter(Learnings);