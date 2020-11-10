import { connect } from "react-redux";
import LocalBizs from "./localbizs_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createLocalBiz } from "../../../actions/localbiz_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createLocalBiz: data => dispatch(createLocalBiz(data))
    };
};

export default connect(mSTP, mDTP)(LocalBizs);