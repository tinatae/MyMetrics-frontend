import { connect } from "react-redux";
import Mindfuls from "./mindfuls";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createMindful } from "../../../actions/mindful_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createMindful: data => dispatch(createMindful(data))
    };
};

export default connect(mSTP, mDTP)(Mindfuls);