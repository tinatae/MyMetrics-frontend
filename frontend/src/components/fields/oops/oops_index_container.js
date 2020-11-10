import React from "react";
import { connect } from "react-redux";
import { fetchAllOops, fetchUserOops } from "../../../actions/oop_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import OopsContainer from "./oops_add_container";
import OopsEditContainer from './oops_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class OopsIndex extends React.Component {
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
    this.props.fetchAllOops();

    if (this.props.location.pathname === "/oops") {
      return (this.props.fetchUserOops(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/oops") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-ghost"></i>
            &ensp;O O P S
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
                <OopsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <OopsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allOops !== undefined) {
      return (
        <div id="oop-index">
          <div>{this.indexPage("Oop")}</div>
          {this.props.allOops.map(metric => (
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
          <i className="fas fa-ghost"></i> One moment please while we load Oops
          Metrics
        </div>
      );
    }
  }
}

const mSTP = state => {
    return {
      allOops: state.oops.publicOop,
      currentUser: state.session.user,
      userOops: state.oops.user,
      userToday: state.oops.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllOops: () => dispatch(fetchAllOops()),
      fetchUserOops: (id) => dispatch(fetchUserOops(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(OopsIndex));