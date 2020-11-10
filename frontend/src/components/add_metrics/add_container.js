import { connect } from "react-redux";
import Add from "./add_page";
import { fetchSingleUser } from "../../actions/user_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
        user: state.users.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    };
};

export default connect(mSTP, mDTP)(Add);