import { connect } from "react-redux";
import { fetchAlcohol, editAlcohol } from "../../../actions/alcohol_actions";
import AlcoholsEditForm from "./alcohols_edit_form";

const mSTP = (state) => {
    return {
        alcohol: state.alcohols.single,
        formType: "Update Alcohol Metric",
    };
};

const mDTP = dispatch => ({
    fetchAlcohol: id => dispatch(fetchAlcohol(id)),
    editAlcohol: data => dispatch(editAlcohol(data))
});

export default connect(mSTP, mDTP)(AlcoholsEditForm)