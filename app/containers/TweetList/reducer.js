/*
 *
 * TweetList reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
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
      username: "charliee",
    }
  ]
});

function tweetListReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default tweetListReducer;
