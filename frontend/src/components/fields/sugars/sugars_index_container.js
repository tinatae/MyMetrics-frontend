import React from "react";
import { connect } from "react-redux";
import { fetchAllSugars, fetchUserSugars} from "../../../actions/sugar_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import SugarsContainer from "./sugars_container";
import SugarsEditContainer from './sugars_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class SugarsIndex extends React.Component {
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
    this.props.fetchAllSugars();

    if (this.props.location.pathname === "/sugar") {
      return (this.props.fetchUserSugars(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/sugar") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="fas fa-cookie-bite"></i>
            &ensp;S U G A R
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;12</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;sweets,&ensp;servings</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <SugarsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <SugarsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allSugars !== undefined) {
      return (
        <div id="sugar-index">
          <div>{this.indexPage()}</div>
          {this.props.allSugars.map(metric => (
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
          <i className="fas fa-cookie-bite"></i> One moment please while we load
          Sugar Metrics
        </div>
      );
    }
  }
};


const mSTP = state => {
    return {
      allSugars: state.sugars.publicSugar,
      currentUser: state.session.user,
      userSugars: state.sugars.user,
      userToday: state.sugars.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllSugars: () => dispatch(fetchAllSugars()),
      fetchUserSugars: (id) => dispatch(fetchUserSugars(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(SugarsIndex));
