import { connect } from "react-redux";
import Sleeps from "./sleeps_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createSleep } from "../../../actions/sleep_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createSleep: data => dispatch(createSleep(data))
    };
};

export default connect(mSTP, mDTP)(Sleeps);