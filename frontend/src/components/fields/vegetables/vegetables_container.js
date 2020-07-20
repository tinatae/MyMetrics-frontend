import { connect } from "react-redux";
import Vegetables from "./vegetables";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createVegetable } from "../../../actions/vegetable_actions";

const mSTP = state => {
    return {
        currentUser: state.session.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        createVegetable: data => dispatch(createVegetable(data))
    };
};

export default connect(mSTP, mDTP)(Vegetables);