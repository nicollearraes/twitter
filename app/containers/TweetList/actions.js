/*
 *
 * TweetList actions
 *
 */

import {
  ADD_TWEET,
} from './constants';

export function addTweet() {
  return {
    type: ADD_TWEET,
  };
}
