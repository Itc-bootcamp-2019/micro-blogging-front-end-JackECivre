import React from "react";
import '../App.css';
import DisplayTweetList from "../components/tweetList"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tweet: "",
            input: ""
        }
    }

    setTweetInput(event) {
        this.setState({ input: event.target.value });

    }

    createTweet() {

        this.setState({ userName: this.state.input });
        // console.log(this.state.input)
        localStorage.setItem("tweet", this.state.input)
        localStorage.setItem("timeStamp", new Date())
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
                    <textarea onChange={(event) => this.setTweetInput(event)} type="text" resize="none" maxLength="140" placeholder="What you have in mind..." id="tweetInput" />
                    <button id="tweetButton" onClick={() => this.createTweet()} type="button">Tweet</button>
                </div>

                <DisplayTweetList />


            </div>
        )
    }
}
export default Home;