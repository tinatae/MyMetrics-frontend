import { connect } from "react-redux";
import Alcohols from "./alcohols";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createAlcohol } from "../../../actions/alcohol_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user,
    user: state.users.user,
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createAlcohol: data => dispatch(createAlcohol(data))
  };
};

export default connect(mSTP, mDTP)(Alcohols);
