import { connect } from "react-redux";
import Proteins from "./proteins";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createProtein } from "../../../actions/protein_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createProtein: data => dispatch(createProtein(data))
  };
};

export default connect(mSTP, mDTP)(Proteins);
