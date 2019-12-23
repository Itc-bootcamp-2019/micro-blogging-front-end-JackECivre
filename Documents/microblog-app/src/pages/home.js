import React from "react";
import '../App.css';
import DisplayTweetList from "../components/tweetList"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweets: JSON.parse(localStorage.getItem("tweetStorage")) || [],
            input: ""
        }
    }

    setTweetInput(event) {
        this.setState({ input: event.target.value });
    }

    createTweet() {

        let newTweet = {
            userName: localStorage.userName,
            content: this.state.input,
            date: new Date().toISOString()
        }

        this.setState({
            tweets: [newTweet, ...this.state.tweets],
            userName: localStorage.userName,
            input: ""
        }, function() {
            localStorage.setItem("date", new Date().toISOString())
            localStorage.setItem("tweetStorage", JSON.stringify(this.state.tweets))
        });
        
    }


render() {
    return (
        <div id="homeContainer">

            <div id="profileHeader">
                <h1>
                    Home
                </h1>
            </div>
            <p>New Tweet</p>
            <div id="tweetInput">
                <textarea onChange={(event) => this.setTweetInput(event)} type="text" resize="none" minLength="1" maxLength="140" value={this.state.input} placeholder="What you have in mind..." id="tweetInput" />
                <button id="tweetButton" onClick={() => this.createTweet()} type="button">Tweet</button>
            </div>

            <DisplayTweetList tweetList={this.state.tweets} />
            
        </div>
    )
}
}

export default Home;
