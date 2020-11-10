import React from "react";
import { connect } from "react-redux";
import { fetchAllGoodDeeds, fetchUserGoodDeeds } from "../../../actions/gooddeed_actions";
import InputHolder from '../shared/input_holder';
import { withRouter } from "react-router-dom";
import GoodDeedsContainer from "./gooddeeds_add_container";
import GoodDeedsEditContainer from './gooddeeds_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class GoodDeedsIndex extends React.Component {
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
    this.props.fetchAllGoodDeeds();

    if (this.props.location.pathname === "/gooddeeds") {
      return (this.props.fetchUserGoodDeeds(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/gooddeeds") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="far fa-star"></i>
            &ensp;G O O D&emsp;D E E D S
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
                <GoodDeedsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <GoodDeedsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allGoodDeeds !== undefined) {
      return (
        <div id="gooddeed-index">
          <div>{this.indexPage("GoodDeed")}</div>
          {this.props.allGoodDeeds.map(metric => (
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
          <i className="far fa-star"></i> One moment please while we load Good
          Deed Metrics
        </div>
      );
    }
  }
};


const mSTP = state => {
    return {
      allGoodDeeds: state.gooddeeds.publicGoodDeed,
      currentUser: state.session.user,
      userGoodDeeds: state.gooddeeds.user,
      userToday: state.gooddeeds.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllGoodDeeds: () => dispatch(fetchAllGoodDeeds()),
      fetchUserGoodDeeds: (id) => dispatch(fetchUserGoodDeeds(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(GoodDeedsIndex));