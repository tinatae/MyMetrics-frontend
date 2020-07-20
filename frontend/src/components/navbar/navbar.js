import React from "react";
import { withRouter, Link } from "react-router-dom";
import {AllColoredIcons} from '../fields/shared/style_refs';
// import Modal from '../modal/modal';
import "../stylesheets/navbar.css";
import "../stylesheets/fa-icons.css";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goToProfile = this.goToProfile.bind(this);
    this.goCredits = this.goCredits.bind(this);
  }

  goHome() {
    return e => {
      this.props.history.push("/")
    }
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.history.push('/login');
    this.props.logout();   
  }

  goToProfile() {
    return e => {
      this.props.history.push(`/profile/${this.props.currentUser.id}`)
    }
  }

  goCredits() {
    return e => {
      this.props.history.push('/credits')
    }
  }

  getLinks() {

    if ((this.props.currentUser !== null) && (this.props.currentUser !== undefined)) {

      // const capitalizedName = this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1).toLowerCase();

      return (
        <div className="nav">
          <div><Link style={{ textDecoration: 'none', color: 'darkblue' }} to={"/"}><i className="far fa-chart-bar" style={{ color: 'darkblue', fontSize: '16px', transform: 'scale(0.9, 1.1)'}}></i>All Metrics</Link></div>
          <div><Link style={{ textDecoration: 'none', color: 'darkblue' }} to={`/profile/${this.props.currentUser.id}`}><i className="fa fa-user-circle" style={{ color: 'darkblue', marginRight: '5px', fontSize: '16px'}}></i>My Profile</Link></div>
          <div className="dropdown">
            <div className="drop-label" style={{color: 'darkblue'}}>Explore <i className="fa fa-caret-down"></i></div>
            <div className="dropdown-content">
              <div><Link style={{ textDecoration: 'none', color: 'rgb(144, 245, 42)'}} to={"/alcohol"}>{AllColoredIcons["Alcohol"]} ALCOHOL</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(238, 192, 111)' }} to={"/notsogreatfats"}>{AllColoredIcons["BadFat"]} NOT SO GREAT FATS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(62, 39, 14)' }} to={"/caffeine"}>{AllColoredIcons["Caffeine"]}CAFFEINE</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(254, 207, 20)' }} to={"/carbs"}>{AllColoredIcons["Carb"]}CARBS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(174, 204, 243)' }} to={"/cigs"}>{AllColoredIcons["Cigarette"]}CIGARETTES</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(175, 33, 215)' }} to={"/creativity"}>{AllColoredIcons["Creative"]} CREATIVITY</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(247, 64, 247)' }} to={"/recdrugs"}>{AllColoredIcons["Drug"]} RECREATIONAL DRUGS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(33, 193, 193)' }} to={"/exercise"}>{AllColoredIcons["Exercise"]} EXERCISE</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'darkslateblue' }} to={"/fasting"}> {AllColoredIcons["Fasting"]}  FASTING</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(0, 179, 255)' }} to={"/gooddeeds"}>{AllColoredIcons["GoodDeed"]}GOOD DEEDS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(236, 71, 25)' }} to={"/goodfats"}>{AllColoredIcons["GoodFat"]}GOOD FATS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(107, 248, 248)' }} to={"/hydration"}>{AllColoredIcons["Hydration"]} HYDRATION</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(35, 221, 35)' }} to={"/newthing"}>{AllColoredIcons["Learning"]}LEARNED SOMETHING NEW</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(245, 101, 12)' }} to={"/localbiz"}>{AllColoredIcons["LocalBiz"]}LOCAL BUSINESS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'red' }} to={"/meds"}>{AllColoredIcons["Medication"]} MEDICATION</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(109, 109, 210)' }} to={"/mindfulness"}>{AllColoredIcons["Mindful"]}MINDFULNESS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(254, 153, 2)' }} to={"/oops"}>{AllColoredIcons["Oop"]} OOPS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(250, 121, 121)' }} to={"/protein"}>{AllColoredIcons["Protein"]} PROTEIN</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(31, 31, 119)' }} to={"/sleep"}>{AllColoredIcons["Sleep"]}SLEEP</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(252, 178, 191)' }} to={"/sugar"}>{AllColoredIcons["Sugar"]} SUGARS</Link></div>
              <div><Link style={{ textDecoration: 'none', color: 'rgb(69, 138, 9)' }} to={"/veggies"}>{AllColoredIcons["Vegetable"]} VEGETABLES</Link></div>
            </div>
          </div>

          <div><Link style={{ textDecoration: 'none', color: 'rgb(144, 245, 42)' }} to={"/new_day"}><i className="fas fa-plus" style={{ color: 'rgb(144, 245, 42)', fontSize: '14px'}}></i>Add Your Metric</Link></div>
          <div><Link style={{ textDecoration: 'none', color: 'darkblue' }} to={"/mymetrics"}><i className="fas fa-chart-pie" style={{color: 'darkblue', marginRight: '2px', fontSize: '15px'}}></i>My Metrics</Link></div>
          
          <div className="greeting">
            <div onClick={this.goToProfile()}>Hello, {this.props.currentUser.username[0].toUpperCase() + this.props.currentUser.username.slice(1).toLowerCase()}</div>
            <span></span>
            <button id="logout-button" onClick={this.logoutUser}>Log&nbsp;Out</button>
          </div>
        </div>
      );
    } else { return null }
  }

  render() {
    return (
      <div>
        <div id="top-nav">
          
          <div>
            <i onClick={this.goCredits()} className="fas fa-project-diagram"></i>
            <h1 onClick={this.goHome()}>            
              <span>MyMetrics</span>                   
            </h1>
          </div>

          <div id="personal-links">
            <i
              id="plink"
              className="fab fa-github"
              title="this.code"
              onClick={() =>
                window.location.replace("https://github.com/tinatae/MyMetrics-frontend")
              }
            ></i>
            <i
              id="plink"
              className="fab fa-linkedin"
              title="this.coder"
              onClick={() =>
                window.location.replace(
                  "https://www.linkedin.com/in/tina-tae-87a3ba18/"
                )
              }
            ></i>
         
            <i 
              id="plink" 
              className="fas fa-feather-alt" 
              title="this.code.all" 
              onClick={() =>
                window.location.replace(
                  "https://tinatae.com"
                )
              }
            ></i>
          
          </div>
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(NavBar);
