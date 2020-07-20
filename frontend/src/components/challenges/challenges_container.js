import { connect } from "react-redux";
import { createChallenge } from '../../actions/challenge_actions';
import Challenges from "./challenges";

const mSTP = state => {
    return {
        currentUser: state.session.user, 
    };
};

const mDTP = dispatch => {
    return {
        createChallenge: data => dispatch(createChallenge(data))
    };
};

export default connect(mSTP, mDTP)(Challenges);