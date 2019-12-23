import React from "react";
import '../App.css';
import DisplayTweet from "./displayTweet";

function DisplayTweetList(props) {


    
    return (
      <div id="tweetList">
          {
              props.tweetList.map(tweet => <DisplayTweet userName= {tweet.userName} date= {tweet.date} content= {tweet.content} key={[tweet.date, +"by "+ tweet.userName]} />)
          }
      </div>     
    )
}

export default DisplayTweetList;