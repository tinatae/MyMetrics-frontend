import React from "react";

class Challenge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            makePrivate: false,  
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        let newChallenge = {
            date: Date.now,
            user: this.props.currentUser.id,
            name: this.state.name,
            makePrivate: this.state.makePrivate
        };

        this.props.createChallenge(newChallenge)
        .then(() => window.location.reload());
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        // const { name} = this.state.name;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form">
                        <div id="ready"> Ready&nbsp;for&nbsp;a&nbsp;New&nbsp;Challenge? </div>
                        <div>
                            <select name="Challenges" value={this.state.name} onChange={this.update("name")}>
                                <option value="" disabled> - Choose A Challenge - </option>
                                <option value="Vegetable">Vegetables</option>
                                <option value="Carb">Carbs</option>
                                <option value="GoodFat">Good Fats</option>
                                <option value="BadFat">Not So Good Fats</option>
                                <option value="Protein">Proteins</option>
                                <option value="Sugar">Sugar</option>
                                <option value="Hydration">Hydration</option>
                                <option value="Cigarette">Cigarettes</option>
                                <option value="Alcohol">Alcohol</option>
                                <option value="Caffeine">Caffeine</option>
                                <option value="Drug">Drug</option>
                                <option value="Fasting">Fasting</option>
                                <option value="Medication">Medication</option>
                                <option value="Sleep">Sleep</option>
                                <option value="Exercise">Exercise</option>
                                <option value="GoodDeed">Good Deed</option>
                                <option value="Oop">Mess-Up</option>
                                <option value="Learning">Learning Something New</option>
                                <option value="Creative">Creativity</option>
                                <option value="LocalBiz">Support Local Business</option>
                                <option value="Mindful">Mindfulness/Meditation</option>
                            </select>
                        </div>
                    
                        <div id="make-private">
                            <span>Make&nbsp;Private</span>

                            <input
                                type="checkbox"
                                value="true"
                                onClick={this.update("makePrivate")}
                            />
                        </div>
                        <div><input id="submit" type="submit" value="Submit" /></div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Challenge;

