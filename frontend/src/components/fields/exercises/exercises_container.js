import { connect } from "react-redux";
import Exercises from "./exercises";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createExercise } from "../../../actions/exercise_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createExercise: data => dispatch(createExercise(data))
    };
};

export default connect(mSTP, mDTP)(Exercises);