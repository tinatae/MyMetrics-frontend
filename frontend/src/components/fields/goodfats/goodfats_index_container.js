import React from "react";
import { connect } from "react-redux";
import { fetchAllGoodFats, fetchUserGoodFats } from "../../../actions/goodfat_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import GoodFatsContainer from "./goodfats_container";
import GoodFatsEditContainer from './goodfats_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class GoodFatsIndex extends React.Component {
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
    this.props.fetchAllGoodFats();
    if (this.props.location.pathname === "/goodfats") {
      return (this.props.fetchUserGoodFats(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/goodfats") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="far fa-heart"></i>
            &ensp;G O O D&emsp;F A T S
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
                <GoodFatsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <GoodFatsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allGoodFats !== undefined) {
      return (
        <div id="goodfat-index">
          <div>{this.indexPage()}</div>
          {this.props.allGoodFats.map(metric => (
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
          <i className="far fa-heart"></i> One moment please while we load Good
          Fat Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allGoodFats: state.goodfats.publicGoodFat,
      currentUser: state.session.user,
      userGoodFats: state.goodfats.user,
      userToday: state.goodfats.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllGoodFats: () => dispatch(fetchAllGoodFats()),
      fetchUserGoodFats: (id) => dispatch(fetchUserGoodFats(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(GoodFatsIndex));