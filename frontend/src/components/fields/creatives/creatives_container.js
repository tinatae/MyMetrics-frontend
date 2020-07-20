import { connect } from "react-redux";
import Creatives from "./creatives";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createCreative } from "../../../actions/creative_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createCreative: data => dispatch(createCreative(data))
    };
};

export default connect(mSTP, mDTP)(Creatives);