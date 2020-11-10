import React from "react";
import { connect } from "react-redux";
import { fetchAllBadFats, fetchUserBadFats } from "../../../actions/badfat_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import BadFatsContainer from "./badfats_add_container";
import BadFatsEditContainer from './badfats_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class BadFatsIndex extends React.Component {
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
    this.props.fetchAllBadFats();

    if (this.props.location.pathname === "/notsogreatfats") {
      return (this.props.fetchUserBadFats(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/notsogreatfats") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-cloud-meatball"></i>
            &ensp;N O T&emsp;S O&emsp;G R E A T&emsp;F A T S
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;15</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;servings,&ensp;items</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <BadFatsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <BadFatsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allBadFats !== undefined) {
      return (
        <div id="badfat-index">
          <div>{this.indexPage("BadFat")}</div>
          {this.props.allBadFats.map(metric => (
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
          <i className="fas fa-cloud-meatball"></i> One moment please while we
          load Not So Great Fat Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allBadFats: state.badfats.publicBadFat,
      currentUser: state.session.user,
      userBadFats: state.badfats.user,
      userToday: state.badfats.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllBadFats: () => dispatch(fetchAllBadFats()),
      fetchUserBadFats: (id) => dispatch(fetchUserBadFats(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(BadFatsIndex));