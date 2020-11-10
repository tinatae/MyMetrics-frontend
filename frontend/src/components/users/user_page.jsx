import React from 'react';
import UserPageSelectHolder from './user_page_select_holder';
import UserPageInputHolder from './user_page_input_holder';
import UserPageMentalHolder from './user_page_mental_holder';
import "../stylesheets/user-page.css";

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        mentalsOpen: false,
        challengesOpen: false,
    };

    this.showMentals = this.showMentals.bind(this);
    this.closeMentals = this.closeMentals.bind(this);
    this.showChallenges = this.showChallenges.bind(this);
    this.closeChallenges = this.closeChallenges.bind(this);
    this.backToTop = this.backToTop.bind(this);
    this.callCategory = this.callCategory.bind(this);
  }

  callCategory(name) {
    switch (name) {
        case "Alcohol":
            this.props.fetchUserAlcohols(this.props.currentUser.id);
            break;
        case "BadFat":
            this.props.fetchUserBadFats(this.props.currentUser.id);
            break;
        case "Caffeine":
            this.props.fetchUserCaffeines(this.props.currentUser.id);
            break;
        case "Carb":
            this.props.fetchUserCarbs(this.props.currentUser.id);
            break;
        case "Cigarette":
            this.props.fetchUserCigarettes(this.props.currentUser.id);
            break;
        case "Creative":
            this.props.fetchUserCreatives(this.props.currentUser.id);
            break;
        case "Drug":
            this.props.fetchUserDrugs(this.props.currentUser.id);
            break;
        case "Exercise":
            this.props.fetchUserExercises(this.props.currentUser.id);
            break;
        case "Fasting":
            this.props.fetchUserFastings(this.props.currentUser.id);
            break;
        case "GoodDeed":
            this.props.fetchUserGoodDeeds(this.props.currentUser.id);
            break;
        case "GoodFat":
            this.props.fetchUserGoodFats(this.props.currentUser.id);
            break;
        case "Hydration":
            this.props.fetchUserHydrations(this.props.currentUser.id);
            break;
        case "Learning":
            this.props.fetchUserLearnings(this.props.currentUser.id);
            break;
        case "LocalBiz":
            this.props.fetchUserLocalBizs(this.props.currentUser.id);
            break;
        case "Medication":
            this.props.fetchUserMedications(this.props.currentUser.id);
            break;
        case "Mindful":
            this.props.fetchUserMindfuls(this.props.currentUser.id);
            break;
        case "Oop":
            this.props.fetchUserOops(this.props.currentUser.id);
            break;
        case "Protein":
            this.props.fetchUserProteins(this.props.currentUser.id);
            break;
        case "Sleep":
            this.props.fetchUserSleeps(this.props.currentUser.id);
            break;
        case "Sugar":
            this.props.fetchUserSugars(this.props.currentUser.id);
            break;
        case "Vegetable":
            this.props.fetchUserVegetables(this.props.currentUser.id);
            break;
        default:
            return console.log("Sorry, category could not be found");
    };
  };

  componentDidMount() { 
    this.props.fetchSingleUser(this.props.currentUser.id)
    .then(() => this.props.user.challenges.map(challenge => (this.callCategory(challenge.name))));
    this.props.fetchUserMentals(this.props.currentUser.id);
  }

  showMentals(e) {
    e.preventDefault();
    this.setState({mentalsOpen: true});
  }  

  closeMentals(e) {
    e.preventDefault();
    this.setState({mentalsOpen: false});
  }  

  showChallenges(e) {
    e.preventDefault();
    this.setState({challengesOpen: true});
  }  

  closeChallenges(e) {
    e.preventDefault();
    this.setState({challengesOpen: false});
  }  

  backToTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
  }  

  render() {
      const fetchMetrics = {
        "Alcohol": this.props.userAlcohols,
        "BadFat": this.props.userBadFats,
        "Caffeine": this.props.userCaffeines,
        "Carb": this.props.userCarbs,
        "Cigarette": this.props.userCigarettes,
        "Creative": this.props.userCreatives,
        "Drug": this.props.userDrugs,
        "Exercise": this.props.userExercises,
        "Fasting": this.props.userFastings,
        "GoodDeed": this.props.userGoodDeeds,
        "GoodFat": this.props.userGoodFats,
        "Hydration": this.props.userHydrations,
        "Learning": this.props.userLearnings,
        "LocalBiz": this.props.userLocalBizs,
        "Medication": this.props.userMedications,
        "Mindful": this.props.userMindfuls,
        "Oop": this.props.userOops,
        "Protein": this.props.userProteins,
        "Sleep": this.props.userSleeps,
        "Sugar": this.props.userSugars,
        "Vegetable": this.props.userVegetables,
      };
      
      if (this.props.user) {
        return (   
          <div className="userpage">
  
            <div className="userpage-graphs">  
              <div id="graph-title">Mental State</div>
              <div id="graph-start-date">A quick overview of all the mental updates we pester you for-</div>
              <div id="graph-start-date">(We know these are challenges you didn't sign-up for<br/>but daily life is challenging enough we think it's important to check!)</div>
              <div id="graph-start-date">
                {(this.state.mentalsOpen === false) && <button onClick={this.showMentals} >Check it out</button>}
              </div> 
                {this.state.mentalsOpen && this.props.userMentals && (
                  <div>
                    <UserPageMentalHolder
                      metrics={this.props.userMentals}
                    />
                    <button onClick={this.backToTop} >Back To Top</button>
                    <div id="graph-start-date"><button onClick={this.closeMentals} >Close Mental State Section</button></div>
                  </div>
                )}
            </div>
  
            <div className="userpage-graphs">
              <div id="graph-title">Your Challenge Metrics</div>
              <div id="graph-start-date">
                {(this.state.challengesOpen === false) && <button onClick={this.showChallenges} >Check it out</button>}
              </div>

              <div>
                {this.state.challengesOpen && this.props.user.challenges.map(challenge => (
                ["Creative", "Drug", "GoodDeed", "Learning", "LocalBiz", "Medication", "Mindful", "Oop"].includes(challenge.name) ?   
                    ( <div> 
                          <div id="graph-start-date">
                          <UserPageInputHolder
                            key={challenge._id}
                            date={challenge.date}
                            name={challenge.name}
                            metrics={fetchMetrics[challenge.name]}
                          />
                          </div>
                          <button onClick={this.backToTop} >Back To Top</button>
                      </div>
                    ) : ( 
                      <div>
                          <div id="graph-start-date">
                            <UserPageSelectHolder
                              key={challenge._id}
                              date={challenge.date}
                              name={challenge.name}
                              metrics={fetchMetrics[challenge.name]}
                            />
                        </div>
                          <button onClick={this.backToTop} >Back To Top</button>
                      </div>
                  )
                  
              ))}   
                {this.state.challengesOpen && <button onClick={this.closeChallenges}>Close Challenge Metrics Section</button>}        
              
              </div>

            </div>
        </div>
      )
      } else { return <div>One minute while we load</div> }
  };
};

export default UserPage;