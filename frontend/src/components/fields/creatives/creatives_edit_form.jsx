import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class CreativesEditForm extends React.Component {
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
        this.props.fetchCreative(this.props.id);
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
          return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Creative"]}<span>UPDATE TODAY'S CREATIVITY METRIC</span></div>)
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

        this.props.editCreative(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
          <div className="creative-edit">
            <form onSubmit={this.handleSubmit}>
              {this.showTitle()}

              <div className="form">
                {this.changeLabel()}

                {/* <i className="fas fa-palette"></i> */}
          
                <div id="add-edit-inputs">
                  <div>Did you create something today?</div>
                  <div>
                    <select
                      name="amt"
                      value={this.state.amt}
                      onChange={this.update("amt")}
                    >
                      <option disabled value="">&nbsp;Yes | No&nbsp;</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>

                    <input
                      id="textbox"
                      type="text"
                      value={this.state.unit}
                      placeholder="What did you make? We like to make a lot of things here too"
                      onChange={this.update("unit")}
                    />
                  </div>
                </div>

                <div>
                  <input id="edit-button" type="submit" value="Update Metric" />
                </div>
              </div>
            </form>
          </div>
        );
    }
}

export default withRouter(CreativesEditForm);