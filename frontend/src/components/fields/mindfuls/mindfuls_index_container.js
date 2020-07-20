import React from "react";
import { connect } from "react-redux";
import { fetchAllMindfuls, fetchUserMindfuls } from "../../../actions/mindful_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import MindfulsContainer from "./mindfuls_container";
import MindfulsEditContainer from './mindfuls_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class MindfulsIndex extends React.Component {
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
    this.props.fetchAllMindfuls();

    if (this.props.location.pathname === "/mindfulness") {
      return (this.props.fetchUserMindfuls(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/mindfulness") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="fas fa-stroopwafel"></i>
            &ensp;M I N D F U L N E S S
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
                <MindfulsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <MindfulsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allMindfuls !== undefined) {
      return (
        <div id="mindful-index">
          <div>{this.indexPage()}</div>
          {this.props.allMindfuls.map(metric => (
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
          <i className="fas fa-stroopwafel"></i> One moment please while we load
          Mindfulness/Meditation Metrics
        </div>
      );
    }
  }
}

const mSTP = state => {
    return {
      allMindfuls: state.mindfuls.publicMindful,
      currentUser: state.session.user,
      userMindfuls: state.mindfuls.user,
      userToday: state.mindfuls.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllMindfuls: () => dispatch(fetchAllMindfuls()),
      fetchUserMindfuls: (id) => dispatch(fetchUserMindfuls(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(MindfulsIndex));