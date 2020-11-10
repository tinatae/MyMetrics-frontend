import { connect } from "react-redux";
import Hydrations from "./hydrations_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createHydration } from "../../../actions/hydration_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createHydration: data => dispatch(createHydration(data))
  };
};

export default connect(mSTP, mDTP)(Hydrations);
