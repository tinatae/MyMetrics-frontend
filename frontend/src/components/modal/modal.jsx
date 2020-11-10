import React from 'react';
import {closeModal} from '../../actions/modal_actions';
import {connect} from 'react-redux';
import SignupFormContainer from "../session/signup_form_container";
import "../stylesheets/login.css";

function Modal({modal}) {

    let component = '';

    if (modal === 'Signup') {component = <SignupFormContainer />}
    else {return null};

    return(
        <div className="modal-background">
            <div className="modal-child">
                {component}
            </div>
        </div>
    );
}

const mSTP = state => {
    return { 
        modal: state.ui.modal
    }
};

const mDTP = dispatch => {
    return { 
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);