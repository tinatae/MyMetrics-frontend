import React from "react";
import { withRouter } from 'react-router-dom';
import { FieldRoutes, AllWhiteIcons, FieldColors } from '../shared/style_refs';
import '../../stylesheets/add-fields.css';

class Cigarettes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      amt: "",
      unit: "",
      category: "Cigarette",
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
          <span>Cigarettes ({new Date(Date.now()).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')})</span>
        </div>
      );
    } else {
      return (
        <div id="field-logo" onClick={this.exploreCategory(category)}>
          {AllWhiteIcons[category]}
          <span>CIGARETTES</span>
        </div>
      )
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    let newCigarette = {
      date: Date.now,
      user: this.props.currentUser.id,
      username: this.props.currentUser.username,
      category: "Cigarette",
      amt: this.state.amt,
      unit: this.state.unit,
      makePrivate: this.state.makePrivate
    };

    this.props.createCigarette(newCigarette)
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
    if (
      this.state.filled !== false && this.props.location.pathname === "/new_day"
    ) {
      return (
        <div id="ask-routes">
          Metric has been successfully created! Check it out on your&nbsp;
          <button onClick={this.goToProfile(user)}>Profile</button>
          &nbsp;or&nbsp;
          <button onClick={this.exploreCategory("Cigarette")}>
            Explore Page
          </button>
          &nbsp;or feel free to stay here & fill-out more metrics!
        </div>
      );
    } else if (
      this.state.filled !== false && this.props.location.pathname === "/cigs") {
        return (
          <div id="ask-routes">
            Metric has been successfully created! Check it out on your&nbsp;
            <button onClick={this.goToProfile(user)}>Profile</button>
            &nbsp;or feel free to stay here & scroll through more metrics!
          </div>
        );
    } else {
      return null;
    }
  };

  render() {
    const { amt, unit, category } = this.state;

    return (
      <div className="cigarette field-add" style={{backgroundColor: FieldColors["Cigarette"]}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form">
            {this.showLogo(category)}

            <div id="add-inputs">
              <div>Daily Cigarette Count</div>
              <div>
                <select name="Cigarette" value={amt} onChange={this.update("amt")}>
                  <option disabled value="">- Count -</option>
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
                  <option value="10">10 | Half Pack</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20 | Full Pack</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40 | 2 Full Packs</option>
                </select>

                <select id="unit" name="Unit" value={unit} onChange={this.update("unit")}>
                  <option disabled value="">- Unit Type -</option>
                  <option value="cigarette">cigarette(s)</option>
                  <option value="pack">pack(s)</option>
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

export default withRouter(Cigarettes);
