import React from "react";
import MentalsContainer from '../mental/mentals_container';
import ChallengesContainer from '../challenges/challenges_container';

import AlcoholsContainer from '../fields/alcohols/alcohols_container';
import BadFatsContainer from '../fields/badfats/badfats_container';
import CaffeinesContainer from '../fields/caffeines/caffeines_container';
import CarbsContainer from '../fields/carbs/carbs_container';
import CigarettesContainer from '../fields/cigarettes/cigarettes_container';
import CreativesContainer from '../fields/creatives/creatives_container';
import DrugsContainer from '../fields/drugs/drugs_container';
import ExercisesContainer from '../fields/exercises/exercises_container';
import FastingsContainer from '../fields/fastings/fastings_container';
import GoodDeedsContainer from '../fields/gooddeeds/gooddeeds_container';
import GoodFatsContainer from '../fields/goodfats/goodfats_container';
import HydrationsContainer from '../fields/hydrations/hydrations_container';
import LearningsContainer from '../fields/learnings/learnings_container';
import LocalBizsContainer from '../fields/localbizs/localbizs_container';
import MedicationsContainer from '../fields/medications/medications_container';
import MindfulsContainer from '../fields/mindfuls/mindfuls_container';
import OopsContainer from '../fields/oops/oops_container';
import ProteinsContainer from '../fields/proteins/proteins_container';
import SleepsContainer from '../fields/sleeps/sleeps_container';
import SugarsContainer from '../fields/sugars/sugars_container';
import VegetablesContainer from '../fields/vegetables/vegetables_container';

import AlcoholsEditContainer from '../fields/alcohols/alcohols_edit_container';
import BadFatsEditContainer from '../fields/badfats/badfats_edit_container';
import CaffeinesEditContainer from '../fields/caffeines/caffeines_edit_container';
import CarbsEditContainer from '../fields/carbs/carbs_edit_container';
import CigarettesEditContainer from '../fields/cigarettes/cigarettes_edit_container';
import CreativesEditContainer from '../fields/creatives/creatives_edit_container';
import DrugsEditContainer from '../fields/drugs/drugs_edit_container';
import ExercisesEditContainer from '../fields/exercises/exercises_edit_container';
import FastingsEditContainer from '../fields/fastings/fastings_edit_container';
import GoodDeedsEditContainer from '../fields/gooddeeds/gooddeeds_edit_container';
import GoodFatsEditContainer from '../fields/goodfats/goodfats_edit_container';
import HydrationsEditContainer from '../fields/hydrations/hydrations_edit_container';
import LearningsEditContainer from '../fields/learnings/learnings_edit_container';
import LocalBizsEditContainer from '../fields/localbizs/localbizs_edit_container';
import MedicationsEditContainer from '../fields/medications/medications_edit_container';
import MindfulsEditContainer from '../fields/mindfuls/mindfuls_edit_container';
import OopsEditContainer from '../fields/oops/oops_edit_container';
import ProteinsEditContainer from '../fields/proteins/proteins_edit_container';
import SleepsEditContainer from '../fields/sleeps/sleeps_edit_container';
import SugarsEditContainer from '../fields/sugars/sugars_edit_container';
import VegetablesEditContainer from '../fields/vegetables/vegetables_edit_container';

import {FieldColors} from "../fields/shared/style_refs";
import '../stylesheets/add-page.css';
import "../stylesheets/fa-icons.css";
import "../stylesheets/add-fields.css";

