import { connect } from "react-redux";
import { fetchSleep, editSleep } from "../../../actions/sleep_actions";
import SleepsEditForm from "./sleeps_edit_form";

const mSTP = (state) => {
    return {
        sleep: state.sleeps.single,
        formType: "Update Sleep Metric",
    };
};

const mDTP = dispatch => ({
    fetchSleep: id => dispatch(fetchSleep(id)),
    editSleep: data => dispatch(editSleep(data))
});

export default connect(mSTP, mDTP)(SleepsEditForm)