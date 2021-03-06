import React from "react";
import { connect } from "react-redux";
import { fetchAllCigarettes, fetchUserCigarettes } from "../../../actions/cigarette_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import CigarettesContainer from "./cigarettes_add_container";
import CigarettesEditContainer from './cigarettes_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class CigarettesIndex extends React.Component {
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
    this.props.fetchAllCigarettes();

    if (this.props.location.pathname === "/cigs") {
      return (this.props.fetchUserCigarettes(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/cigs") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-smoking"></i>
            &ensp;C I G A R E T T E S
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;40</li>
              <li>U N I T&emsp;O F&emsp;M E A S U R E:&emsp;cigarettes,&ensp;packs</li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <CigarettesContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <CigarettesEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allCigarettes !== undefined) {
      return (
        <div id="cigarette-index">
          <div>{this.indexPage("Cigarette")}</div>
          {this.props.allCigarettes.map(metric => (
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
          <i className="fas fa-smoking"></i> One moment please while we load
          Cigarette Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allCigarettes: state.cigarettes.publicCigarette,
      currentUser: state.session.user,
      userCigarettes: state.cigarettes.user,
      userToday: state.cigarettes.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllCigarettes: () => dispatch(fetchAllCigarettes()),
      fetchUserCigarettes: (id) => dispatch(fetchUserCigarettes(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(CigarettesIndex));