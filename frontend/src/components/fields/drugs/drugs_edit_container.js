import { connect } from "react-redux";
import { fetchDrug, editDrug } from "../../../actions/drug_actions";
import DrugsEditForm from "./drugs_edit_form";

const mSTP = (state) => {
    return {
      drug: state.drugs.single,
      formType: "Update Rec. Drug Metric"
    };
};

const mDTP = dispatch => ({
    fetchDrug: id => dispatch(fetchDrug(id)),
    editDrug: data => dispatch(editDrug(data))
});

export default connect(mSTP, mDTP)(DrugsEditForm)