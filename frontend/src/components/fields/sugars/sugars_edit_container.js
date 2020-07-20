import { connect } from "react-redux";
import { fetchSugar, editSugar } from "../../../actions/sugar_actions";
import SugarsEditForm from "./sugars_edit_form";

const mSTP = (state) => {
    return {
      sugar: state.sugars.single,
      formType: "Update Sugar Metric"
    };
};

const mDTP = dispatch => ({
    fetchSugar: id => dispatch(fetchSugar(id)),
    editSugar: data => dispatch(editSugar(data))
});

export default connect(mSTP, mDTP)(SugarsEditForm)



// class SugarsForm extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     componentDidMount() {
//         this.props.fetchSugar(this.props.match.params.sugarId)
//     };

//     render() {
//         const {action, formType, sugar} = this.props;

//         if (!sugar) return null;
//         return (
//             <SugarsForm
//                 action={action}
//                 formType={formType}
//                 sugar={sugar} />
//         );
//     }
// }