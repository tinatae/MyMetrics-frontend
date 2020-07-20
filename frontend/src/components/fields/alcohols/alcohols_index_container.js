import React from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import { fetchAllAlcohols, fetchUserAlcohols } from "../../../actions/alcohol_actions";
import SelectHolder from '../shared/select_holder';
import AlcoholsContainer from './alcohols_container';
import AlcoholsEditContainer from './alcohols_edit_container';
import { FieldColors } from "../../fields/shared/style_refs";
import "../../stylesheets/field-index.css";
import "../../stylesheets/fa-icons.css";

class AlcoholsIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            addOpen: false
        }

        this.indexPage = this.indexPage.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.closeAdd = this.closeAdd.bind(this);
    }

    componentDidMount() {
      this.props.fetchAllAlcohols();

      if (this.props.location.pathname === "/alcohol") {
        return (this.props.fetchUserAlcohols(this.props.currentUser.id))
      } else {
        return null
      }
    }

    handleAdd(e) {
        e.preventDefault();
        this.setState({addOpen: true})
    }

    closeAdd(e) {
      e.preventDefault();
      window.location.reload();
    }

    indexPage() {
        if (this.props.location.pathname === '/alcohol') {
            return (
              <div id="top-container">
                <div id="title">
                  <i className="fas fa-glass-martini-alt"></i>
                  &ensp;A L C O H O L
                </div>

                <div id="sub-header">
                  <ul id="units">
                    <li>
                      N U M E R I C A L&emsp;R A N G E:&emsp;0&ensp;-&ensp;20
                    </li>
                    <li>
                      U N I T&emsp;O F&emsp;M E A S U R E:&emsp;drinks,&ensp;shots,&ensp;bottles,&ensp;servings
                    </li>
                  </ul>
                </div>

                <div id="add-section">
                  <div id="add-words" onClick={this.handleAdd}>
                    <i className="far fa-plus-square">&nbsp;Add Your Metric</i>
                  </div>
                    {this.state.addOpen && this.props.userToday === undefined && (
                      <div id="nested-form">
                        <AlcoholsContainer />
                        <button id="nested-form-button" onClick={this.closeAdd}>
                          Close Add Metric
                        </button>
                      </div>
                    )}

                    {this.state.addOpen && this.props.userToday !== undefined && (
                      <div id="nested-form">
                      <AlcoholsEditContainer id={this.props.userToday._id} amt={this.props.userToday.amt} unit={this.props.userToday.unit} date={this.props.userToday.date} color={FieldColors[this.props.userToday.category]}/>
                        <button id="nested-form-button" onClick={this.closeAdd}>
                          Close Add Metric
                        </button>
                      </div>
                    )}
               
                </div>
              </div>
            );
        } else {return null}
    }

    render() {
        if (this.props.allAlcohols !== undefined) {
            return (
                <div id="alcohol-index">
                    
                    <div>{this.indexPage()}</div>
                    {this.props.allAlcohols.map(metric => (
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
            )
        } else { return <div><i className="fas fa-glass-martini-alt"></i> One moment please while we load Alcohol Metrics</div> }
    }
};

const mSTP = (state)=> {
    return {    
      allAlcohols: state.alcohols.publicAlcohol,
      currentUser: state.session.user,
      userAlcohols: state.alcohols.user,
      userToday: state.alcohols.userTodayMetric
    };
};

const mDTP = dispatch => {
    return {
        fetchAllAlcohols: () => dispatch(fetchAllAlcohols()),
        fetchUserAlcohols: (id) => dispatch(fetchUserAlcohols(id))
    };
};

export default withRouter(connect(mSTP, mDTP)(AlcoholsIndex));