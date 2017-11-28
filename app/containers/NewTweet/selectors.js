import { createSelector } from 'reselect';

/**
 * Direct selector to the newTweet state domain
 */
const selectNewTweetDomain = (state) => state.get('newTweet');

/**
 * Other specific selectors
 */


/**
 * Default selector used by NewTweet
 */

const makeSelectNewTweet = () => createSelector(
  selectNewTweetDomain,
  (substate) => substate.toJS()
);

export default makeSelectNewTweet;
export {
  selectNewTweetDomain,
};
