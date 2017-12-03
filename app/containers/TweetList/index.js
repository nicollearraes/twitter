/**
 *
 * TweetList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import Tweet from 'components/Tweet';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectTweetList from './selectors';
import reducer from './reducer';
import saga from './saga';

export class TweetList extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {this.props.tweetlist.tweets.map((tweet) => {
          return <Tweet username={tweet.username} message={tweet.message} date={tweet.date}/>
        })}
      </div>
    );
  }
}

TweetList.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tweetlist: makeSelectTweetList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'tweetList', reducer });
const withSaga = injectSaga({ key: 'tweetList', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(TweetList);
