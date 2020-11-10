import { connect } from "react-redux";
import Cigarettes from "./cigarettes_add";
import { fetchSingleUser } from "../../../actions/user_actions";
import { createCigarette } from "../../../actions/cigarette_actions";

const mSTP = state => {
  return {
    currentUser: state.session.user,
  };
};

const mDTP = dispatch => {
  return {
    fetchSingleUser: id => dispatch(fetchSingleUser(id)),
    createCigarette: data => dispatch(createCigarette(data))
  };
};

export default connect(mSTP, mDTP)(Cigarettes);
