# MyMetrics
Personal Lifestyle Analytics. Track and/or share what you like.

#### Built On:
* MongoDB
* Express
* React
* Node.js
* Chart.js

#### Overview:
Choose from a broad variety of metric categories--ranging from dietary & auxiliary intakes, daily activities & community-focused interests. The focus is on the individual user as they choose from the above 20 categories, enter daily inputs & reflect on their daily practices.

Categories deemed to be "Challenge" categories are tracked and visualized (graphed-out) for the user on a private user page.

#### Features:
* ~ 20 Lifestyle Metrics Categories to choose from (including Alcohol Intake, Carb Count, Mindfulness, Fasting Hours, Exercise, Supporting Local Business...)
* User-Designated "Challenge" Categories
* Built-in "Mental State" Category
* Private Challenge & Mental State Visualization
* Badges given for Challenge Achievement & Life Events

#### Functionalities: 
* Ability to add/edit/delete/make private individual metrics & "Challenge" categories
* Chart.js graphs visualizing user metrics with tooltip 'Notes from the Day' and/or Running Averages where applicable

#### Sample Code:
  ##### 'Add Metric' Page
  ##### Every posted metric is intended to represent one user's total daily count. If a metric has already been created for the day, the edit container is rendered instead of 'add new'. The code below is from the 'Add Metric' Page (main metric-adding hub) & similar logic can be seen on the User Profile & Explore pages.
  
    let madeToday = [];                                                        

    this.props.user.metrics.reverse().forEach(metric => {
        if (new Date(metric.date).getMonth() + 1 === new Date().getMonth() + 1 
          && new Date(metric.date).getDate() === new Date().getDate()) {
            madeToday.push(metric)                                                            
        } else { return madeToday }                   
    })
    
    const challengeNames = this.props.user.challenges.map(challenge =>                 
        challenge.name
    )

    let showing = [];
    let nonChallengeEditContainer = [];

    const challengeEditContainer = madeToday.map(made => {               
        if (challengeNames.includes(made.category)) {
            showing.push(made.category);
            return (this.fetchEdit(made))
        } else { 
            showing.push(made.category);
            nonChallengeEditContainer.push(this.fetchEdit(made));    
            return null;
        }
      }
    )
    
    let challengeAddContainer = [];                                                

    const nonChallengeAddContainer = Object.keys(allFields).map(name => {
        if (challengeNames.includes(name) && !showing.includes(name)) {
            challengeAddContainer.push(allFields[name])                                     
        } else if (!showing.includes(name) && !challengeNames.includes(name)) {
            return allFields[name]                                                               
        }
      }
    )
    
  ##### Profile Metric Holder
  ##### Keeping with the theme of editability, this code was written for edit/delete functionality on the User Profile Page. Edit & Delete Icons appear on the user's own profile allowing metric edits within 24 hours of creation--because we figured meaningful changes would be made within one day of posting--while allowing deletion at any time. The edit button is linked to a slice of state that returns the respective edit container when the button is clicked.
  
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
    
    ###### ... 
    ###### render()
    ###### return ...
      
    <div style={{ background: `${color}`}} id="metric-holder-content">
        <div id="metric-content">
            <div id="date">{new Date(this.props.date).toLocaleDateString('en-US', { weekday: 'short', month: 'numeric', day: 'numeric' }).split(',').join('.')}</div>
            <div id="logo" onClick={this.exploreCategory(route)}>{pic} {name}</div>
            <div id="info">{this.checkYN(this.props.amt)} {this.checkPlural(this.props.amt, this.props.unit)}</div>
            <div>{this.makeEdits(this.props.currentUserId, this.props.userId)}</div>
        </div>
    </div>
    
#### Future add-ons:
* D3 swap for more graphing functionality
* Various 'About Me' features built-out--especially 'Countries Travelled'
* Direct messaging and/or chat that would allow users to contact other users they are interested in (the app thus far does not allow following, friending, or commenting in a bid to minimize harmful comments, shaming and/or 'majority rule'-type effects.. but still wants to feel semi-social & promote community)
* More metric categories