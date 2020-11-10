import React from "react";
import { connect } from "react-redux";
import { fetchAllFastings, fetchUserFastings} from "../../../actions/fasting_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import FastingsContainer from "./fastings_add_container";
import FastingsEditContainer from './fastings_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class FastingsIndex extends React.Component {
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
    this.props.fetchAllFastings();

    if (this.props.location.pathname === "/fasting") {
      return (this.props.fetchUserFastings(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/fasting") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-hourglass-half"></i>
            &ensp;F A S T I N G
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
                <FastingsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <FastingsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allFastings !== undefined) {
      return (
        <div id="fasting-index">
          <div>{this.indexPage("Fasting")}</div>
          {this.props.allFastings.map(metric => (
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
          <i className="fas fa-hourglass-half"></i> One moment please while we
          load Fasting Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allFastings: state.fastings.publicFasting,
      currentUser: state.session.user,
      userFastings: state.fastings.user,
      userToday: state.fastings.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllFastings: () => dispatch(fetchAllFastings()),
      fetchUserFastings: (id) => dispatch(fetchUserFastings(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(FastingsIndex));