class Add extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          addChallenge: false,
        }

        this.fetchEdit = this.fetchEdit.bind(this);
        this.showAdd = this.showAdd.bind(this);
    }

    componentDidMount() {
        this.props.fetchSingleUser(this.props.currentUser.id);
    }

    showAdd(e) {
      return e => {
        (this.state.addChallenge === false) ? (this.setState({ addChallenge: true })) : (this.setState({ addChallenge: false }))
      }
    }

    fetchEdit(metric) {
        switch (metric.category) {
            case "Alcohol":
                return (<AlcoholsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "BadFat":
                return (<BadFatsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Caffeine":
               return (<CaffeinesEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Carb":
               return (<CarbsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Cigarette":
                return (<CigarettesEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Creative":
                return (<CreativesEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Drug":
                return (<DrugsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Exercise":
                return (<ExercisesEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Fasting":
                return (<FastingsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "GoodDeed":
              return (<GoodDeedsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "GoodFat":
              return (<GoodFatsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Hydration":
               return (<HydrationsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Learning":
                return (<LearningsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "LocalBiz":
               return (<LocalBizsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Medication":
               return (<MedicationsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Mindful":
                return (<MindfulsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Oop":
               return (<OopsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Protein":
                return (<ProteinsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Sleep":
               return (<SleepsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Sugar":
               return (<SugarsEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            case "Vegetable":
                return (<VegetablesEditContainer id={metric._id} amt={metric.amt} unit={metric.unit} date={metric.date} color={FieldColors[metric.category]} />)
            default:
                return console.log("Sorry, category could not be found");
        }
    }

    render() {

        const allFields = {
            "Alcohol": < AlcoholsContainer />,
            "BadFat": < BadFatsContainer />,
            "Caffeine": < CaffeinesContainer />,
            "Carb": < CarbsContainer />,
            "Cigarette": < CigarettesContainer />,
            "Creative": < CreativesContainer />,
            "Drug": < DrugsContainer />,
            "Exercise": < ExercisesContainer />,
            "Fasting": < FastingsContainer />,
            "GoodDeed": < GoodDeedsContainer />,
            "GoodFat": < GoodFatsContainer />,
            "Hydration": < HydrationsContainer />,
            "Learning": < LearningsContainer />,
            "LocalBiz": < LocalBizsContainer />,
            "Medication": < MedicationsContainer />,
            "Mindful": < MindfulsContainer />,
            "Oop": < OopsContainer />,
            "Protein": < ProteinsContainer />,
            "Sleep": < SleepsContainer />,
            "Sugar": < SugarsContainer />,
            "Vegetable": < VegetablesContainer />,
        }; 

        // const todayMonth = new Date().getMonth() + 1;
        // const todayDate = new Date().getDate();

        if (this.props.user !== undefined) {

          let madeToday = [];                                                         // ARRAY OF METRICS MADE TODAY  (whole metric)

          this.props.user.metrics.reverse().forEach(metric => {
            if (new Date(metric.date).getMonth() + 1 === new Date().getMonth() + 1 && new Date(metric.date).getDate() === new Date().getDate()) {
                madeToday.push(metric)
            } else { return madeToday }
          })

          const challengeNames = this.props.user.challenges.map(challenge =>          // ARRAY OF CATEGORY NAMES OF CHALLENGES
              challenge.name
          )

          let showing = [];
          let nonChallengeEditContainer = [];

          const challengeEditContainer = madeToday.map(made => {                       // CHALLENGES + METRICS TODAY (MOST SELECTIVE)
            if (challengeNames.includes(made.category)) {
              showing.push(made.category);
              return (this.fetchEdit(made))
            } else { 
              showing.push(made.category);
              nonChallengeEditContainer.push(this.fetchEdit(made));                     // NONCHALLENGE + METRICS TODAY
              return null;
            }
          })
        
          let challengeAddContainer = [];                                                // CHALLENGE + NONE TODAY

          const nonChallengeAddContainer = Object.keys(allFields).map(name => {
              if (challengeNames.includes(name) && !showing.includes(name)) {
                challengeAddContainer.push(allFields[name])                              
              } else if (!showing.includes(name) && !challengeNames.includes(name)) {
                return allFields[name]                                                    // NONCHALLENGE + NONE TODAY
              }
            }
          )

            return (
              <div className="add-page">
                <div className="mental">
                  <MentalsContainer />
                </div>

                <div className="challenges">
                  <h3>C U R R E N T&nbsp;&nbsp;C H A L L E N G E S</h3>
                  <div id="plus-square" onClick={this.showAdd()}><i className="far fa-plus-square"></i><span>&nbsp;Add New Challenge</span></div>
                    {this.state.addChallenge && <div className="new-challenge">
                      <h4>Are We Ready For A New Challenge?</h4>
                      <div>
                        We go back and forth about the merits of adding these
                        'challenges' to our day,
                      </div>

                      <div>but it's just a big word for some <span id="big-word">basic observation of our everyday habits.</span></div>              
                      <div></div>
                      <div id="perhaps">
                      Perhaps you will use it track an area of your life that you'd like
                        to pay extra attention to.
                      </div>

                      <div id="or">Or maybe you'll pick something out-of-the-blue<br/>
                      <span id="and">
                        - and notice something about yourself that you
                        didn't notice before!
                      </span>
                      </div>
                      <div></div>

                      <div id="truly">Truly the usage is up to you.</div>
              
                      <div>Track as many categories as you like,</div>
                      <div>but we recommend beginning with 3</div>
                      <div id="paren">(that seems like more than enough extra daily work to us!)</div>

                      <div id="see-results">
                        You'll be able to see the results of your inputs on
                        your My Metrics tab (on the top top right, next to the "Hello" message).
                      </div>
                      <div>
                        There is a 'private option' that will make the challenge
                        private if you would like to track a certain category privately.
                      </div>
                      <div id="comfortable">
                        We really do want you to be comfortable using this tool.
                      </div>
                      <div id="benefit">
                        It was created to benefit you.
                      </div>

                      <div id="add-page-challenge-form">
                        <ChallengesContainer />
                      </div>
                  </div>}
                  {challengeEditContainer}
                  {challengeAddContainer}
                </div>         

                <div className="other-metrics">
                  <h3>O T H E R&emsp;D A I L Y&emsp;M E T R I C S</h3>
                  <p>
                    (These will not be tracked, but they will show up on your profile page
                    and individual category pages)
                  </p>
                  {nonChallengeEditContainer}
                  {nonChallengeAddContainer}
                </div>
              </div>
            );
        } else { return (<div> One minute while we load </div>) }
    }

};

export default Add;



//   checkExisting(e) {
//     e.preventDefault();

//     const today = (new Date().getMonth()+1)+"/"+(new Date().getDate());

//     this.props.user.metrics.map(metric => (

//       (metric.category === "Alcohol" && ((new Date(metric.date).getMonth()+1)+"/"+(new Date(metric.date).getDate()) === today)

//       ? this.setState({noGo: true}) : this.setState({noGo: false})
//       )

//     ))
//   }
