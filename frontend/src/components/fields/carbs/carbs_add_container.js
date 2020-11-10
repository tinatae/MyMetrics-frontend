import { connect } from "react-redux";
import Carbs from "./carbs_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createCarb } from "../../../actions/carb_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createCarb: data => dispatch(createCarb(data))
    };
};

export default connect(mSTP, mDTP)(Carbs);