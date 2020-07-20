import React from "react";
import { FieldNames } from '../fields/shared/style_refs';
import '../stylesheets/fa-icons.css';
import "../stylesheets/profile.css";

// ({ user, userId, currentUserId, userGoodDeeds, editUser, editBadge })

class ProfileBadgeHolder extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editBadge: this.props.editBadge,
            joinedMakePrivate: this.props.user.joinedMakePrivate,
            survivorMakePrivate: this.props.user.survivorMakePrivate,
            countriesTravelledMakePrivate: this.props.user.countriesTravelledMakePrivate,
            goodDeedMakePrivate: this.props.user.goodDeedMakePrivate
        }

        this.joinedBadge = this.joinedBadge.bind(this);
        this.survivorBadge = this.survivorBadge.bind(this);
        this.travelBadge = this.travelBadge.bind(this);
        this.goodDeedBadge = this.goodDeedBadge.bind(this);
        this.goodDeedCount = this.goodDeedCount.bind(this);
        this.publicChallenges = this.publicChallenges.bind(this);

        this.makeEdits = this.makeEdits.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleFalseStyle = this.handleFalseStyle.bind(this);
        this.handleTrueStyle = this.handleTrueStyle.bind(this);
    }

    componentDidMount() {
        this.setState({editBadge: this.props.editBadge})
    };

    makeEdits(field) {
        if (this.props.editBadge === true) {  

            return (
              <div id="badge-eyeballs">
                    <button value="false" onClick={this.handleClick(field)}>
                        <i style={this.handleFalseStyle(field)} className="fas fa-eye"></i>
                    </button>

                    <button value="true" onClick={this.handleClick(field)}>
                        <i style={this.handleTrueStyle(field)} className="fas fa-eye-slash"></i>
                    </button>
              </div>
            );
        } else {return null}   
    };

    handleFalseStyle = (field) => {
        switch(field) {
            case "joinedMakePrivate":
                if (this.state.joinedMakePrivate === false) 
                    {return {color: 'blue'}} else {
                        return {color: 'lightgrey'}}
            case "survivorMakePrivate":
                if (this.state.survivorMakePrivate === false) 
                    {return {color: 'blue'}} else {
                        return {color: 'lightgrey'}}
            case "countriesTravelledMakePrivate":
                if (this.state.countriesTravelledMakePrivate === false) 
                    {return {color: 'blue'}} else {
                        return {color: 'lightgrey'}}
            case "goodDeedMakePrivate":
                if (this.state.goodDeedMakePrivate === false) 
                    {return {color: 'blue'}} else {
                        return {color: 'lightgrey'}}
            default:
                return {color: 'lightgrey'}
        }
    }

    handleTrueStyle = (field) => {
        switch(field) {
            case "joinedMakePrivate":
                if (this.state.joinedMakePrivate === true) 
                    {return {color: 'red'}} else {
                        return {color: 'lightgrey'}}
            case "survivorMakePrivate":
                if (this.state.survivorMakePrivate === true) 
                    {return {color: 'red'}} else {
                        return {color: 'lightgrey'}}
            case "countriesTravelledMakePrivate":
                if (this.state.countriesTravelledMakePrivate === true) 
                    {return {color: 'red'}} else {
                        return {color: 'lightgrey'}}
            case "goodDeedMakePrivate":
                if (this.state.goodDeedMakePrivate === true) 
                    {return {color: 'red'}} else {
                        return {color: 'lightgrey'}}
            default:
                return {color: 'lightgrey'}
        }
    }

    handleClick = (field) => {
        const makeBoolean = { "true": true, "false": false };
   
        return e => {
  
            switch (field) {
                case "joinedMakePrivate":
                    console.log(field);
                    
                    let updatedUser = {
                        _id: this.props.userId,
                        bio: this.props.user.bio,
                        joinedMakePrivate: makeBoolean[e.currentTarget.value],
                        survivorMakePrivate: this.state.survivorMakePrivate,
                        survivor: this.props.user.survivor,
                        countriesTravelled: this.props.user.countriesTravelled,
                        countriesTravelledMakePrivate: this.state.countriesTravelledMakePrivate,
                        goodDeedMakePrivate: this.state.goodDeedMakePrivate
                    };
    
                    this.props.editUser(updatedUser)
                    .then(() => window.location.reload());
                    
                    break;
    
                case "survivorMakePrivate":
    
                    let updatedUser1 = {
                        _id: this.props.userId,
                        bio: this.props.user.bio,
                        joinedMakePrivate: this.state.joinedMakePrivate,
                        survivorMakePrivate: makeBoolean[e.currentTarget.value],
                        survivor: this.props.user.survivor,
                        countriesTravelled: this.props.user.countriesTravelled,
                        countriesTravelledMakePrivate: this.state.countriesTravelledMakePrivate,
                        goodDeedMakePrivate: this.state.goodDeedMakePrivate
                    };
    
                    this.props.editUser(updatedUser1)
                    .then(() => window.location.reload());
                    break;
    
                case "countriesTravelledMakePrivate":
    
                    let updatedUser2 = {
                        _id: this.props.userId,
                        bio: this.props.user.bio,
                        joinedMakePrivate: this.state.joinedMakePrivate,
                        survivorMakePrivate: this.state.survivorMakePrivate,
                        survivor: this.props.user.survivor,
                        countriesTravelled: this.props.user.countriesTravelled,
                        countriesTravelledMakePrivate: makeBoolean[e.currentTarget.value],
                        goodDeedMakePrivate: this.state.goodDeedMakePrivate
                    };
    
                    this.props.editUser(updatedUser2)
                    .then(() => window.location.reload());
                    break;
    
                case "goodDeedMakePrivate":
    
                    let updatedUser3 = {
                        _id: this.props.userId,
                        bio: this.props.user.bio,
                        joinedMakePrivate: this.state.joinedMakePrivate,
                        survivorMakePrivate: this.state.survivorMakePrivate,
                        survivor: this.props.user.survivor,
                        countriesTravelled: this.props.user.countriesTravelled,
                        countriesTravelledMakePrivate: this.state.countriesTravelledMakePrivate,
                        goodDeedMakePrivate: makeBoolean[e.currentTarget.value]
                    };
    
                    this.props.editUser(updatedUser3)
                    .then(() => window.location.reload());
                    break;
                default:
                    return console.log("Sorry, Badge update could not be made at this time");
            }
        }
    };

    joinedBadge() {
        if (this.props.user.joinedMakePrivate !== true || this.props.editBadge === true) {
            return (
                <div>
                    <span>{this.makeEdits("joinedMakePrivate")}</span>
                    <i className="fa fa-certificate"></i>
                    <br />Joined {new Date(this.props.user.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' })}
                </div>
            )
        } else { return null }
    };

    survivorBadge() {
        if ((this.props.user.survivor === true && this.props.user.survivorMakePrivate !== true) || this.props.editBadge === true) {
            return (
                <div>
                    <span>{this.makeEdits("survivorMakePrivate")}</span>
                    <i className="fa fa-ribbon"></i>
                    <br />Survivor
                </div>
            )
        } else { return null }
    };

    checkPlural(count) {
        if (count === 1) { return "Country" }
        else { return "Countries" }
    };

    travelBadge() {
        if (this.props.user.countriesTravelled) {
            const countryCount = this.props.user.countriesTravelled.length;
    
            if (this.props.user.countriesTravelledMakePrivate !== true || this.props.editBadge === true) {
                return (
                    <div>
                        <span>{this.makeEdits("countriesTravelledMakePrivate")}</span>
                        <i className="fa fa-passport"></i>
                        <br /><span>Has&nbsp;visited&nbsp;{countryCount}&nbsp;{this.checkPlural(countryCount)}
                        <br />Last&nbsp;visited:&nbsp;{this.props.user.countriesTravelled[countryCount - 1]}
                        {/* <br />Last&nbsp;visited:&nbsp;{this.props.user.countriesTravelled[this.props.user.countriesTravelled.length - 1]} */}
                        </span>
                    </div>
                )
            } 
        }
        else { return null }
    };

    goodDeedCount() {
        let count = 0;
        for (let i = 0; i < this.props.userGoodDeeds.length; i++) {
            if (this.props.userGoodDeeds[i].amt === "Yes") { count += 1 } else { count += 0 }
        }
        return count;
    };

    goodDeedBadge() {
        if (this.props.user.goodDeedMakePrivate !== true || this.props.editBadge === true) {
            return (
                <div>
                    <span>{this.makeEdits("goodDeedMakePrivate")}</span>
                    <i className="far fa-star"></i>
                    <br />Good&nbsp;Deed&nbsp;Count: <br />
                    {this.goodDeedCount()}&nbsp;to-date
                </div>
            )
        } else { return null }
    };

    publicChallenges() {
        let challengeOne = [];
        let challengeTwo = [];
        let challengeThree = [];

        function checkPluralDay(count) {
            if (count === 1) { return "Day" }
            else { return "Days" }
        };

        this.props.user.challenges.forEach(challenge => {
            if (challenge.makePrivate !== true && challengeOne.length === 0) {
                challengeOne = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
            } else {
                if (challenge.makePrivate !== true && challengeTwo.length === 0) {
                    challengeTwo = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
                } else {
                    if (challenge.makePrivate !== true && challengeThree.length === 0) {
                        challengeThree = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
                    }
                }
            }
        })

        if (challengeThree.length !== 0) {
            return (
                <div className="challenge-badges">

                    <div>
                        <i className="fa fa-trophy"></i>
                        <br />{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
                        {FieldNames[challengeOne[0]]}<br />Challenge
                    </div>

                    <div>
                        <i className="fa fa-award"></i>
                        <br />{challengeTwo[1]}&nbsp;{checkPluralDay(challengeTwo[1])}<br />
                        {FieldNames[challengeTwo[0]]}<br />Challenge
                    </div>

                    <div>
                        <i className="fa fa-medal"></i>
                        <br />{challengeThree[1]}&nbsp;{checkPluralDay(challengeThree[1])}<br />
                        {FieldNames[challengeThree[0]]}<br />Challenge
                    </div>

                </div>
            )
        } else {
            if (challengeTwo.length !== 0) {
                return (
                    <div className="challenge-badges">
                        <div>
                            <i className="fa fa-trophy"></i>
                            <br />{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
                            {FieldNames[challengeOne[0]]}<br />Challenge
                        </div>

                        <div>
                            <i className="fa fa-award"></i>
                            <br />{challengeTwo[1]}&nbsp;{checkPluralDay(challengeTwo[1])}<br />
                            {FieldNames[challengeTwo[0]]}<br />Challenge
                        </div>
                    </div>
                )
            } else {
                if (challengeOne.length !== 0) {
                    return (
                        <div className="challenge-badges">
                            <div>
                                <i className="fa fa-trophy"></i>
                                <br />{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
                                {FieldNames[challengeOne[0]]}<br />Challenge
                            </div>
                        </div>
                    )
                } else { return null }
            }
        }
    };

    render() {
       if (this.props.user !== undefined && this.props.user !== null) {
           return (      
                   <div className="badge-holder">
                       <div className="non-challenge-badges">
                           <span>{this.joinedBadge()}</span>
                           <span>{this.survivorBadge()}</span>
                           <span>{this.travelBadge()}</span>
                           <span>{this.goodDeedBadge()}</span>
                       </div>
                       <div>{this.publicChallenges()}</div>
                   </div>
             
           )
       } else { return <div>One minute while we load</div>}
    }

};


export default ProfileBadgeHolder;

    

    // const handleClick = (field) => e => {

    //     let updatedUser = {
    //         _id: this.props.user._id,
    //        
    //         survivorMakePrivate: this.props.user.survivorMakePrivate,
    //         countriesTravelled: this.props.user.countriesTravelled,
    //         countriesTravelledMakePrivate: this.props.user.countriesTravelledMakePrivate,
    //         joinedMakePrivate: this.props.user.joinedMakePrivate
    //     };

    //     this.props.editUser(updatedUser);
    //     editUser(userId);
    // };

    // function makeEdits(currentUserId, userId) {
    //     if (currentUserId === userId) {
    //         return (
    //             <div onClick={handleClick(field)} ><i className="far fa-edit"></i></div>
    //         )
    //     } else { return null }
    // };


//-----------------------------------------------

// formType: "Edit Badge Gallery",



// const ProfileBadgeHolder = ({ user, userId, currentUserId, userGoodDeeds, editUser }) => {

//     const countryCount = user.countriesTravelled.length;

//     function joinedBadge() {
//         if (user.joinedMakePrivate !== true) {
//             return (
//                 <div>
//                     <i className="fa fa-certificate"></i>
//                     <br />Joined { new Date(user.date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }) }
//                 </div>
//             )
//         } else { return null }
//     };

//     function survivorBadge() {
//         if (user.survivor === true && user.survivorMakePrivate !== true) {
//             return (
//                 <div>
//                     <i className="fa fa-ribbon"></i>
//                     <br />Survivor
//                 </div>
//             )
//         } else { return null }
//     };

//     function checkPlural(count) {
//         if (count === 1) { return "Country" }
//         else { return "Countries" }
//     };

//     function travelBadge() {
//         if (user.countriesTravelledMakePrivate !== true) {
//             return (
//                 <div><i className="fa fa-passport"></i>
//                     <br /><span>Has&nbsp;visited&nbsp;{countryCount}&nbsp;{checkPlural(countryCount)}
//                         <br />Last&nbsp;visited:&nbsp;{user.countriesTravelled[user.countriesTravelled.length - 1]}</span>
//                 </div>
//             )
//         } else { return null }
//     };

//     function goodDeedCount() {
//         let count = 0;
//         for (let i = userGoodDeeds.length - 1; i >= 0; i--) {
//             if (userGoodDeeds[i].amt === "Yes") { count += 1 } else { count += 0 }
//         }
//         return count;
//     };

//     function goodDeedBadge() {
//         if (user.goodDeedMakePrivate !== true) {
//             return (
//                 <div>
//                     <i className="far fa-star"></i>
//                     <br />Good&nbsp;Deed&nbsp;Count: <br />
//                     { goodDeedCount() }&nbsp;to - date
//                 </div>
//             )
//         } else { return null }
//     };


//     function checkPluralDay(count) {
//         if (count === 1) {return "Day"}
//         else { return "Days" }
//     };

//     function publicChallenges() {
//         let challengeOne = [];
//         let challengeTwo = [];
//         let challengeThree = [];

//         user.challenges.forEach(challenge => {
//             if (challenge.makePrivate !== true && challengeOne.length === 0) {
//                 challengeOne = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
//             } else {
//                 if (challenge.makePrivate !== true && challengeTwo.length === 0) {
//                     challengeTwo = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
//                 } else {
//                     if (challenge.makePrivate !== true && challengeThree.length === 0) {
//                         challengeThree = [challenge.name, Math.floor((Date.now() - new Date(challenge.date).getTime()) / (24 * 60 * 60 * 1000))]
//                     }
//                 }
//             }
//         })

//         if (challengeThree.length !== 0) {
//             return (
//                 <div className="challenge-badges">

//                     <div>
//                         <i className="fa fa-trophy"></i>
//                         <br/>{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
//                         {FieldNames[challengeOne[0]]}<br/>Challenge
//                     </div>

//                     <div>
//                         <i className="fa fa-award"></i>
//                         <br/>{challengeTwo[1]}&nbsp;{checkPluralDay(challengeTwo[1])}<br />
//                         {FieldNames[challengeTwo[0]]}<br/>Challenge
//                     </div>

//                     <div>
//                         <i className="fa fa-medal"></i>
//                         <br/>{challengeThree[1]}&nbsp;{checkPluralDay(challengeThree[1])}<br />
//                         {FieldNames[challengeThree[0]]}<br/>Challenge
//                     </div>
//                 </div>
//             )  
//         } else { 
//             if (challengeTwo.length !== 0) {
//                 return (
//                     <div className="challenge-badges">
//                         <div>
//                             <i className="fa fa-trophy"></i>
//                             <br />{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
//                             {FieldNames[challengeOne[0]]}<br />Challenge
//                         </div>

//                         <div>
//                             <i className="fa fa-award"></i>
//                             <br />{challengeTwo[1]}&nbsp;{checkPluralDay(challengeTwo[1])}<br />
//                             {FieldNames[challengeTwo[0]]}<br />Challenge
//                         </div>
//                     </div>
//                 )
//             } else {
//                 if (challengeOne.length !== 0) {
//                     return (
//                         <div className="challenge-badges">
//                             <div>
//                                 <i className="fa fa-trophy"></i>
//                                 <br />{challengeOne[1]}&nbsp;{checkPluralDay(challengeOne[1])}<br />
//                                 {FieldNames[challengeOne[0]]}<br />Challenge
//                             </div>
//                         </div>
//                     )
//                 } else { return null }
//             } 
//         }
//     };

//     // const handleClick = (field) => e => {

//     //     let updatedUser = {
//     //         _id: this.props.user._id,
//     //         bio: this.props.user.bio,
//     //         survivor: this.props.user.survivor,
//     //         survivorMakePrivate: this.props.user.survivorMakePrivate,
//     //         countriesTravelled: this.props.user.countriesTravelled,
//     //         countriesTravelledMakePrivate: this.props.user.countriesTravelledMakePrivate,
//     //         joinedMakePrivate: this.props.user.joinedMakePrivate
//     //     };

//     //     this.props.editUser(updatedUser);
//     //     editUser(userId);
//     // };

//     // function makeEdits(currentUserId, userId) {
//     //     if (currentUserId === userId) {
//     //         return (
//     //             <div onClick={handleClick(field)} ><i className="far fa-edit"></i></div>
//     //         )
//     //     } else { return null }
//     // };

//     return (
//         <div className="badge-holder">  
//             {/* <div>{makeEdits()}</div> */}
//             <div className="non-challenge-badges">
//                 <span>{joinedBadge()}</span>
//                 <span>{survivorBadge()}</span>      
//                 <span>{travelBadge()}</span>
//                 <span>{goodDeedBadge()}</span>
//             </div>
//             <div>{publicChallenges()}</div>
//         </div>
//     )
// };

// export default ProfileBadgeHolder;


