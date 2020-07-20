import { connect } from "react-redux";
import { fetchMedication, editMedication } from "../../../actions/medication_actions";
import MedicationsEditForm from "./medications_edit_form";

const mSTP = (state) => {
    return {
      medication: state.medications.single,
      formType: "Update Medication Metric"
    };
};

const mDTP = dispatch => ({
    fetchMedication: id => dispatch(fetchMedication(id)),
    editMedication: data => dispatch(editMedication(data))
});

export default connect(mSTP, mDTP)(MedicationsEditForm)