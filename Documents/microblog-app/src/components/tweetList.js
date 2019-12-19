import React from "react";
import '../App.css';
import DisplayTweet from "./displayTweet";

function DisplayTweetList() {
    const tweetList = [{}];
    return (
      <div id="tweetList">
          {
              tweetList.map(tweet => <DisplayTweet/>)
          }
      </div>     
    )
}

export default DisplayTweetList;