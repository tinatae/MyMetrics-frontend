import { connect } from "react-redux";
import Sugars from "./sugars";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createSugar } from "../../../actions/sugar_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createSugar: data => dispatch(createSugar(data))
  };
};

export default connect(mSTP, mDTP)(Sugars);
