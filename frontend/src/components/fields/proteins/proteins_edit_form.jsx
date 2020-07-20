import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class ProteinsEditForm extends React.Component {
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
        this.props.fetchProtein(this.props.id);
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
          return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Protein"]}<span>UPDATE TODAY'S PROTEIN METRIC</span></div>)
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

        this.props.editProtein(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
          <div className="protein-edit">
            <form onSubmit={this.handleSubmit}>
              {this.showTitle()}

              <div className="form">
                {/* <i className="fas fa-egg"></i> */}
          
                {this.changeLabel()}
                <div id="add-edit-inputs">
                  <div>Daily Protein Intake</div>
                  <div>
                    <input
                      id="number-input"
                      type="number"
                      value={this.state.amt}
                      placeholder="Please Enter Number"
                      onChange={this.update("amt")}
                    />

                    <select
                      id="unit"
                      name="Unit"
                      value={this.state.unit}
                      onChange={this.update("unit")}
                    >
                      <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
                      <option value="oz.">oz.</option>
                      <option value="gram">gram(s)</option>
                      <option value="serving">serving(s)</option>
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

export default withRouter(ProteinsEditForm);