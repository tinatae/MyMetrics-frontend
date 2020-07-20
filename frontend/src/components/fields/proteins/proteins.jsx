import React from "react";
import { withRouter } from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons } from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class Proteins extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amt: "",
      unit: "",
      category: "Protein",
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
          <span>Proteins ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>
        </div>
      );
    } else {
      return (
        <div id="field-logo" onClick={this.exploreCategory(category)}>
          {AllWhiteIcons[category]}
          <span>PROTEINS</span>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let newProtein = {
      date: Date.now,
      user: this.props.currentUser.id,
      username: this.props.currentUser.username,
      category: "Protein",
      amt: this.state.amt,
      unit: this.state.unit,
      makePrivate: this.state.makePrivate
    };

    this.props.createProtein(newProtein)
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
          <button onClick={this.exploreCategory("Protein")}>Explore Page</button>
          &nbsp;or feel free to stay here & fill-out more metrics!
        </div>
      )
    } else if (this.state.filled !== false && this.props.location.pathname === "/protein") {
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
      <div className="protein">
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            {this.showLogo(category)}

            <div id="add-inputs">
              <div>Daily Protein Intake</div>
              <div>
                <input 
                    id="number-input"
                    type="number"
                    value={amt}
                    placeholder="Please Enter Number"
                    onChange={this.update("amt")}
                />

                <select id="unit" name="Unit" value={unit} onChange={this.update("unit")}>
                  <option disabled value=""> - Unit Type - </option>
                  <option value="oz.">oz.</option>
                  <option value="gram">gram(s)</option>
                  <option value="serving">serving(s)</option>
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

export default withRouter(Proteins);
