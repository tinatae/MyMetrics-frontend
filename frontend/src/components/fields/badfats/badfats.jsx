import React from "react";
import { withRouter } from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons } from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class BadFats extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amt: "",
      unit: "",
      category: "BadFat",
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
          <span>Not So Great Fats ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>
        </div>
      );
    } else {
      return (
        <div id="field-logo" onClick={this.exploreCategory(category)}>
          {AllWhiteIcons[category]}
          <span>NOT SO GREAT FATS</span>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let newBadFat = {
      date: Date.now,
      user: this.props.currentUser.id,
      username: this.props.currentUser.username,
      category: "BadFat",
      amt: this.state.amt,
      unit: this.state.unit,
      makePrivate: this.state.makePrivate
    };

    this.props.createBadFat(newBadFat)
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
          <button onClick={this.exploreCategory("BadFat")}>Explore Page</button>
          &nbsp;or feel free to stay here & fill-out more metrics!
        </div>
      );
    } else if (this.state.filled !== false && this.props.location.pathname === "/notsogreatfats") {
      return (
      <div id="ask-routes">
        Metric has been successfully created! Check it out on your&nbsp;
        <button onClick={this.goToProfile(user)}>Profile</button>     
        &nbsp;or feel free to stay here & scroll through more metrics!
      </div>
      )
    } else {
      return null;
    }
  };

  render() {
    const { amt, unit, category} = this.state;

    return (
      <div className="badfat">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            {this.showLogo(category)}
            <div id="add-inputs">
              <div>Daily 'Not So Great Fat' Count</div>
              <div>
                  <select
                    name="BadFats"
                    value={amt}
                    onChange={this.update("amt")}
                  >
                    <option disabled value="">- Quantity -</option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                  </select>
                  <select
                    id="unit"
                    name="Unit"
                    value={unit}
                    onChange={this.update("unit")}
                  >
                    <option disabled value="">- Unit Type -</option>
                    <option value="serving">serving(s)</option>
                    <option value="item">item(s)</option>
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

export default withRouter(BadFats);
