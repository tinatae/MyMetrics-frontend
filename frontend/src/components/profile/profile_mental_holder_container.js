import { connect } from 'react-redux';
import ProfileMentalHolder from './profile_mental_holder';
import { editMental, discardMental } from '../../actions/mental_actions';

const mDTP = dispatch => {
    return {
        editMental: id => dispatch(editMental(id)),
        discardMental: id => dispatch(discardMental(id)),
    };
};

export default connect(null, mDTP)(ProfileMentalHolder);