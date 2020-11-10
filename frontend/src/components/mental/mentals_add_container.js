import { connect } from "react-redux";
import Mentals from "./mentals_add";
import { fetchSingleUser } from "../../actions/user_actions";
import {
    fetchAllMentals,
    fetchUserMentals,
    fetchMental,
    createMental
} from "../../actions/mental_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
        // mentals: state.mentals.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),

        fetchAllMentals: () => dispatch(fetchAllMentals()),
        fetchUserMentals: id => dispatch(fetchUserMentals(id)),
        fetchMental: id => dispatch(fetchMental(id)),
        createMental: data => dispatch(createMental(data))
    };
};

export default connect(mSTP, mDTP)(Mentals);