import React from "react";
import '../App.css';


const Home = () => {
    return (
        <div id="homeContainer">
            
            <div id="profileHeader">
                <h1>
                    Home
                </h1>
            </div>
            <p>New Tweet</p>
            <div id="tweetInput">
                <textarea resize="none" maxLength="140" placeholder ="What you have in mind..." id="tweetInput"/>
            </div>
                <button id="tweetButton" type="submit">Tweet</button>

        </div>
    )
}
export default Home;