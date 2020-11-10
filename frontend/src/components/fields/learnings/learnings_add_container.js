import { connect } from "react-redux";
import Learnings from "./learnings_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createLearning } from "../../../actions/learning_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createLearning: data => dispatch(createLearning(data))
    };
};

export default connect(mSTP, mDTP)(Learnings);