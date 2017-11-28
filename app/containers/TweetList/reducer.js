/*
 *
 * TweetList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  ADD_TWEET,
} from './constants';

const initialState = fromJS({
  tweets: [
    {
      message: "hello",
      username: "charlie",
    },
    {
      message: "it's",
      username: "charlie",
    },
    {
      message: "me",
      username: "charlie",
    },
    {
      message: ",",
      username: "charlie",
    },
    {
      message: "charlie",
      username: "charlie",
    },
    {
      message: "<3",
      username: "charlie",
    }
  ]
});

function tweetListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      const tweets = state.get('tweets').push({
        message: action.tweet.message,
        username: action.tweet.username
      });
      return state.set('tweets', tweets);
    default:
      return state;
  }
}

export default tweetListReducer;
