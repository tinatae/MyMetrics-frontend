import React from "react";
import { withRouter } from "react-router-dom";
import '../stylesheets/add-page.css';

class Mentals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentMood: "",
      balance: "",
      anxiety: "",
      notes: "",
      makePrivate: false,
      filled: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.askRoutes = this.askRoutes.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let newMental = {
      date: Date.now,
      user: this.props.currentUser.id,
      category: "Mental",
      currentMood: this.state.currentMood,
      balance: this.state.balance,
      anxiety: this.state.anxiety,
      notes: this.state.notes,
      makePrivate: this.state.makePrivate
    };

    this.props.createMental(newMental)
    .then(() => this.setState({ filled: true }));
  }

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  goToProfile = user => e => {
    this.props.history.push(`/profile/${user}`);
  };

  askRoutes(user) {
    if (this.state.filled !== false) { 
        return (
        <div id="ask-routes">
            Today's mental metric has been successfully recorded! Feel free to check it out on your&nbsp;
            <button onClick={this.goToProfile(user)}>Profile</button>
            &nbsp;or stay on this page to fill-out more metrics!
        </div>
    )} else { return null };
  }

  render() {
    const { currentMood, balance, anxiety, notes } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <div id="mental-form-title">
            M E N T A L&emsp;C H E C K&ensp;-&ensp;I N
          </div>
          <div className="mental-form">
            <div id="mental-qs">
              <h3>How are we feeling today?</h3>
              <select
                name="Mental"
                value={currentMood}
                onChange={this.update("currentMood")}
              >
                <option disabled value="">
                  {" "}
                  - Please select from menu -{" "}
                </option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Upset">Upset</option>
                <option value="Inspired">Inspired</option>
                <option value="Tired">Tired</option>
                <option value="Confused">Confused</option>
                <option value="Productive">Productive</option>
                <option value="Unproductive">Unproductive</option>
                <option value="Neutral">Not Any Particular Way</option>
              </select>
            </div>

            <div id="mental-qs">
              <h3>How Balanced do we Feel?</h3>
              <h4>(1 = Not at all | 10 = Extremely Well-Balanced)</h4>
              <select
                name="Balance"
                value={balance}
                onChange={this.update("balance")}
              >
                <option disabled value="">
                  - Please Rate out of 10 -
                </option>
                <option value="1">1 | Not at all</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 | Kinda Balanced</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 | Extremely Well-Balanced</option>
              </select>
            </div>

            <div id="mental-qs">
              <h3>How Anxious do we feel?</h3>
              <h4>(1 = Not At All | 10 = Extremely Anxious)</h4>
              <select
                name="Anxiety"
                value={anxiety}
                onChange={this.update("anxiety")}
              >
                <option disabled value="">
                  - Please Rate out of 10 -
                </option>
                <option value="1">1 | Not At All</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 | Kinda Anxious</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10 | Extremely Anxious</option>
              </select>
            </div>

            <div id="mental-qs">
              <h3>Notes on the Day</h3>
                <input
                  id="notes"
                  type="Notes"
                  value={notes}
                  onChange={this.update("notes")}
                />
            </div>
            
          
              <div id="submit-section">     
                  <span>
                    Make&nbsp;Today's&nbsp;Mental&nbsp;Metric&nbsp;Private
                  </span>
                  <input
                    type="checkbox"
                    value="true"
                    onClick={this.update("makePrivate")}
                  />
              </div>
           
              <div>
                <input id="submit-button" type="submit" value="Submit" />
              </div>
          </div>
        </form>
        <div>{this.askRoutes(this.props.currentUser.id)}</div>
      </div>
    );
  }
}

export default withRouter(Mentals);