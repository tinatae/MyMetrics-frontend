import { combineReducers } from "redux";

import session from "./session_reducer";
import errors from "./errors_reducer";
import ui from './ui_reducer';

import metrics from './metrics_reducer';
import challenges from './challenges_reducer';
import mentals from './mental_reducer';

import users from './users_reducer';

import hydrations from './hydration_reducer';
import cigarettes from './cigarettes_reducer';
import goodfats from './goodfats_reducer';
import badfats from "./badfats_reducer";
import sugars from './sugars_reducer';
import alcohols from './alcohol_reducer';
import caffeines from './caffeine_reducer';
import proteins from './proteins_reducer';
import vegetables from './vegetables_reducer';
import drugs from './drugs_reducer';
import carbs from './carbs_reducer';
import fastings from './fasting_reducer';
import medications from './medications_reducer';
import exercises from './exercise_reducer';
import sleeps from './sleep_reducer';
import gooddeeds from './gooddeeds_reducer';
import oops from './oops_reducer';
import learnings from './learnings_reducer';
import creatives from './creatives_reducer';
import localbizs from './localbizs_reducer';
import mindfuls from './mindful_reducer';

const RootReducer = combineReducers({
  errors,
  session,
  users,
  ui,
  
  metrics,
  challenges,

  mentals,
  
  hydrations,
  cigarettes,
  goodfats,
  badfats,
  sugars,
  alcohols,
  caffeines,
  proteins,
  vegetables,
  drugs,
  carbs,
  fastings,
  medications,

  sleeps,
  exercises,
  gooddeeds,
  oops,
  learnings,
  creatives,
  localbizs,
  mindfuls

});

export default RootReducer;
