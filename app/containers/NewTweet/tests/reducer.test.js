
import { fromJS } from 'immutable';
import newTweetReducer from '../reducer';

describe('newTweetReducer', () => {
  it('returns the initial state', () => {
    expect(newTweetReducer(undefined, {})).toEqual(fromJS({}));
  });
});
