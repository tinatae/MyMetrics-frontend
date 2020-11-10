import { connect } from "react-redux";
import BadFats from "./badfats_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createBadFat } from "../../../actions/badfat_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createBadFat: data => dispatch(createBadFat(data))
  };
};

export default connect(mSTP, mDTP)(BadFats);
