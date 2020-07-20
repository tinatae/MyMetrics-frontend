import { connect } from "react-redux";
import Fastings from "./fastings";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createFasting } from "../../../actions/fasting_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createFasting: data => dispatch(createFasting(data))
    };
};

export default connect(mSTP, mDTP)(Fastings);