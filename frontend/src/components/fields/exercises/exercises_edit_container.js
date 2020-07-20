import { connect } from "react-redux";
import { fetchExercise, editExercise } from "../../../actions/exercise_actions";
import ExercisesEditForm from "./exercises_edit_form";

const mSTP = (state) => {
    return {
      exercise: state.exercises.single,
      formType: "Update Exercise Metric"
    };
};

const mDTP = dispatch => ({
    fetchExercise: id => dispatch(fetchExercise(id)),
    editExercise: data => dispatch(editExercise(data))
});

export default connect(mSTP, mDTP)(ExercisesEditForm)