import {connect} from 'react-redux';
import {fetchSingleUser, editUser} from '../../actions/user_actions';
import { fetchUserGoodDeeds } from '../../actions/gooddeed_actions';

import Profile from './profile';

const mSTP = (state, {match}) => {
    return {
        currentUser: state.session.user,
        profile: match.params.id,
        user: state.users.user,
        userGoodDeeds: state.gooddeeds.user,
    };
};

const mDTP = dispatch => {
    return {
        fetchSingleUser: id => dispatch(fetchSingleUser(id)),
        editUser: data => dispatch(editUser(data)),
        fetchUserGoodDeeds: id => dispatch(fetchUserGoodDeeds(id)),
    };
};

export default connect(mSTP, mDTP)(Profile);

