import React from "react";
import { connect } from "react-redux";
import { fetchAllMedications, fetchUserMedications } from "../../../actions/medication_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import MedicationsContainer from "./medications_add_container";
import MedicationsEditContainer from './medications_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class MedicationsIndex extends React.Component {
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
    this.props.fetchAllMedications();

    if (this.props.location.pathname === "/meds") {
      return (this.props.fetchUserMedications(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/meds") {
      return (
        <div id="top-container">
          <div id="title" style={{color: FieldColors[categoryName]}}>
            <i className="fas fa-prescription"></i>
            &ensp;M E D I C A T I O N
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>R E S P O N S E:&emsp;yes&ensp;/&ensp;no</li>
              <li>
                U N I T&emsp;O F&emsp;M E A S U R E:&emsp;pill(s),&ensp;shot(s),&ensp;tonic(s),&ensp;medicine,&ensp;skipped,&ensp;not
                applicable
              </li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <MedicationsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <MedicationsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allMedications !== undefined) {
      return (
        <div id="medication-index">
          <div>{this.indexPage("Medication")}</div>
          {this.props.allMedications.map(metric => (
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
          <i className="fas fa-prescription"></i> One moment please while we
          load Medication Metrics
        </div>
      );
    }
  }
};

const mSTP = state => {
    return {
      allMedications: state.medications.publicMedication,
      currentUser: state.session.user,
      userMedications: state.medications.user,
      userToday: state.medications.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllMedications: () => dispatch(fetchAllMedications()),
      fetchUserMedications: (id) => dispatch(fetchUserMedications(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(MedicationsIndex));