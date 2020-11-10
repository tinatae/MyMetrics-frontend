import React from 'react';
import { withRouter } from 'react-router-dom';
import "../stylesheets/fa-icons.css";
import "../stylesheets/login.css";

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            username: "",
            password: "",
            password2: "",
            errors: {},
        };

        this.handleSignup = this.handleSignup.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleDemo = this.handleDemo.bind(this);

        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push("/")
            .then(this.setState({ errors: nextProps.errors }))
        }
         else if (nextProps.signedIn === true) {
            this.props.closeModal
            .then(this.setState({ errors: nextProps.errors }))
        };

        this.setState({ errors: nextProps.errors });
    }

    handleLogin(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.processForm(user)
            .then(() => this.props.closeModal)
            .then(() => this.props.history.push("/"))
    }

    handleDemo(e) {
        e.preventDefault();

        const user = {
            email: "octopus@octopus.com",
            password: "123456"
        };

        let that = this;

        for (let i = 0; i < user.email.length; i++) {
            setTimeout(function() {
                that.setState({email: that.state.email + user.email[i]})
            }, i * 80, i)
        }

        for (let i = 0; i < user.password.length; i++) {
            setTimeout(function() {
                that.setState({password: that.state.password + user.password[i]})
            }, i*90 + 1700, i)
        }


        setTimeout(function () {
            that.props.processForm(user)
                .then(() => that.props.closeModal)
                .then(() => that.props.history.push("/")) 
        }, 2300)  
    }

    handleSignup(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.processForm(user)
            .then(() => this.props.closeModal())
    }


    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li key={`error-${i}`}>{this.state.errors[error]}</li>
                ))}
            </ul>
        );
    }
    

    render() {
        if (this.props.formType === "login") {
    
            return (
              <div id="login-form">
                <div className="session-form">
                  <form onSubmit={this.handleLogin}>
                    <h3>Welcome to</h3>
                    <h2>
                      <i className="fas fa-project-diagram"></i>MyMetrics
                    </h2>
                    <div id="tagline">Your Personal Daily Habit Tracker</div>
                    <div>Please {this.props.formType} below</div>

                    {this.renderErrors()}
                    <div>
                      <label>
                        Email
                        <input
                          type="text"
                          placeholder="hello@hello.com"
                          value={this.state.email}
                          onChange={this.update("email")}
                        />
                      </label>
                      <label>
                        Password
                        <input
                          value={this.state.password}
                          onChange={this.update("password")}
                        />
                      </label>
                    </div>
                    <input
                      id="login-button"
                      type="submit"
                      value="Login"
                    //   value={this.props.formType}
                    />
                  </form>
                  <div id="other-buttons">
                    <button onClick={this.handleDemo}>Demo Login</button>
                    {this.props.otherForm}
                  </div>
                </div>
              </div>
            );
        } else {
            return (
                <div id="signup-form">
                    <div className="session-form">
                        <form onSubmit={this.handleSignup}>          
                            <h3>First Time Here&nbsp;?</h3>
                            <div id="welcome">W E L C O M E !</div>
                            <div id="other-buttons">Please {this.props.formType} Below or return to {this.props.otherForm}</div>
                                  
                            {this.renderErrors()}
                            <div className="signup-form">
                                <div>
                                    <label>Email
                                        <input type="text" placeholder="hello@hello.com" value={this.state.email} onChange={this.update('email')} />
                                    </label>
                                </div>
                                <div>
                                    <label>Username
                                        <input type="text" placeholder="username" value={this.state.username} onChange={this.update('username')} />
                                    </label>
                                </div>
                                <div>
                                    <label>New Password
                                        <input value={this.state.password} placeholder="min. 6-character length" onChange={this.update('password')} />
                                    </label>
                                </div>
                                <div>
                                    <label>New Password one more time, please
                                        <input value={this.state.password2} placeholder="min. 6-character length" onChange={this.update('password2')} />
                                    </label>
                                </div>
                             
                                <div id="signup-submit">
                                    <input id="signup-button" type="submit" value={this.props.formType} />
                                </div>
    
                            </div>
                        </form>
                    </div>
                </div>
            )

        }
    }
}

export default withRouter(SessionForm);