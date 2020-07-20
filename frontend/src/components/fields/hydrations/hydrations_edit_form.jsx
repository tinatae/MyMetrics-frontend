import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class HydrationsEditForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          amt: this.props.amt,
          unit: this.props.unit
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.showTitle = this.showTitle.bind(this);
        this.changeLabel = this.changeLabel.bind(this);
    }

    componentDidMount() {
        this.props.fetchHydration(this.props.id);
    };

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    };

    showTitle() {
        if (this.props.location.pathname === "/new_day") {
            return null
        } else { return (<h5 style={{ color: `${this.props.color}` }}>- {this.props.formType} -</h5>) 
        }
    };

    changeLabel() {
        if (this.props.location.pathname === "/new_day") {
          return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Hydration"]}<span>UPDATE TODAY'S HYDRATION METRIC</span></div>)
        } else { return (<div id="from" style={{ color: `${this.props.color}` }}>from&nbsp;{new Date(this.props.date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join(' ')}</div>) 
        }
    };

    handleSubmit(e) {
        e.preventDefault();

        let updatedMetric = {
            _id: this.props.id,
            amt: this.state.amt,
            unit: this.state.unit
        }

        this.props.editHydration(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
          <div className="hydration-edit">
            <form onSubmit={this.handleSubmit}>
              {this.showTitle()}

              <div className="form">
                {/* <i className="fas fa-tint"></i> */}
          
              {this.changeLabel()}
                  <div id="add-edit-inputs">
                    <div>Daily Water Intake</div>
                    <div>
                      <select
                        name="amt"
                        value={this.state.amt}
                        onChange={this.update("amt")}
                      >
                        <option disabled value="">&nbsp;- Count -&nbsp;</option>
                        <option value="0">0</option>
                        <option value="1">1 | One 8 oz. serving</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6 | One 1.5 L Water Bottle</option>
                        <option value="7">7</option>
                        <option value="8">8 | Recommended Daily Amount</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16 | One Gallon</option>
                      </select>

                      <select
                        id="unit"
                        name="Unit"
                        value={this.state.unit}
                        onChange={this.update("unit")}
                      >
                        <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
                        <option value="cup">cup(s)</option>
                        <option value="gallon">gallon(s)</option>
                      </select>
                    </div>

                  </div>

                <div><input id="edit-button" type="submit" value="Update Metric" /></div>
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(HydrationsEditForm);