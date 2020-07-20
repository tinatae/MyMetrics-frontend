import { connect } from "react-redux";
import Medications from "./medications";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createMedication } from "../../../actions/medication_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createMedication: data => dispatch(createMedication(data))
    };
};

export default connect(mSTP, mDTP)(Medications);