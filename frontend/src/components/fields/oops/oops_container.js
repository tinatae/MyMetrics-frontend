import { connect } from "react-redux";
import Oops from "./oops";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createOop } from "../../../actions/oop_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createOop: data => dispatch(createOop(data))
    };
};

export default connect(mSTP, mDTP)(Oops);