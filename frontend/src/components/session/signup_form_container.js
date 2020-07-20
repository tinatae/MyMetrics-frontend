import { connect } from "react-redux";
import React from 'react';
import { signup } from "../../actions/session_actions";
import {openModal, closeModal} from '../../actions/modal_actions';
import SessionForm from "./session_form";

const mSTP = ({errors}) => {
  return {
    formType: 'Signup',
    errors: errors.session
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    otherForm: ( 
      <button onClick={() => dispatch(openModal('login'))}>
        Login
      </button> 
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mSTP, mDTP)(SessionForm);
