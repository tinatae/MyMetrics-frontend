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
          <div><Link to={"/"}><i className="far fa-chart-bar"></i>All&nbsp;Metrics</Link></div>
          <div><Link to={`/profile/${this.props.currentUser.id}`}><i className="fa fa-user-circle"></i>My&nbsp;Profile</Link></div>
          <div className="dropdown">
            <div className="drop-label">Explore <i className="fa fa-caret-down"></i></div>
            <div className="dropdown-content">
              <div><Link style={{ color: 'rgb(144, 245, 42)'}} to={"/alcohol"}>{AllColoredIcons["Alcohol"]} <span>A L C O H O L</span></Link></div>
              <div><Link style={{ color: 'rgb(238, 192, 111)' }} to={"/notsogreatfats"}>{AllColoredIcons["BadFat"]} <span>N O T<span id="mobile-no">&emsp;S O</span>&emsp;G R E A T&emsp;F A T S</span></Link></div>
              <div><Link style={{ color: 'rgb(62, 39, 14)' }} to={"/caffeine"}>{AllColoredIcons["Caffeine"]} <span>C A F F E I N E</span></Link></div>
              <div><Link style={{ color: 'rgb(254, 207, 20)' }} to={"/carbs"}>{AllColoredIcons["Carb"]} <span>C A R B S</span></Link></div>
              <div><Link style={{ color: 'rgb(174, 204, 243)' }} to={"/cigs"}>{AllColoredIcons["Cigarette"]} <span>C I G A R E T T E S</span></Link></div>
              <div><Link style={{ color: 'rgb(175, 33, 215)' }} to={"/creativity"}>{AllColoredIcons["Creative"]} <span>C R E A T I V I T Y</span></Link></div>
              <div><Link style={{ color: 'rgb(247, 64, 247)' }} to={"/recdrugs"}>{AllColoredIcons["Drug"]} <span>R E C<span id="mobile-no">R E A T I O N A L</span>&emsp;D R U G S</span></Link></div>
              <div><Link style={{ color: 'rgb(33, 193, 193)' }} to={"/exercise"}>{AllColoredIcons["Exercise"]} <span>E X E R C I S E</span></Link></div>
              <div><Link style={{ color: 'darkslateblue' }} to={"/fasting"}> {AllColoredIcons["Fasting"]}  <span>F A S T I N G</span></Link></div>
              <div><Link style={{ color: 'rgb(0, 179, 255)' }} to={"/gooddeeds"}>{AllColoredIcons["GoodDeed"]}<span>G O O D&emsp;D E E D S</span></Link></div>
              <div><Link style={{ color: 'rgb(236, 71, 25)' }} to={"/goodfats"}>{AllColoredIcons["GoodFat"]}<span>G O O D&emsp;F A T S</span></Link></div>
              <div><Link style={{ color: 'rgb(107, 248, 248)' }} to={"/hydration"}>{AllColoredIcons["Hydration"]} <span>H Y D R A T I O N</span></Link></div>
              <div><Link style={{ color: 'rgb(35, 221, 35)' }} to={"/newthing"}>{AllColoredIcons["Learning"]}<span>L E A R N E D<span id="mobile-no">&emsp;S O M E T H I N G</span>&emsp;N E W</span></Link></div>
              <div><Link style={{ color: 'rgb(245, 101, 12)' }} to={"/localbiz"}>{AllColoredIcons["LocalBiz"]}<span>L O C A L&emsp;B U S I N E S S</span></Link></div>
              <div><Link style={{ color: 'red' }} to={"/meds"}>{AllColoredIcons["Medication"]} <span>M E D I C A T I O N</span></Link></div>
              <div><Link style={{ color: 'rgb(109, 109, 210)' }} to={"/mindfulness"}>{AllColoredIcons["Mindful"]}<span>M I N D F U L N E S S</span></Link></div>
              <div><Link style={{ color: 'rgb(254, 153, 2)' }} to={"/oops"}>{AllColoredIcons["Oop"]} <span>O O P S</span></Link></div>
              <div><Link style={{ color: 'rgb(250, 121, 121)' }} to={"/protein"}>{AllColoredIcons["Protein"]} <span>P R O T E I N</span></Link></div>
              <div><Link style={{ color: 'rgb(31, 31, 119)' }} to={"/sleep"}>{AllColoredIcons["Sleep"]} <span>S L E E P</span></Link></div>
              <div><Link style={{ color: 'rgb(252, 178, 191)' }} to={"/sugar"}>{AllColoredIcons["Sugar"]} <span>S U G A R S</span></Link></div>
              <div><Link style={{ color: 'rgb(69, 138, 9)' }} to={"/veggies"}>{AllColoredIcons["Vegetable"]} <span>V E G E T A B L E S</span></Link></div>
            </div>
          </div>

          <div><Link to={"/new_day"}><i className="fas fa-plus"></i>Add&nbsp;Your&nbsp;Metric</Link></div>
          <div><Link to={"/mymetrics"}><i className="fas fa-chart-pie"></i>MyMetrics</Link></div>
          
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