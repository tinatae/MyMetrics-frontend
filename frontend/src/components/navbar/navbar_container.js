import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar";

const mSTP = state => {
  let loggedIn = state.session.isAuthenticated;

  if (loggedIn) return { currentUser: state.session.user };
  else return { currentUser: null };
};

export default connect(mSTP, { logout })(NavBar);