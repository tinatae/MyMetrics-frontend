import { connect } from "react-redux";
import Drugs from "./drugs";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createDrug } from "../../../actions/drug_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createDrug: data => dispatch(createDrug(data))
    };
};

export default connect(mSTP, mDTP)(Drugs);