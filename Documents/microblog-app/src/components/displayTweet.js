import React from "react";
import '../App.css';

   

function DisplayTweet(props) {
    const userName=  props.userName;
    const timeStamp= props.timeStamp;
    const tweetInput= props.tweetInput;
    
    
    

return(
        <div id="newTweetContainer" >
            <span id="username" > {userName} </span>
            <span id="timeStamp" > {timeStamp} </span>
            <p id="tweetOutput"> {tweetInput} </p>
        </div>
)    




    
//     let displayUserName = localStorage.getItem("userName");
//     let timeStamp = localStorage.getItem("timeStamp");
//     let tweetInput = localStorage.getItem("tweet")

//     return (
//         <div id="newTweetContainer" >
//             <span id="username" > {displayUserName} </span>
//             <span id="timeStamp" > {timeStamp} </span>
//             <p id="tweetOutput"> {tweetInput} </p>
//         </div>
//     )
}

export default DisplayTweet;