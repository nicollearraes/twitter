import { createSelector } from 'reselect';

/**
 * Direct selector to the tweetList state domain
 */
const selectTweetListDomain = (state) => state.get('tweetList');

/**
 * Other specific selectors
 */


/**
 * Default selector used by TweetList
 */

const makeSelectTweetList = () => createSelector(
  selectTweetListDomain,
  (substate) => substate.toJS()
);

export default makeSelectTweetList;
export {
  selectTweetListDomain,
};
