import React from 'react';
import { withRouter } from "react-router-dom";
import { AllColoredIcons } from "../../fields/shared/style_refs";

class CigarettesEditForm extends React.Component {
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
        this.props.fetchCigarette(this.props.id);
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
          return (<div id="update" style={{ color: `${this.props.color}` }}>{AllColoredIcons["Cigarette"]}<span>UPDATE TODAY'S CIGARETTE METRIC</span></div>)
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

        this.props.editCigarette(updatedMetric)
        .then(() => window.location.reload()); 
    };

    render() {

        return (
          <div className="cigarette-edit">
            <form onSubmit={this.handleSubmit}>
              {this.showTitle()}

              <div className="form">
                {this.changeLabel()}
                <div id="add-edit-inputs">
                  <div>Daily Cigarette Count</div>
                  <div>
                    <select
                      name="amt"
                      value={this.state.amt}
                      onChange={this.update("amt")}
                    >
                      <option disabled value="">&nbsp;- Count -&nbsp;</option>
                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10 | Half Pack</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20 | Full Pack</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                      <option value="31">31</option>
                      <option value="32">32</option>
                      <option value="33">33</option>
                      <option value="34">34</option>
                      <option value="35">35</option>
                      <option value="36">36</option>
                      <option value="37">37</option>
                      <option value="38">38</option>
                      <option value="39">39</option>
                      <option value="40">40 | 2 Full Packs</option>
                    </select>

                    <select
                      id="unit"
                      name="Unit"
                      value={this.state.unit}
                      onChange={this.update("unit")}
                    >
                      <option disabled value="">&nbsp;- Unit Type -&nbsp;</option>
                      <option value="cigarette">cigarette(s)</option>
                      <option value="pack">pack(s)</option>
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

export default withRouter(CigarettesEditForm);