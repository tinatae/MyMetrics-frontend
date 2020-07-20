import {connect} from 'react-redux';
import UserPage from './user_page';
import {fetchSingleUser} from '../../actions/user_actions';
import { fetchUserMentals } from '../../actions/mental_actions';

import { fetchUserAlcohols } from '../../actions/alcohol_actions';
import { fetchUserBadFats } from '../../actions/badfat_actions';
import { fetchUserCaffeines } from '../../actions/caffeine_actions';
import { fetchUserCarbs } from '../../actions/carb_actions';
import { fetchUserCigarettes } from '../../actions/cigarette_actions';
import { fetchUserCreatives } from '../../actions/creative_actions';
import { fetchUserDrugs } from '../../actions/drug_actions';
import { fetchUserExercises } from '../../actions/exercise_actions';
import { fetchUserFastings } from '../../actions/fasting_actions';
import { fetchUserGoodDeeds } from '../../actions/gooddeed_actions';
import { fetchUserGoodFats } from '../../actions/goodfat_actions';
import { fetchUserHydrations } from '../../actions/hydration_actions';
import { fetchUserLearnings } from '../../actions/learning_actions';
import { fetchUserLocalBizs } from '../../actions/localbiz_actions';
import { fetchUserMedications } from '../../actions/medication_actions';
import { fetchUserMindfuls } from '../../actions/mindful_actions';
import { fetchUserOops } from '../../actions/oop_actions';
import { fetchUserProteins } from '../../actions/protein_actions';
import { fetchUserSleeps } from '../../actions/sleep_actions';
import { fetchUserSugars } from '../../actions/sugar_actions';
import { fetchUserVegetables } from '../../actions/vegetable_actions';

const mSTP = (state) => {

    return {
      currentUser: state.session.user,
      user: state.users.user,

      userMentals: state.mentals.user,
  
      userAlcohols: state.alcohols.user,
      userBadFats: state.badfats.user,
      userCaffeines: state.caffeines.user,
      userCarbs: state.carbs.user,
      userCigarettes: state.cigarettes.user,
      userCreatives: state.creatives.user,
      userDrugs: state.drugs.user,
      userExercises: state.exercises.user,
      userFastings: state.fastings.user,
      userGoodDeeds: state.gooddeeds.user,
      userGoodFats: state.goodfats.user,
      userHydrations: state.hydrations.user,
      userLearnings: state.learnings.user,
      userLocalBizs: state.localbizs.user,
      userMedications: state.medications.user,
      userMindfuls: state.mindfuls.user,
      userOops: state.oops.user,
      userProteins: state.proteins.user,
      userSleeps: state.sleeps.user,
      userSugars: state.sugars.user,
      userVegetables: state.vegetables.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        fetchUserMentals: id => dispatch(fetchUserMentals(id)),

        fetchUserAlcohols: id => dispatch(fetchUserAlcohols(id)),
        fetchUserBadFats: id => dispatch(fetchUserBadFats(id)),
        fetchUserCaffeines: id => dispatch(fetchUserCaffeines(id)),
        fetchUserCarbs: id => dispatch(fetchUserCarbs(id)),
        fetchUserCigarettes: id => dispatch(fetchUserCigarettes(id)),
        fetchUserCreatives: id => dispatch(fetchUserCreatives(id)),
        fetchUserDrugs: id => dispatch(fetchUserDrugs(id)),
        fetchUserExercises: id => dispatch(fetchUserExercises(id)),
        fetchUserFastings: id => dispatch(fetchUserFastings(id)),
        fetchUserGoodDeeds: id => dispatch(fetchUserGoodDeeds(id)),
        fetchUserGoodFats: id => dispatch(fetchUserGoodFats(id)),
        fetchUserHydrations: id => dispatch(fetchUserHydrations(id)),
        fetchUserLearnings: id => dispatch(fetchUserLearnings(id)),
        fetchUserLocalBizs: id => dispatch(fetchUserLocalBizs(id)),
        fetchUserMedications: id => dispatch(fetchUserMedications(id)),
        fetchUserMindfuls: id => dispatch(fetchUserMindfuls(id)),
        fetchUserOops: id => dispatch(fetchUserOops(id)),
        fetchUserProteins: id => dispatch(fetchUserProteins(id)),
        fetchUserSleeps: id => dispatch(fetchUserSleeps(id)),
        fetchUserSugars: id => dispatch(fetchUserSugars(id)),
        fetchUserVegetables: id => dispatch(fetchUserVegetables(id)),
    };
};

export default connect(mSTP, mDTP)(UserPage);