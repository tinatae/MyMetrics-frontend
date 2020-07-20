import React from "react";
import {withRouter} from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons} from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class Alcohols extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amt: "",
      unit: "",
      category: "Alcohol",
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
          <span>Alcohol ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>
        </div>
      );
    } else {
      return (
        <div id="field-logo" onClick={this.exploreCategory(category)}>
          {AllWhiteIcons[category]}
          <span>ALCOHOL</span>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let newAlcohol = {
      date: Date.now,
      user: this.props.currentUser.id,
      username: this.props.currentUser.username,
      category: "Alcohol",
      amt: this.state.amt,
      unit: this.state.unit,
      makePrivate: this.state.makePrivate,
    }

    this.props.createAlcohol(newAlcohol)
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
          <button onClick={this.exploreCategory("Alcohol")}>Explore Page</button>
          &nbsp;or feel free to stay here & fill-out more metrics!
        </div>
      )
    } else if (this.state.filled !== false && this.props.location.pathname === "/alcohol") {
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
      <div className="alcohol">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            {this.showLogo(category)}
            <div id="add-inputs">
              <div id="daily">Daily Drink Count</div>
              <div>
                <select name="Alcohol" value={amt} onChange={this.update("amt")}>
                  <option disabled value="">
                    - Quantity -
                  </option>
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
                  <option value="10">
                    10 | Full 1.5 L Magnum Bottle of Wine
                  </option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">
                    17 | Full 750 mL bottle of 40-Proof Spirit
                  </option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                </select>

                <select
                  id="unit"
                  name="Unit"
                  value={unit}
                  onChange={this.update("unit")}
                >
                  <option disabled value="">
                    - Unit Type -
                  </option>
                  <option value="drink">drink(s)</option>
                  <option value="shot">shot(s)</option>
                  <option value="bottle">bottle(s)</option>
                  <option value="serving">serving(s)</option>
                </select>
              </div>
            </div>

            <div id="make-private">
              <span>Make&nbsp;Private</span>
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

export default withRouter(Alcohols);
