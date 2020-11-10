import React from "react";
import {withRouter} from 'react-router-dom';
import '../stylesheets/fa-icons.css'
import { FieldColors, AllWhiteIcons, FieldNames, FieldRoutes} from '../fields/shared/style_refs';

import AlcoholsEditContainer from '../fields/alcohols/alcohols_edit_container';
import BadFatsEditContainer from '../fields/badfats/badfats_edit_container';
import CaffeinesEditContainer from '../fields/caffeines/caffeines_edit_container';
import CarbsEditContainer from '../fields/carbs/carbs_edit_container';
import CigarettesEditContainer from '../fields/cigarettes/cigarettes_edit_container';
import CreativesEditContainer from '../fields/creatives/creatives_edit_container';
import DrugsEditContainer from '../fields/drugs/drugs_edit_container';
import ExercisesEditContainer from '../fields/exercises/exercises_edit_container';
import FastingsEditContainer from '../fields/fastings/fastings_edit_container';
import GoodDeedsEditContainer from '../fields/gooddeeds/gooddeeds_edit_container';
import GoodFatsEditContainer from '../fields/goodfats/goodfats_edit_container';
import HydrationsEditContainer from '../fields/hydrations/hydrations_edit_container';
import LearningsEditContainer from '../fields/learnings/learnings_edit_container';
import LocalBizsEditContainer from '../fields/localbizs/localbizs_edit_container';
import MedicationsEditContainer from '../fields/medications/medications_edit_container';
import MindfulsEditContainer from '../fields/mindfuls/mindfuls_edit_container';
import OopsEditContainer from '../fields/oops/oops_edit_container';
import ProteinsEditContainer from '../fields/proteins/proteins_edit_container';
import SleepsEditContainer from '../fields/sleeps/sleeps_edit_container';
import SugarsEditContainer from '../fields/sugars/sugars_edit_container';
import VegetablesEditContainer from '../fields/vegetables/vegetables_edit_container';

class ProfileMetricHolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            editAlcohol: false,
            editBadFat: false,
            editCaffeine: false,
            editCarb: false,
            editCigarette: false,
            editCreative: false,
            editDrug: false,
            editExercise: false,
            editFasting: false,
            editGoodDeed: false,
            editGoodFat: false,
            editHydration: false,
            editLearning: false,
            editLocalBiz: false,
            editMedication: false,
            editMindful: false,
            editOop: false,
            editProtein: false,
            editSleep: false,
            editSugar: false,
            editVegetable: false,
        };

        this.makeEdits = this.makeEdits.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.checkPlural = this.checkPlural.bind(this);
        this.checkYN = this.checkYN.bind(this);
        this.nevermindEdit = this.nevermindEdit.bind(this);
        this.exploreCategory = this.exploreCategory.bind(this);
    } 

    // componentDidMount() {
    //     // this.props.id && this.props.currentUserId console.log correctly
    // };

    // componentDidUpdate(prevProps) {
    //     if (prevProps.id !== this.props.id)) {
    //         this.props.fetchSingleUser(this.props.userId);
    //     }
    // }

    handleEdit = (category) => e => {
        switch (category) {
            case "Alcohol":
                this.setState({ editAlcohol: true });
                break;
            case "BadFat":
                this.setState({ editBadFat: true });
                break;
            case "Caffeine":
                this.setState({ editCaffeine: true });
                break;
            case "Carb":
                this.setState({ editCarb: true });
                break;
            case "Cigarette":
                this.setState({ editCigarette: true });
                break;
            case "Creative":
                this.setState({ editCreative: true });
                break;
            case "Drug":
                this.setState({ editDrug: true });
                break;
            case "Exercise":
                this.setState({ editExercise: true });
                break;
            case "Fasting":
                this.setState({ editFasting: true });
                break;
            case "GoodDeed":
                this.setState({ editGoodDeed: true });
                break;
            case "GoodFat":
                this.setState({ editGoodFat: true });
                break;
            case "Hydration":
                this.setState({ editHydration: true });
                break;
            case "Learning":
                this.setState({ editLearning: true });
                break;
            case "LocalBiz":
                this.setState({ editLocalBiz: true });
                break;
            case "Medication":
                this.setState({ editMedication: true });
                break;
            case "Mindful":
                this.setState({ editMindful: true });
                break;
            case "Oop":
                this.setState({ editOop: true });
                break;
            case "Protein":
                this.setState({ editProtein: true });
                break;
            case "Sleep":
                this.setState({ editSleep: true });
                break;
            case "Sugar":
                this.setState({ editSugar: true });
                break;
            case "Vegetable":
                this.setState({ editVegetable: true });
                break;
            default:
                return console.log("Sorry, category could not be found");
        }
    }

    handleDelete = (id, category) => e => {
        switch (category) {
            case "Alcohol":
                this.props.discardAlcohol(id);
                break;
            case "BadFat":
                this.props.discardBadFat(id);
                break;
            case "Caffeine":
                this.props.discardCaffeine(id);
                break;
            case "Carb":
                this.props.discardCarb(id);
                break;
            case "Cigarette":
                this.props.discardCigarette(id);
                break;
            case "Creative":
                this.props.discardCreative(id);
                break;
            case "Drug":
                this.props.discardDrug(id);
                break;
            case "Exercise":
                this.props.discardExercise(id);
                break;
            case "Fasting":
                this.props.discardFasting(id);
                break;
            case "GoodDeed":
                this.props.discardGoodDeed(id);
                break;
            case "GoodFat":
                this.props.discardGoodFat(id);
                break;
            case "Hydration":
                this.props.discardHydration(id);
                break;
            case "Learning":
                this.props.discardLearning(id);
                break;
            case "LocalBiz":
                this.props.discardLocalBiz(id);
                break;
            case "Medication":
                this.props.discardMedication(id);
                break;
            case "Mindful":
                this.props.discardMindful(id);
                break;
            case "Oop":
                this.props.discardOop(id);
                break;
            case "Protein":
                this.props.discardProtein(id);
                break;
            case "Sleep":
                this.props.discardSleep(id);
                break;
            case "Sugar":
                this.props.discardSugar(id);
                break;
            case "Vegetable":
                this.props.discardVegetable(id);
                break;
            default:
                return console.log("Sorry, category could not be found");
        }
        window.location.reload();
    };

    makeEdits(currentUserId, userId) {
        if ((currentUserId === userId) && (Date.now() - (1 * 24 * 60 * 60 * 1000) <= new Date(this.props.date).getTime())) {
            return (
                <div id="metric-edits">
                    <div style={{ background: `${FieldColors[this.props.category]}` }} onClick={this.handleEdit(this.props.category)} ><i className="far fa-edit"></i></div>
                    <div style={{ background: `${FieldColors[this.props.category]}` }} onClick={this.handleDelete(this.props.id, this.props.category)} ><i className="far fa-times-circle"></i></div>
                </div>
            )
        } else if (currentUserId === userId) {
            return (
                <div id="metric-edits">
                    <div style={{ background: `${FieldColors[this.props.category]}` }} onClick={this.handleDelete(this.props.id, this.props.category)} ><i className="far fa-times-circle"></i></div>
                </div>
            )
        } else { return null }
    };

    nevermindEdit = (category) => e => {
        switch (category) {
            case "Alcohol":
                this.setState({ editAlcohol: false });
                break;
            case "BadFat":
                this.setState({ editBadFat: false });
                break;
            case "Caffeine":
                this.setState({ editCaffeine: false });
                break;
            case "Carb":
                this.setState({ editCarb: false });
                break;
            case "Cigarette":
                this.setState({ editCigarette: false });
                break;
            case "Creative":
                this.setState({ editCreative: false });
                break;
            case "Drug":
                this.setState({ editDrug: false });
                break;
            case "Exercise":
                this.setState({ editExercise: false });
                break;
            case "Fasting":
                this.setState({ editFasting: false });
                break;
            case "GoodDeed":
                this.setState({ editGoodDeed: false });
                break;
            case "GoodFat":
                this.setState({ editGoodFat: false });
                break;
            case "Hydration":
                this.setState({ editHydration: false });
                break;
            case "Learning":
                this.setState({ editLearning: false });
                break;
            case "LocalBiz":
                this.setState({ editLocalBiz: false });
                break;
            case "Medication":
                this.setState({ editMedication: false });
                break;
            case "Mindful":
                this.setState({ editMindful: false });
                break;
            case "Oop":
                this.setState({ editOop: false });
                break;
            case "Protein":
                this.setState({ editProtein: false });
                break;
            case "Sleep":
                this.setState({ editSleep: false });
                break;
            case "Sugar":
                this.setState({ editSugar: false });
                break;
            case "Vegetable":
                this.setState({ editVegetable: false });
                break;
            default:
                return console.log("Sorry, category could not be found");
        }
    }

    checkPlural(amt, unit) {
        if (amt === 0 && unit !== "fl. oz." && unit !== "oz.") {
            return unit.concat("s")
        } else if (amt > 1 && unit !== "fl. oz." && unit !== "oz.") { return unit.concat("s") }
        else { return unit }
    };

    checkYN(amt) {
        if (amt === "Yes" || amt === "No") {
            return amt.concat(".")
        } else { return amt }
    };

    exploreCategory = (route) => e => {
        this.props.history.push(`/${route}`)
    }

    render() {
        const pic = AllWhiteIcons[this.props.category];
        const color = FieldColors[this.props.category];
        const name = FieldNames[this.props.category];
        const route = FieldRoutes[this.props.category];

        return (
            <div id="metric-holder">
                <div style={{ background: `${color}` }} id="metric-holder-content">
                    <div id="metric-content">
                
                        <div id="date">{new Date(this.props.date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join('.')}</div>
                        <div id="logo" onClick={this.exploreCategory(route)}>{pic} <span id="mc-name">{name}</span></div>
                        <div id="info">{this.checkYN(this.props.amt)} {this.checkPlural(this.props.amt, this.props.unit)}</div>

                        <div>{this.makeEdits(this.props.currentUserId, this.props.userId)}</div>
                    </div>
                </div>
                <div id="metric-edit-form">

                    {this.state.editAlcohol && (
                        <div>
                            <AlcoholsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Alcohol")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editBadFat && (
                        <div>
                            <BadFatsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("BadFat")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editCaffeine && (
                        <div>
                            <CaffeinesEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Caffeine")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editCarb && (
                        <div>
                            <CarbsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Carb")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editCigarette && (
                        <div>
                            <CigarettesEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Cigarette")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editCreative && (
                        <div>
                            <CreativesEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Creative")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editDrug && (
                        <div>
                            <DrugsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Drug")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editExercise && (
                        <div>
                            <ExercisesEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Exercise")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editFasting && (
                        <div>
                            <FastingsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Fasting")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editGoodDeed && (
                        <div>
                            <GoodDeedsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("GoodDeed")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editGoodFat && (
                        <div>
                            <GoodFatsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("GoodFat")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editHydration && (
                        <div>
                            <HydrationsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Hydration")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editLearning && (
                        <div>
                            <LearningsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Learning")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editLocalBiz && (
                        <div>
                            <LocalBizsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("LocalBiz")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editMedication && (
                        <div>
                            <MedicationsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Medication")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editMindful && (
                        <div>
                            <MindfulsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Mindful")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editOop && (
                        <div>
                            <OopsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Oop")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editProtein && (
                        <div>
                            <ProteinsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Protein")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editSleep && (
                        <div>
                            <SleepsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Sleep")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editSugar && (
                        <div>
                            <SugarsEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Sugar")}>Close Metric Edit</button>
                        </div>)}

                    {this.state.editVegetable && (
                        <div>
                            <VegetablesEditContainer id={this.props.id} amt={this.props.amt} unit={this.props.unit} date={this.props.date} color={color} />
                            <button onClick={this.nevermindEdit("Vegetable")}>Close Metric Edit</button>
                        </div>)}             
                </div>
            </div>
        )
    };

};

export default withRouter(ProfileMetricHolder);

    // const oneDayForward = new Date(this.props.date).getTime() + (1 * 24 * 60 * 60 * 1000);
    // const oneDayBack = new Date(this.props.date).getTime() - (1 * 24 * 60 * 60 * 1000);
    // console.log(Date.now());