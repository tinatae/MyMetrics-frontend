import React from "react";
import ProfileBadgeHolderContainer from './profile_badge_holder_container';
import ProfileChallengeHolder from "./profile_challenge_holder";

import ProfileMentalHolderContainer from "./profile_mental_holder_container";

import ProfileMetricHolderContainer from "./profile_metric_holder_container";

import ProfileAddBioContainer from './profile_add_bio_container';
import ProfileChallengeEditContainer from './profile_challenge_edit_container';
import ChallengesContainer from '../challenges/challenges_container';
import {withRouter} from 'react-router-dom';

import "../stylesheets/profile.css";
import "../stylesheets/fa-icons.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editOpen: false,
      editBadge: false,
      editChallenge: false,
      editMental: false,
    };

    this.showMentalEditable = this.showMentalEditable.bind(this);
    this.editMentalOpen = this.editMentalOpen.bind(this);

    this.showBioEditable = this.showBioEditable.bind(this);
    this.editBio = this.editBio.bind(this);
    this.nevermindBio = this.nevermindBio.bind(this);

    this.showBadgeEditable = this.showBadgeEditable.bind(this);
    this.editBadges = this.editBadges.bind(this);
    this.neverMindEditBadge = this.neverMindEditBadge.bind(this);
    this.showNeverMindBadgeButton = this.showNeverMindBadgeButton.bind(this);

    this.showChallengeEditable = this.showChallengeEditable.bind(this);
    this.editChallenge = this.editChallenge.bind(this);
    this.nevermindChallenge = this.nevermindChallenge.bind(this);
  }

  componentDidMount() {
    this.props.fetchSingleUser(this.props.profile);
    this.props.fetchUserGoodDeeds(this.props.profile);
  }

  componentDidUpdate(prevProps) {
    if (this.props.profile !== prevProps.profile) {
      this.props.fetchSingleUser(this.props.profile);
    }
  }

  showMentalEditable(currentUser) {
    if (currentUser.id === this.props.profile) {
      return (
        <span id="editable" onClick={this.editMentalOpen}>
          <i className="far fa-edit"></i>
        </span>
      );
    } else {
      return null;
    }
  }

  editMentalOpen(e) {
    e.preventDefault();
    (this.state.editMental === false) ? (this.setState({editMental: true})) : (this.setState({editMental: false}))

  }

  showBioEditable(currentUser) {
    if (currentUser.id === this.props.profile) {
      return (
        <span id="editable" onClick={this.editBio}>
          <i className="far fa-edit"></i>
        </span>
      );
    } else {
      return null;
    }
  }

  editBio(e) {
    e.preventDefault();
    (this.state.editOpen === false) ? (this.setState({editOpen: true})) : (this.setState({editOpen: false}))
  }

  nevermindBio(e) {
    e.preventDefault();
    this.setState({ editOpen: false });
  }


  showBadgeEditable(currentUser) {
    if (currentUser.id === this.props.profile) {
      return (
        <span id="editable" onClick={this.editBadges()}>
          <i className="far fa-edit"></i>
        </span>
      );
    } else {
      return null;
    }
  }

  editBadges(e) {
    return e => {
      this.setState({ editBadge: true });
    };
  }

  showNeverMindBadgeButton() {
    if (this.state.editBadge !== false) {
      return (<button id="badge-close-button" onClick={this.neverMindEditBadge()}>Close Badge Edit</button>);
    } else {
      return null;
    }
  }

  neverMindEditBadge(e) {
    return e => {
      this.setState({ editBadge: false });
    };
  }

  showChallengeEditable(currentUser) {
    if (currentUser.id === this.props.profile) {
      return (
        <span id="editable" onClick={this.editChallenge}>
          <i className="far fa-edit"></i>
        </span>
      );
    } else {
      return null;
    }
  }

  editChallenge(e) {
    e.preventDefault();
    this.setState({ editChallenge: true });
  }

  nevermindChallenge(e) {
    e.preventDefault();
    this.setState({ editChallenge: false });
  }

  render() {
    if (this.props.user !== undefined && this.props.user !== null) {
      const capitalizedName =
        this.props.user.username[0].toUpperCase() +
        this.props.user.username.slice(1).toLowerCase();

      return (
        <div className="profile">
          <div id="left">
            <div id="avatar">
              <i className="fa fa-user-circle"></i>
              <h2>{capitalizedName}</h2>
            </div>

            <div className="bio">
              <h3>About Me {this.showBioEditable(this.props.currentUser)}</h3>
              <div>{this.props.user.bio}</div>
              {this.state.editOpen && this.props.user && (
                <div id="bio-content">
                  <ProfileAddBioContainer
                    user={this.props.user}
                    editUser={this.props.editUser}
                  />

                  <button id="close-bio-button" onClick={this.nevermindBio}>Close Edit Bio</button>
                </div>
              )}
            </div>

            <div>
              <h3>{capitalizedName}'s Current State {this.showMentalEditable(this.props.currentUser)}</h3>
              {this.props.user.mentals.slice(-1).map(mental => (
                <ProfileMentalHolderContainer
                  key={mental._id}
                  userId={this.props.user._id}
                  currentUserId={this.props.currentUser.id}
                  id={mental._id}
                  date={mental.date}
                  currentMood={mental.currentMood}
                  balance={mental.balance}
                  anxiety={mental.anxiety}
                  notes={mental.notes}
                  showEditable={this.state.editMental}
                />               
              ))}
            </div>
          </div>

          <div id="right">
            <h3 id="badge-gallery-words">
              Badge Gallery {this.showBadgeEditable(this.props.currentUser)}
            </h3>
            <div className="badge-section">
              <ProfileBadgeHolderContainer
                user={this.props.user}
                userId={this.props.user._id}
                currentUserId={this.props.currentUser.id}
                userGoodDeeds={this.props.userGoodDeeds}
                editUser={this.props.editUser}
                editBadge={this.state.editBadge}
              />
              <div>{this.showNeverMindBadgeButton()}</div>
            </div>

            <div className="profile-challenges">
              <h3>
                Current Challenges{" "}
                {this.showChallengeEditable(this.props.currentUser)}
              </h3>
              <div id="challenge-section">
                <div>
                  <ProfileChallengeHolder
                    username={capitalizedName}
                    userChallenges={this.props.user.challenges}
                  />
                </div>

                {this.state.editChallenge && this.props.user && (
                  <div id="challenge-edit-section">
                    <div>
                      <span id="edit-words">Edit Privacy Status</span> or{" "}
                      <span id="delete-words">Delete Existing Challenges</span>
                    </div>
                    <ProfileChallengeEditContainer
                      username={capitalizedName}
                      userChallenges={this.props.user.challenges}
                    />

                    <div id="profile-new-challenge">
                      <div id="add-new-challenge-words">Add New Challenge</div>
                      <ChallengesContainer />
                    </div>
                    <button
                      id="close-challenge-button"
                      onClick={this.nevermindChallenge}
                    >
                      Close Challenge Edit
                    </button>
                  </div>
                )}
              </div>
            </div>

            <h3>{capitalizedName}'s Weekly Metrics</h3>
            <div id="metrics">
              {this.props.user.metrics.slice(-10).map(metric => (
              // {this.props.user.metrics.map(metric => (
                <ProfileMetricHolderContainer
                  key={metric._id}
                  userId={this.props.user._id}
                  id={metric._id}
                  date={metric.date}
                  category={metric.category}
                  amt={metric.amt}
                  unit={metric.unit}
                />
              ))}
            </div>
          </div>
        </div>
      );
    } else {
      return <div>One minute while we load</div>;
    }
  }
};

export default withRouter(Profile);