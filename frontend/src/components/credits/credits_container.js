import React from 'react';
import { connect } from 'react-redux';
import Credits from './credits';

const mSTP = (state) => ({
    formType: "Art Credits!"
});


export default (connect(mSTP, null)(Credits));