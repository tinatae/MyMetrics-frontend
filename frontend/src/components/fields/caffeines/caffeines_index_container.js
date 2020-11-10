import React from "react";
import { connect } from "react-redux";
import { fetchAllCaffeines, fetchUserCaffeines } from "../../../actions/caffeine_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import CaffeinesContainer from "./caffeines_add_container";
import CaffeinesEditContainer from './caffeines_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class CaffeinesIndex extends React.Component {
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
    this.props.fetchAllCaffeines();

    if (this.props.location.pathname === "/caffeine") {
      return (this.props.fetchUserCaffeines(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/caffeine") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-coffee"></i>
            &ensp;C A F F E I N E
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;12</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;fl. oz.,&ensp;cups</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <CaffeinesContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <CaffeinesEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allCaffeines !== undefined) {
      return (
        <div id="caffeine-index">
          <div>{this.indexPage("Caffeine")}</div>
          {this.props.allCaffeines.map(metric => (
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
          <i className="fas fa-coffee"></i> One moment please while we load
          Caffeine Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
        allCaffeines: state.caffeines.publicCaffeine,
        currentUser: state.session.user,
        userCaffeines: state.caffeines.user,
        userToday: state.caffeines.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllCaffeines: () => dispatch(fetchAllCaffeines()),
      fetchUserCaffeines: (id) => dispatch(fetchUserCaffeines(id))       
    };
};

export default withRouter(connect(mSTP, mDTP)(CaffeinesIndex));