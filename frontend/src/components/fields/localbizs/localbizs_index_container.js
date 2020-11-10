import React from "react";
import { connect } from "react-redux";
import { fetchAllLocalBizs, fetchUserLocalBizs } from "../../../actions/localbiz_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import LocalBizsContainer from "./localbizs_add_container";
import LocalBizsEditContainer from './localbizs_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class LocalBizsIndex extends React.Component {
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
    this.props.fetchAllLocalBizs();

    if (this.props.location.pathname === "/localbiz") {
      return (this.props.fetchUserLocalBizs(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/localbiz") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-store-alt"></i>
            &ensp;L O C A L&emsp;B U S I N E S S
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
                <LocalBizsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <LocalBizsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allLocalBizs !== undefined) {
      return (
        <div id="localbiz-index">
          <div>{this.indexPage("LocalBiz")}</div>
          {this.props.allLocalBizs.map(metric => (
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
          <i className="fas fa-store-alt"></i> One moment please while we load
          Supported Local Business Metrics
        </div>
      );
    }
  }
}


const mSTP = state => {
    return {
      allLocalBizs: state.localbizs.publicLocalBiz,
      currentUser: state.session.user,
      userLocalBizs: state.localbizs.user,
      userToday: state.localbizs.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllLocalBizs: () => dispatch(fetchAllLocalBizs()),
      fetchUserLocalBizs: (id) => dispatch(fetchUserLocalBizs(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(LocalBizsIndex));