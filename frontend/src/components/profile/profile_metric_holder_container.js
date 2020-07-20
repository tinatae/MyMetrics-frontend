import { connect } from 'react-redux';
import ProfileMetricHolder from './profile_metric_holder';

import { discardAlcohol } from '../../actions/alcohol_actions';
import { discardBadFat } from '../../actions/badfat_actions';
import { discardCaffeine } from '../../actions/caffeine_actions';
import { discardCarb } from '../../actions/carb_actions';
import { discardCigarette } from '../../actions/cigarette_actions';
import { discardCreative } from '../../actions/creative_actions';
import { discardDrug } from '../../actions/drug_actions';
import { discardExercise } from '../../actions/exercise_actions';
import { discardFasting } from '../../actions/fasting_actions';
import { discardGoodDeed } from '../../actions/gooddeed_actions';
import { discardGoodFat } from '../../actions/goodfat_actions';
import { discardHydration } from '../../actions/hydration_actions';
import { discardLearning } from '../../actions/learning_actions';
import { discardLocalBiz } from '../../actions/localbiz_actions';
import { discardMedication } from '../../actions/medication_actions';
import { discardMental } from '../../actions/mental_actions';
import { discardMindful } from '../../actions/mindful_actions';
import { discardOop } from '../../actions/oop_actions';
import { discardProtein } from '../../actions/protein_actions';
import { discardSleep } from '../../actions/sleep_actions';
import { discardSugar } from '../../actions/sugar_actions';
import { discardVegetable } from '../../actions/vegetable_actions';


const mSTP = (state) => {
    return {    
        currentUserId: state.session.user.id
    };
};

const mDTP = dispatch => {
    return {
        discardAlcohol: id => dispatch(discardAlcohol(id)),
        discardBadFat: id => dispatch(discardBadFat(id)),
        discardCaffeine: id => dispatch(discardCaffeine(id)),
        discardCarb: id => dispatch(discardCarb(id)),
        discardCigarette: id => dispatch(discardCigarette(id)),
        discardCreative: id => dispatch(discardCreative(id)),
        discardDrug: id => dispatch(discardDrug(id)),
        discardExercise: id => dispatch(discardExercise(id)),
        discardFasting: id => dispatch(discardFasting(id)),
        discardGoodDeed: id => dispatch(discardGoodDeed(id)),
        discardGoodFat: id => dispatch(discardGoodFat(id)),
        discardHydration: id => dispatch(discardHydration(id)),
        discardLearning: id => dispatch(discardLearning(id)),
        discardLocalBiz: id => dispatch(discardLocalBiz(id)),
        discardMedication: id => dispatch(discardMedication(id)),
        discardMental: id => dispatch(discardMental(id)),
        discardMindful: id => dispatch(discardMindful(id)),
        discardOop: id => dispatch(discardOop(id)),
        discardProtein: id => dispatch(discardProtein(id)),
        discardSleep: id => dispatch(discardSleep(id)),
        discardSugar: id => dispatch(discardSugar(id)),
        discardVegetable: id => dispatch(discardVegetable(id))
    };
};

export default connect(mSTP, mDTP)(ProfileMetricHolder);