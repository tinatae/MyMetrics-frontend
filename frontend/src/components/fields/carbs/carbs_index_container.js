import React from "react";
import { connect } from "react-redux";
import { fetchAllCarbs, fetchUserCarbs } from "../../../actions/carb_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import CarbsContainer from "./carbs_container";
import CarbsEditContainer from './carbs_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class CarbsIndex extends React.Component {
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
    this.props.fetchAllCarbs();

    if (this.props.location.pathname === "/carbs") {
      return (this.props.fetchUserCarbs(this.props.currentUser.id))
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

  indexPage() {
    if (this.props.location.pathname === "/carbs") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="fas fa-bread-slice"></i>
            &ensp;C A R B S
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;12</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;servings</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <CarbsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <CarbsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allCarbs !== undefined) {
      return (
        <div id="carb-index">
          <div>{this.indexPage()}</div>
          {this.props.allCarbs.map(metric => (
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
          <i className="fas fa-bread-slice"></i> One moment please while we load
          Carb Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allCarbs: state.carbs.publicCarb,
      currentUser: state.session.user,
      userCarbs: state.carbs.user,
      userToday: state.carbs.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllCarbs: () => dispatch(fetchAllCarbs()),
      fetchUserCarbs: (id) => dispatch(fetchUserCarbs(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(CarbsIndex));