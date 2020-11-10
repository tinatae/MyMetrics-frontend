import React from "react";
import { connect } from "react-redux";
import { fetchAllLearnings, fetchUserLearnings } from "../../../actions/learning_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import LearningsContainer from "./learnings_add_container";
import LearningsEditContainer from './learnings_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class LearningsIndex extends React.Component {
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
    this.props.fetchAllLearnings();

    if (this.props.location.pathname === "/newthing") {
      return (this.props.fetchUserLearnings(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/newthing") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-brain"></i>
            &ensp;L E A R N E D&emsp;S O M E T H I N G&emsp;N E W
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>R E S P O N S E:&emsp;yes&ensp;/&ensp;no</li>
              <li>I N P U T:&emsp;open</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <LearningsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <LearningsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allLearnings !== undefined) {
      return (
        <div id="learning-index">
          <div>{this.indexPage("Learning")}</div>
          {this.props.allLearnings.map(metric => (
            <InputHolder
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
          <i className="fas fa-brain"></i> One moment please while we load
          Learned Something New Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allLearnings: state.learnings.publicLearning,
      currentUser: state.session.user,
      userLearnings: state.learnings.user,
      userToday: state.learnings.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllLearnings: () => dispatch(fetchAllLearnings()),
      fetchUserLearnings: (id) => dispatch(fetchUserLearnings(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(LearningsIndex));