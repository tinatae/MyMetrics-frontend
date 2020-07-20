import React from "react";
import { connect } from "react-redux";
import { fetchAllDrugs, fetchUserDrugs } from "../../../actions/drug_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import DrugsContainer from "./drugs_container";
import DrugsEditContainer from './drugs_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class DrugsIndex extends React.Component {
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
    this.props.fetchAllDrugs();

    if (this.props.location.pathname === "/recdrugs") {
      return (this.props.fetchUserDrugs(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/recdrugs") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="fas fa-dice-d20"></i>
            &ensp;R E C R E A T I O N A L&emsp;D R U G S
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>R E S P O N S E:&emsp;yes&ensp;/&ensp;no</li>
              <li>
                I N P U T:&emsp;A little,&ensp;Just enough,&ensp;Too
                much,&ensp;Didn't touch
              </li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <DrugsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <DrugsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allDrugs !== undefined) {
      return (
        <div id="drug-index">
          <div>{this.indexPage()}</div>
          {this.props.allDrugs.map(metric => (
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
          <i className="fas fa-dice-d20"></i> One moment please while we load
          Recreational Drug Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allDrugs: state.drugs.publicDrug,
      currentUser: state.session.user,
      userDrugs: state.drugs.user,
      userToday: state.drugs.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllDrugs: () => dispatch(fetchAllDrugs()),
      fetchUserDrugs: (id) => dispatch(fetchUserDrugs(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(DrugsIndex));