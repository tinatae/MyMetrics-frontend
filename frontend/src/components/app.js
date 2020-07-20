import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

import Modal from './modal/modal';

import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";

// import Home from "./home/home";
import MetricsContainer from './metrics/metrics_container';   // INDEXPAGE
import NavBarContainer from './navbar/navbar_container';    
import AddContainer from './add_metrics/add_container';       // ADD PAGE
import ProfileContainer from './profile/profile_container';   // (PUBLIC) PROFILE PAGE
import UserPageContainer from './users/user_page_container';  // (PRIVATE) PROFILE PAGE

import AlcoholsIndexContainer from './fields/alcohols/alcohols_index_container';
import BadFatsIndexContainer from './fields/badfats/badfats_index_container';
import CaffeinesIndexContainer from './fields/caffeines/caffeines_index_container';
import CarbsIndexContainer from './fields/carbs/carbs_index_container';
import CigarettesIndexContainer from './fields/cigarettes/cigarettes_index_container';
import CreativesIndexContainer from './fields/creatives/creatives_index_container';
import DrugsIndexContainer from './fields/drugs/drugs_index_container';
import ExercisesIndexContainer from './fields/exercises/exercises_index_container';
import FastingsIndexContainer from './fields/fastings/fastings_index_container';
import GoodDeedsIndexContainer from './fields/gooddeeds/gooddeeds_index_container';
import GoodFatsIndexContainer from './fields/goodfats/goodfats_index_container';
import HydrationsIndexContainer from './fields/hydrations/hydrations_index_container';
import LearningsIndexContainer from './fields/learnings/learnings_index_container';
import LocalBizsIndexContainer from './fields/localbizs/localbizs_index_container';
import MedicationsIndexContainer from './fields/medications/medications_index_container';
import MindfulsIndexContainer from './fields/mindfuls/mindfuls_index_container';
import OopsIndexContainer from './fields/oops/oops_index_container';
import ProteinsIndexContainer from './fields/proteins/proteins_index_container';
import SleepsIndexContainer from './fields/sleeps/sleeps_index_container';
import SugarsIndexContainer from './fields/sugars/sugars_index_container';
import VegetablesIndexContainer from './fields/vegetables/vegetables_index_container';

import CreditsContainer from './credits/credits_container';

const App = () => (
  <div>
    <Modal/>
    <NavBarContainer />
    <AuthRoute exact path="/login" component={LoginFormContainer} />

    <Switch>
      <ProtectedRoute exact path="/" component={MetricsContainer} />

      <Route path="/profile/:id" component={ProfileContainer} />

      <ProtectedRoute exact path="/new_day" component={AddContainer} />
     
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/mymetrics" component={UserPageContainer} />

      <Route path="/alcohol" component={AlcoholsIndexContainer} />
      <Route path="/notsogreatfats" component={BadFatsIndexContainer} />
      <Route path="/caffeine" component={CaffeinesIndexContainer} />
      <Route path="/carbs" component={CarbsIndexContainer} />
      <Route path="/cigs" component={CigarettesIndexContainer} />
      <Route path="/creativity" component={CreativesIndexContainer} />
      <Route path="/recdrugs" component={DrugsIndexContainer} />
      <Route path="/exercise" component={ExercisesIndexContainer} />
      <Route path="/fasting" component={FastingsIndexContainer} />
      <Route path="/gooddeeds" component={GoodDeedsIndexContainer} />
      <Route path="/goodfats" component={GoodFatsIndexContainer} />
      <Route path="/hydration" component={HydrationsIndexContainer} />
      <Route path="/newthing" component={LearningsIndexContainer} />
      <Route path="/localbiz" component={LocalBizsIndexContainer} />
      <Route path="/meds" component={MedicationsIndexContainer} />
      <Route path="/mindfulness" component={MindfulsIndexContainer} />
      <Route path="/oops" component={OopsIndexContainer} />
      <Route path="/protein" component={ProteinsIndexContainer} />
      <Route path="/sleep" component={SleepsIndexContainer} />
      <Route path="/sugar" component={SugarsIndexContainer} />
      <Route path="/veggies" component={VegetablesIndexContainer} />

      <Route path="/credits" component={CreditsContainer} />

    </Switch>
  </div>
);

export default App;

// {/* <AuthRoute exact path="/" component={Home} /> */ }