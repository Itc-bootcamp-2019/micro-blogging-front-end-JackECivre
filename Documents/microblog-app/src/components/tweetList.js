import React from "react";
import '../App.css';
import DisplayTweet from "./displayTweet";

function DisplayTweetList(props) {


    
    return (
      <div id="tweetList">
          {
              props.tweetList.map(tweet => <DisplayTweet userName= {tweet.userName} timeStamp= {tweet.timeStamp} tweetInput= {tweet.tweetInput} key={[tweet.timeStamp, +"by "+ tweet.userName]} />)
          }
      </div>     
    )
}

export default DisplayTweetList;