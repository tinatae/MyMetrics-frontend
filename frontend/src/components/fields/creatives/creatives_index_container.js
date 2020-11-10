import React from "react";
import { connect } from "react-redux";
import { fetchAllCreatives, fetchUserCreatives } from "../../../actions/creative_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import CreativesContainer from "./creatives_add_container";
import CreativesEditContainer from './creatives_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class CreativesIndex extends React.Component {
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
    this.props.fetchAllCreatives();

    if (this.props.location.pathname === "/creativity") {
      return (this.props.fetchUserCreatives(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/creativity") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-palette"></i>
            &ensp;C R E A T I V I T Y
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
                <CreativesContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <CreativesEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allCreatives !== undefined) {
      return (
        <div id="creative-index">
          <div>{this.indexPage("Creative")}</div>
          {this.props.allCreatives.map(metric => (
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
          <i className="fas fa-palette"></i> One moment please while we load
          Creativity Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allCreatives: state.creatives.publicCreative,
      currentUser: state.session.user,
      userCreatives: state.creatives.user,
      userToday: state.creatives.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllCreatives: () => dispatch(fetchAllCreatives()),
      fetchUserCreatives: (id) => dispatch(fetchUserCreatives(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(CreativesIndex));