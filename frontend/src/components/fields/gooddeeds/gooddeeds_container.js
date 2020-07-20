import { connect } from "react-redux";
import GoodDeeds from "./gooddeeds";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createGoodDeed } from "../../../actions/gooddeed_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createGoodDeed: data => dispatch(createGoodDeed(data))
    };
};

export default connect(mSTP, mDTP)(GoodDeeds);