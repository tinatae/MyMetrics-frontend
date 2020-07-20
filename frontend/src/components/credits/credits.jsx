import React from 'react';
import {withRouter} from 'react-router-dom';
import '../stylesheets/credits.css';

class Credits extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        };

        this.backToTop = this.backToTop.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
    };



    backToTop(e) {
        return e => {
            window.scrollTo(0, 0)
        }
    }

    goToIndex(e) {
        return e => {
            this.props.history.push('/');
        }
    }

    render() {
        return (

            <div className="credits">
                <h2>{this.props.formType}</h2>
                <div id="return-index">To return to the Main Index Page (what you were most likely looking for) click <button onClick={this.goToIndex()}><span>here</span></button></div>
                <div id="return-index">or else please feel free to peruse the artists & artwork below</div>
                <div id="artist">
                    <div>D A V E&emsp;S E B E L E</div>
                    <div>Login Form & Main Metric Background</div>
                    <img src='/colors.jpg' alt="Flashes of Rainbow Color Block" />
                </div>
                <div id="artist">
                    <div>V I K T O R&emsp;F O R G A C S</div>
                    <div>Sign-up Form Background</div>                 
                    <img src='/circles.jpg' alt="Kaleidoscopic Rainbow Circle Pattern"/>
                </div>
                <div id="artist">
                    <div>S O C I A L . C U T</div>
                    <div>Mental Metric Form Background</div>                   
                    <img src='/clouds.jpg' alt="Nondescript light blue sky with clouds" />
                </div>
             
                <div id="artist">
                    <div>S E A N&emsp;S I N C L A I R</div>
                    <div>Challenge Form Background</div>                 
                    <img src='/prism.jpg' alt="Soft Rainbow Palette" />
                </div>

                <div id="unsplash">All images taken from https://unsplash.com.
                <br />I like to make a little space for the artists because honestly that's the least I can do for using their art!
                <br/>- they gave me one less thing to worry about<i className="fas fa-laugh-beam"></i></div>         
            </div>

        )
    }
};

export default withRouter(Credits);

