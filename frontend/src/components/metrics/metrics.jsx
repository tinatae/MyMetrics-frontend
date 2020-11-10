import React from "react";

import AlcoholsIndexContainer from '../fields/alcohols/alcohols_index_container';
import BadFatsIndexContainer from '../fields/badfats/badfats_index_container';
import CaffeinesIndexContainer from '../fields/caffeines/caffeines_index_container';
import CarbsIndexContainer from '../fields/carbs/carbs_index_container';
import CigarettesIndexContainer from '../fields/cigarettes/cigarettes_index_container';
import CreativesIndexContainer from '../fields/creatives/creatives_index_container';
import DrugsIndexContainer from '../fields/drugs/drugs_index_container';
import ExercisesIndexContainer from '../fields/exercises/exercises_index_container';
import FastingsIndexContainer from '../fields/fastings/fastings_index_container';
import GoodDeedsIndexContainer from '../fields/gooddeeds/gooddeeds_index_container';
import GoodFatsIndexContainer from '../fields/goodfats/goodfats_index_container';
import HydrationsIndexContainer from '../fields/hydrations/hydrations_index_container';
import LearningsIndexContainer from '../fields/learnings/learnings_index_container';
import LocalBizsIndexContainer from '../fields/localbizs/localbizs_index_container';
import MedicationsIndexContainer from '../fields/medications/medications_index_container';
import MindfulsIndexContainer from '../fields/mindfuls/mindfuls_index_container';
import OopsIndexContainer from '../fields/oops/oops_index_container';
import ProteinsIndexContainer from '../fields/proteins/proteins_index_container';
import SleepsIndexContainer from '../fields/sleeps/sleeps_index_container';
import SugarsIndexContainer from '../fields/sugars/sugars_index_container';
import VegetablesIndexContainer from '../fields/vegetables/vegetables_index_container';


const Metrics = () => {
    return (
      <div className="metrics-page">
        <h3>Alcohol</h3>
        <AlcoholsIndexContainer />
        <h3>Not So Great Fats</h3>
        <BadFatsIndexContainer />
        <h3>Caffeine</h3>
        <CaffeinesIndexContainer />
        <h3>Carbs</h3>
        <CarbsIndexContainer />
        <h3>Cigarettes</h3>
        <CigarettesIndexContainer />
        <h3>Creativity</h3>
        <CreativesIndexContainer />
        <h3>Drugs</h3>
        <DrugsIndexContainer />
        <h3>Exercise</h3>
        <ExercisesIndexContainer />
        <h3>Fasting</h3>
        <FastingsIndexContainer />
        <h3>Good Deeds</h3>
        <GoodDeedsIndexContainer />
        <h3>Good Fats</h3>
        <GoodFatsIndexContainer />
        <h3>Hydration</h3>
        <HydrationsIndexContainer />
        <h3>Learned Something New</h3>
        <LearningsIndexContainer />
        <h3>Supported Local Business</h3>
        <LocalBizsIndexContainer />
        <h3>Medication</h3>
        <MedicationsIndexContainer />
        <h3>Mindfulness/Meditation</h3>
        <MindfulsIndexContainer />
        <h3>Oops</h3>
        <OopsIndexContainer />
        <h3>Protein</h3>
        <ProteinsIndexContainer />
        <h3>Sleep Count</h3>
        <SleepsIndexContainer />
        <h3>Sugar Intake</h3>
        <SugarsIndexContainer />
        <h3>Vegetables</h3>
        <VegetablesIndexContainer />
      </div>
  )
}

export default Metrics;