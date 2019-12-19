import React from "react";
import '../App.css';



function DisplayTweet(props) {
    
    let displayUserName = localStorage.getItem("userName");
    let timeStamp = localStorage.getItem("timeStamp");
    let tweetInput = localStorage.getItem("tweet")

    return (
        <div id="newTweetContainer" >
            <span id="username" > {displayUserName} </span>
            <span id="timeStamp" > {timeStamp} </span>
            <p id="tweetOutput"> {tweetInput} </p>
        </div>
    )
}

export default DisplayTweet;