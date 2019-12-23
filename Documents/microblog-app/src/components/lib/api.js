
import axios from 'axios';

const baseUrl = "https://itc-bootcamp-19-dot-charcha-dev.appspot.com/tweet/";

export function getTweets() {
    return axios.get(`${baseUrl}`);
}

export function postTweet(tweetObj) {
    return axios.post(`${baseUrl}`, {tweet:tweetObj});
}

