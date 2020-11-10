import React from "react";
import { connect } from "react-redux";
import { fetchAllVegetables, fetchUserVegetables } from "../../../actions/vegetable_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import VegetablesContainer from "./vegetables_add_container";
import VegetablesEditContainer from './vegetables_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class VegetablesIndex extends React.Component {
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
    this.props.fetchAllVegetables();

    if (this.props.location.pathname === "/veggies") {
      return (this.props.fetchUserVegetables(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/veggies") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-carrot"></i>
            &ensp;V E G G I E S
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;12</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;servings,&ensp;vegetables</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <VegetablesContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <VegetablesEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allVegetables !== undefined) {
      return (
        <div id="vegetable-index">
          <div>{this.indexPage("Vegetable")}</div>
          {this.props.allVegetables.map(metric => (
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
          <i className="fas fa-carrot"></i> One moment please while we load
          Vegetable Metrics
        </div>
      );
    }
  }
}


const mSTP = state => {
    return {
      allVegetables: state.vegetables.publicVegetable,
      currentUser: state.session.user,
      userVegetables: state.vegetables.user,
      userToday: state.vegetables.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllVegetables: () => dispatch(fetchAllVegetables()),
      fetchUserVegetables: (id) => dispatch(fetchUserVegetables(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(VegetablesIndex));