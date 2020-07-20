import { connect } from 'react-redux';
import ProfileBadgeHolder from './profile_badge_holder';

const mSTP = (state) => {
    return {
        formType: "Edit Badge Gallery",
    };
}

export default connect(mSTP, null)(ProfileBadgeHolder);