import {backendLookup} from '../lookup'

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/tweets/create/", callback, {content: newTweet})
}

export function apiTweetAction(tweet_Id, action, callback){
    const data = {id: tweet_Id, action: action}
    backendLookup("POST", "/tweets/action/", callback, data)
}

export function apiTweetDetail(tweetId, callback) {
    backendLookup("GET", `/tweets/${tweetId}/`, callback)
}

export function apiTweetList(username, callback) {
    let endpoint = "/tweets/"
    if (username){
        endpoint = `/tweets/?username=${username}`
    }
    backendLookup("GET", endpoint, callback)
}