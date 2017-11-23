
import { fromJS } from 'immutable';
import tweetListReducer from '../reducer';

describe('tweetListReducer', () => {
  it('returns the initial state', () => {
    expect(tweetListReducer(undefined, {})).toEqual(fromJS({}));
  });
});
