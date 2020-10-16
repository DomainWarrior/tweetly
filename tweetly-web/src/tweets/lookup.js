import {backendLookup} from "../lookup"

export function apiTweetCreate(newTweet, callback){
    backendLookup("POST", "/tweets/create/", callback, {content: newTweet})
}
export function apiTweetList(callback) {
    backendLookup("GET", "/tweets/", callback)
}
export function apiTweetAction(tweet_Id, action, callback){
    const data = {id: tweet_Id, action: action}
    backendLookup("POST", "/tweets/action/", callback, data)
}