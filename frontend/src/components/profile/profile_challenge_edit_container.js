import { connect } from 'react-redux';
import { fetchChallenge, editChallenge, discardChallenge } from '../../actions/challenge_actions';
import ProfileEditChallengeForm from './profile_edit_challenge_form';

const mSTP = (state) => {
    return {
        formType: "Edit Current Challenges",
        user: state.users.user,
    };
}

const mDTP = dispatch => ({
    fetchChallenge: id => dispatch(fetchChallenge(id)),
    editChallenge: data => dispatch(editChallenge(data)),
    discardChallenge: id => dispatch(discardChallenge(id))
});


export default connect(mSTP, mDTP)(ProfileEditChallengeForm);