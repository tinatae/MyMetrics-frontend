import React from "react";
import { connect } from "react-redux";
import { fetchAllProteins, fetchUserProteins } from "../../../actions/protein_actions";
import SelectHolder from '../shared/select_holder';
import { withRouter } from "react-router-dom";
import ProteinsContainer from "./proteins_container";
import ProteinsEditContainer from './proteins_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class ProteinsIndex extends React.Component {
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
    this.props.fetchAllProteins();

    if (this.props.location.pathname === "/protein") {
      return (this.props.fetchUserProteins(this.props.currentUser.id))
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
    if (this.props.location.pathname === "/protein") {
      return (
        <div id="top-container">
          <div id="title">
            <i className="fas fa-egg"></i>
            &ensp;P R O T E I N
          </div>

          <div id="sub-header">
            <ul id="units">
              <li>N U M E R I C A L&emsp;R A N G E:&emsp;open</li>
              <li>
                U N I T&emsp;O F&emsp;M E A S U R E:&emsp;oz.,&ensp;grams,&ensp;servings
              </li>
            </ul>
          </div>

          <div id="add-section">
            <div id="add-words" onClick={this.handleAdd}>
              <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
            </div>

            {this.state.addOpen && this.props.userToday === undefined && (
              <div id="nested-form">
                <ProteinsContainer />
                <button id="nested-form-button" onClick={this.closeAdd}>
                  Close Add Metric
                </button>
              </div>
            )}

            {this.state.addOpen && this.props.userToday !== undefined && (
              <div id="nested-form">
                <ProteinsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]} />
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
    if (this.props.allProteins !== undefined) {
      return (
        <div id="protein-index">
          <div>{this.indexPage()}</div>
          {this.props.allProteins.map(metric => (
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
          <i className="fas fa-egg"></i> One moment please while we load Protein
          Metrics
        </div>
      );
    }
  }
};


const mSTP = state => {
    return {
      allProteins: state.proteins.publicProtein,
      currentUser: state.session.user,
      userProteins: state.proteins.user,
      userToday: state.proteins.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
      fetchAllProteins: () => dispatch(fetchAllProteins()),
      fetchUserProteins: (id) => dispatch(fetchUserProteins(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(ProteinsIndex));