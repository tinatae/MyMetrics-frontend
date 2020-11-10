import React from "react";
import { connect } from "react-redux";
import { fetchAllSleeps, fetchUserSleeps } from "../../../actions/sleep_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import SleepsContainer from "./sleeps_add_container";
import SleepsEditContainer from './sleeps_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class SleepsIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addOpen: false
    };

    this.indexPage = this.indexPage.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.closeAdd = this.closeAdd.bind(this);
  }

  componentDidMount() {
    this.props.fetchAllSleeps();

    if (this.props.location.pathname === "/sleep") {
      return (this.props.fetchUserSleeps(this.props.currentUser.id))
    } else {
      return null
    }
  }

  handleAdd(e) {
    e.preventDefault();
    this.setState({ addOpen: true });
  }

  closeAdd(e) {
    e.preventDefault();
    window.location.reload();
  }

  indexPage(categoryName) {
    if (this.props.location.pathname === "/sleep") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-bed"></i>
            &ensp;S L E E P
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;24</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;hours</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <SleepsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <SleepsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    if (this.props.allSleeps !== undefined) {
      return (
        <div id="sleep-index">
          <div>{this.indexPage("Sleep")}</div>
          {this.props.allSleeps.map(metric => (
            <SelectHolder
              key={metric._id}
              date={metric.date}
              user={metric.user}
              username={metric.username}
              category={metric.category}
              amt={metric.amt}
              unit={metric.unit}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <i className="fas fa-bed"></i> One moment please while we load Sleep
          Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allSleeps: state.sleeps.publicSleep,
      currentUser: state.session.user,
      userSleeps: state.sleeps.user,
      userToday: state.sleeps.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllSleeps: () => dispatch(fetchAllSleeps()),
      fetchUserSleeps: (id) => dispatch(fetchUserSleeps(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(SleepsIndex));