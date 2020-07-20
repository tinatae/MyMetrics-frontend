import { connect } from 'react-redux';
import ProfileAddBioForm from './profile_add_bio_form';

const mSTP = (state) => {
    return {
      formType: "Edit About Me",
    };
}

export default connect(mSTP, null)(ProfileAddBioForm);