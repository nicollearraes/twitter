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
      date: 1512272722686,
    },
    {
      message: "it's",
      username: "charlie",
      date: 1512272722636,
    },
    {
      message: "me",
      username: "charlie",
      date: 1512272722186,
    },
    {
      message: ",",
      username: "charlie",
      date: 1512272721686,
    },
    {
      message: "charlie",
      username: "charlie",
      date: 1512272720686,
    },
    {
      message: "<3",
      username: "charlie",
      date: 1512272719686,
    }
  ]
});

function tweetListReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TWEET:
      const tweets = state.get('tweets').push({
        message: action.tweet.message,
        username: action.tweet.username,
        date: action.tweet.date
      });
      return state.set('tweets', tweets);
    default:
      return state;
  }
}

export default tweetListReducer;
