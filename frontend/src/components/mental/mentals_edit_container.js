import { connect } from "react-redux";
import { fetchMental, editMental } from "../../actions/mental_actions";
import MentalsEditForm from "./mentals_edit_form";

const mSTP = (state) => {
    return {
        mental: state.mentals.single,
    };
};

const mDTP = dispatch => ({
    fetchMental: id => dispatch(fetchMental(id)),
    editMental: data => dispatch(editMental(data))
});

export default connect(mSTP, mDTP)(MentalsEditForm)