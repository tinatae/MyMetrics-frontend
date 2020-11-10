import React from 'react';
import { withRouter } from 'react-router-dom';
import '../stylesheets/fa-icons.css';

class ProfileAddBioForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userUpdated: false,

      bio: this.props.user.bio,
      survivor: this.props.user.survivor,
      survivorMakePrivate: this.props.user.survivorMakePrivate,
      newCountry: "",
      countriesTravelled: this.props.user.countriesTravelled,
      countriesTravelledMakePrivate: this.props.user.countriesTravelledMakePrivate,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.askSurvivorBadge = this.askSurvivorBadge.bind(this);
    this.countriesVisited = this.countriesVisited.bind(this);
  }

  update(field) {
    return e => { this.setState({ [field]: e.currentTarget.value }) }
  }; 
  
  updateCountries(country) {   
    return e => {
      this.setState({newCountry: e.currentTarget.value});

      if (this.state.countriesTravelled === null || this.state.countriesTravelled === undefined) {
        this.setState({ countriesTravelled: [e.currentTarget.value] })
      } else if (!this.state.countriesTravelled.includes(e.currentTarget.value)) {
        this.state.countriesTravelled.push(e.currentTarget.value);
        this.setState({ countriesTravelled: this.state.countriesTravelled })
      } else { return this.state.countriesTravelled}
    } 
  };

  askSurvivorBadge() {
    if (this.state.survivor === true ) {
      return (
        <div>
          <div id="bio-q-title">We have a badge we created to honor 'Survivors' as we like to say, that would show in your Badge Gallery, but we recognize that this is deeply personal information.<br/>Would you prefer to keep this information private?</div>
            <select name="survivorMakePrivate" value={this.state.survivorMakePrivate} onChange={this.update("survivorMakePrivate")} >
              <option disabled value=""> - Please Select One - </option>
              <option value="true">Yes, please</option>
              <option value="false">No, I don't mind</option>
            </select>
        </div>
      )
    } else { return null }
  };

  countriesVisited() {
    if (this.props.user.countriesTravelled === null || this.props.user.countriesTravelled === undefined) {
      return <div id="no-country">No countries entered</div>
    } else if (this.props.user.countriesTravelled.length > 0) {
      return (
        this.props.user.countriesTravelled.map(country => {
          return (<div id="country">{country}</div>)
        })
      )
    }
  };

  handleSubmit(e) {
    e.preventDefault();

    let updatedUser = {
      _id: this.props.user._id,
      bio: this.state.bio,
      joinedMakePrivate: this.props.user.joinedMakePrivate,
      goodDeedMakePrivate: this.props.user.goodDeedMakePrivate,
      survivor: this.state.survivor,
      survivorMakePrivate: this.state.survivorMakePrivate,
      countriesTravelled: this.state.countriesTravelled,
      countriesTravelledMakePrivate: this.state.countriesTravelledMakePrivate,
    };

    this.props.editUser(updatedUser)
      .then(() => window.location.reload());
  }

  render() {

    console.log(this.props.user);

    return (
      <form onSubmit={this.handleSubmit}>
        <div id="edit-bio-title">{this.props.formType}</div>
        <div>
          <div id="bio-q-title">Joined {new Date(this.props.user.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</div>
          <div id="bio-q-title">Edit Bio in the Box Below</div>
          <textarea
            value={this.state.bio} onChange={this.update('bio')}>
          </textarea>

          <div id="bio-q-title"><i className="fa fa-ribbon"></i>Have you survived or do you currently live with a major illness?</div>
            <select name="survivor" value={this.state.survivor} onChange={this.update("survivor")} >
              <option value='' disabled > - Please select a response - </option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
  
          <div>{this.askSurvivorBadge()}</div>

          <div className="add-countries">
            <div id="countries-travelled-words"><i className="fas fa-globe-americas"></i>Countries Visited</div>
            <div>{this.countriesVisited()}</div>
        
            <select name="newCountry" value={this.state.newCountry} onChange={this.updateCountries("newCountry")} >
              <option value="" disabled> - Please Select to add New Country - </option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antigua & Barbuda">Antigua & Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>  
              <option value="Botswana">Botswana</option>
              <option value="Brazil">Brazil</option>
              <option value="British Virgin Islands (B.V.I.)">British Virgin Islands</option>
              <option value="Brunei">Brunei</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cabo Verde">Cabo Verde</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Comoros">Comoros</option>
              <option value="Congo">Congo</option>
              <option value="Cook Islands">Cook Islands</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Côte D'Ivoire">Côte D'Ivoire</option>
              <option value="Croatia">Croatia</option>
              <option value="Cuba">Cuba</option>
              <option value="Cyprus">Cyprus</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Democratic Republic of the Congo">Democratic Republic of the Congo</option>
              <option value="Denmark">Denmark</option>
              <option value="Djibouti">Djibouti</option>
              <option value="Dominica">Dominica</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Ecuador">Ecuador</option>
              <option value="Egypt">Egypt</option>
              <option value="El Salvador">El Salvador</option>
              <option value="Equatorial Guinea">Equatorial Guinea</option>
              <option value="Eritrea">Eritrea</option>
              <option value="Estonia">Estonia</option>
              <option value="Eswatini">Eswatini</option>
              <option value="Ethiopia">Ethiopia</option>
              <option value="Falkland Islands">Falkland Islands</option>
              <option value="Faroe Islands">Faroe Islands</option>
              <option value="Fiji">Fiji</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="French Polynesia">French Polynesia</option>
              <option value="Gabon">Gabon</option>
              <option value="Gambia">Gambia</option>
              <option value="Georgia">Georgia</option>
              <option value="Germany">Germany</option>
              <option value="Ghana">Ghana</option>
              <option value="Gibraltar">Gibraltar</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Grenada">Grenada</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Guinea">Guinea</option>
              <option value="Guinea Bissau">Guinea Bissau</option>
              <option value="Guyana">Guyana</option>
              <option value="Haiti">Haiti</option>
              <option value="Honduras">Honduras</option>
              <option value="Hungary">Hungary</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran">Iran</option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Kosovo">Kosovo</option>
              <option value="Kurdistan Region">Kurdistan Region</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Laos">Laos</option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
              <option value="Lesotho">Lesotho</option>
              <option value="Liberia">Liberia</option>
              <option value="Libya">Libya</option>
              <option value="Liechtenstein">Liechtenstein</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Madagascar">Madagascar</option>
              <option value="Malawi">Malawi</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Maldives">Maldives</option>
              <option value="Mali">Mali</option>
              <option value="Malta">Malta</option>
              <option value="Marshall Islands">Marshall Islands</option>
              <option value="Mauritania">Mauritania</option>
              <option value="Mauritius">Mauritius</option>
              <option value="Mexico">Mexico</option>
              <option value="Micronesia">Micronesia</option>
              <option value="Moldova">Moldova</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Montenegro">Montenegro</option>
              <option value="Montserrat">Montserrat</option>
              <option value="Morocco">Morocco</option>
              <option value="Mozambique">Mozambique</option>
              <option value="Myanmar">Myanmar</option>
              <option value="Namibia">Namibia</option>
              <option value="Nauru">Nauru</option>
              <option value="Nepal">Nepal</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="North Korea">North Korea</option>
              <option value="North Macedonia">North Macedonia</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Norway">Norway</option>
              <option value="Oman">Oman</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Palau">Palau</option>
              <option value="Palestine">Palestine</option>
              <option value="Panama">Panama</option>
              <option value="Papua New Guinea">Papua New Guinea</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Philippines">Philippines</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Qatar">Qatar</option>
              <option value="Romania">Romania</option>
              <option value="Russian Federation">Russian Federation</option>
              <option value="Rwanda">Rwanda</option>  
              <option value="Saint Kitts & Nevis">Saint Kitts & Nevis</option> 
              <option value="Saint Lucia">Saint Lucia</option> 
              <option value="Saint Martin">Saint Martin</option> 
              <option value="Saint Vincent & the Grenadines">Saint Vincent & the Grenadines</option> 
              <option value="Samoa">Samoa</option> 
              <option value="San Marino">San Marino</option> 
              <option value="Sao Tome & Principe">Sao Tome & Principe</option> 
              <option value="Saudi Arabia">Saudi Arabia</option> 
              <option value="Sahrawi Arab Democratic Republic">Sahrawi Arab Democratic Republic</option> 
              <option value="Senegal">Senegal</option> 
              <option value="Serbia">Serbia</option> 
              <option value="Seychelles">Seychelles</option> 
              <option value="Sierra Leone">Sierra Leone</option> 
              <option value="Singapore">Singapore</option> 
              <option value="Slovakia">Slovakia</option> 
              <option value="Slovenia">Slovenia</option> 
              <option value="Solomon Islands">Solomon Islands</option> 
              <option value="Somalia">Somalia</option>
              <option value="South Africa">South Africa</option> 
              <option value="South Korea">South Korea</option> 
              <option value="South Sudan">South Sudan</option> 
              <option value="Spain">Spain</option> 
              <option value="Sri Lanka">Sri Lanka</option> 
              <option value="Sudan">Sudan</option> 
              <option value="Suriname">Suriname</option> 
              <option value="Sweden">Sweden</option> 
              <option value="Switzerland">Switzerland</option> 
              <option value="Syria">Syria</option>
              <option value="Taiwan">Taiwan</option> 
              <option value="Tajikistan">Tajikistan</option> 
              <option value="Tanzania">Tanzania</option> 
              <option value="Thailand">Thailand</option> 
              <option value="Tibet">Tibet</option> 
              <option value="Timor-Leste">Timor-Leste</option> 
              <option value="Togo">Togo</option> 
              <option value="Tonga">Tonga</option> 
              <option value="Trinidad & Tobago">Trinidad & Tobago</option> 
              <option value="Tunisia">Tunisia</option> 
              <option value="Turkey">Turkey</option> 
              <option value="Turkmenistan">Turkmenistan</option> 
              <option value="Tuvalu">Tuvalu</option>
              <option value="Uganda">Uganda</option> 
              <option value="Ukraine">Ukraine</option> 
              <option value="United Arab Emirates">United Arab Emirates</option> 
              <option value="United Kingdom">United Kingdom</option> 
              <option value="United States of America">United States of America</option> 
              <option value="Uruguay">Uruguay</option> 
              <option value="Uzbekistan">Uzbekistan</option>
              <option value="Vanuatu">Vanuatu</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
              <option value="Yemen">Yemen</option>
              <option value="Zambia">Zambia</option>
              <option value="Zimbabwe">Zimbabwe</option>
           </select>
          </div>

          <div className="add-countries">
              <div id="bio-q-title">
                  <i className="fa fa-passport"></i>
                  We have a Travel Badge that shows the number of countries you've travelled to.
                  <br/> Would you like for it to show in your Badge Gallery?
              </div>
              
              <select name="countriesTravelledMakePrivate" value={this.state.countriesTravelledMakePrivate} onChange={this.update("countriesTravelledMakePrivate")} >
                <option value="" disabled> - Please select a response - </option>
                <option value="false">Sure</option>
                <option value="true">No Thanks</option>
              </select>
            </div>
          </div>

        <input id="edit-button" type="submit" value={this.props.formType} />
      </form>
    )
  }
};

export default withRouter(ProfileAddBioForm);



     // this.returnToProfile = this.returnToProfile.bind(this);

    // returnToProfile() {
    //     this.props.history.render();
    // }



    // let timer;
    // let myInput = document.getElementById('newCountry');

    // myInput.addEventListener('keyup', () => {
    //   clearTimeout(timer);

    //   if (myInput.value) {
    //     timer = setTimeout(this.updateCountries(myInput.value), 5000);
    //   }
    // })

    // };


// const Countries = {
//   "Afghanistan": 0, "Albania": 0, "Algeria": 0, "Andorra": 0, "Angola": 0, "Anguilla": 0, "Antigua & Barbuda": 0, "Argentina": 0, "Armenia": 0, "Aruba": 0, "Australia": 0, "Austria": 0, "Azerbaijan": 0,
//   "Bahamas": 0, "Bahrain": 0, "Bangladesh": 0, "Barbados": 0, "Belarus": 0, "Belgium": 0, "Belize": 0, "Benin": 0, "Bermuda": 0, "Bhutan": 0, "Bolivia": 0, "Bosnia & Herzegovina": 0, "Botswana": 0, "Brazil": 0, "British Virgin Islands (B.V.I.)": 0, "Brunei": 0, "Bulgaria": 0, "Burkina Faso": 0, "Burundi": 0,
//   "Cabo Verde": 0, "Cambodia": 0, "Cameroon": 0, "Canada": 0, "Cayman Islands": 0, "Central African Republic": 0, "Chad": 0, "Chile": 0, "China": 0, "Colombia": 0, "Comoros": 0, "Congo": 0, "Cook Islands": 0, "Costa Rica": 0, "Côte D'Ivoire": 0, "Croatia": 0, "Cuba": 0, "Cyprus": 0, "Czech Republic": 0,
//   "Democratic Republic of the Congo": 0, "Denmark": 0, "Djibouti": 0, "Dominica": 0, "Dominican Republic": 0,
//   "Ecuador": 0, "Egypt": 0, "El Salvador": 0, "Equatorial Guinea": 0, "Eritrea": 0, "Estonia": 0, "Eswatini": 0, "Ethiopia": 0,
//   "Falkland Islands": 0, "Faroe Islands": 0, "Fiji": 0, "Finland": 0, "France": 0, "French Polynesia": 0,
//   "Gabon": 0, "Gambia": 0, "Georgia": 0, "Germany": 0, "Ghana": 0, "Gibraltar": 0, "Greece": 0, "Greenland": 0, "Grenada": 0, "Guatemala": 0, "Guinea": 0, "Guinea Bissau": 0, "Guyana": 0,
//   "Haiti": 0, "Honduras": 0, "Hungary": 0,
//   "Iceland": 0, "India": 0, "Indonesia": 0, "Iran": 0, "Iraq": 0, "Ireland": 0, "Israel": 0, "Italy": 0,
//   "Jamaica": 0, "Japan": 0, "Jordan": 0,
//   "Kazakhstan": 0, "Kenya": 0, "Kiribati": 0, "Kosovo": 0, "Kurdistan Region": 0, "Kuwait": 0, "Kyrgyzstan": 0,
//   "Laos": 0, "Latvia": 0, "Lebanon": 0, "Lesotho": 0, "Liberia": 0, "Libya": 0, "Liechtenstein": 0, "Lithuania": 0, "Luxembourg": 0,
//   "Madagascar": 0, "Malawi": 0, "Malaysia": 0, "Maldives": 0, "Mali": 0, "Malta": 0, "Marshall Islands": 0, "Mauritania": 0, "Mauritius": 0, "Mexico": 0, "Micronesia": 0, "Moldova": 0, "Monaco": 0, "Mongolia": 0, "Montenegro": 0, "Montserrat": 0, "Morocco": 0, "Mozambique": 0, "Myanmar": 0,
//   "Namibia": 0, "Nauru": 0, "Nepal": 0, "Netherlands": 0, "New Zealand": 0, "Nicaragua": 0, "Niger": 0, "Nigeria": 0, "North Korea": 0, "North Macedonia": 0, "Northern Mariana Islands": 0, "Norway": 0,
//   "Oman": 0,
//   "Pakistan": 0, "Palau": 0, "Palestine": 0, "Panama": 0, "Papua New Guinea": 0, "Paraguay": 0, "Peru": 0, "Philippines": 0, "Poland": 0, "Portugal": 0, "Puerto Rico": 0,
//   "Qatar": 0,
//   "Romania": 0, "Russian Federation": 0, "Rwanda": 0,
//   "Saint Kitts & Nevis": 0, "Saint Lucia": 0, "Saint Martin": 0, "Saint Vincent & the Grenadines": 0, "Samoa": 0, "San Marino": 0, "Sao Tome & Principe": 0, "Saudi Arabia": 0, "Sahrawi Arab Democratic Republic": 0, "Senegal": 0, "Serbia": 0, "Seychelles": 0, "Sierra Leone": 0, "Singapore": 0, "Slovakia": 0, "Slovenia": 0, "Solomon Islands": 0, "Somalia": 0,
//   "South Africa": 0, "South Korea": 0, "South Sudan": 0, "Spain": 0, "Sri Lanka": 0, "Sudan": 0, "Suriname": 0, "Sweden": 0, "Switzerland": 0, "Syria": 0,
//   "Taiwan": 0, "Tajikistan": 0, "Tanzania": 0, "Thailand": 0, "Tibet": 0, "Timor-Leste": 0, "Togo": 0, "Tonga": 0, "Trinidad & Tobago": 0, "Tunisia": 0, "Turkey": 0, "Turkmenistan": 0, "Tuvalu": 0,
//   "Uganda": 0, "Ukraine": 0, "United Arab Emirates": 0, "United Kingdom": 0, "United States of America": 0, "Uruguay": 0, "Uzbekistan": 0,
//   "Vanuatu": 0, "Venezuela": 0, "Vietnam": 0,
//   "Yemen": 0,
//   "Zambia": 0, "Zimbabwe": 0
// };