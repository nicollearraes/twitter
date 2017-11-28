/**
 *
 * NewTweet
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import messages from './messages';
import tweetListReducer from 'containers/TweetList/reducer';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 2px solid #0084b4;
  background: #fff;
`;

const Input = styled.input`
  padding: 10px;
  flex: 1;
`;

const Button = styled.button`
  background: #0084b4;
  color: #fff;
  padding: 0 25px;
  cursor: pointer;

  &:hover {
    background: #00aced;
  }
`;

export class NewTweet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.tweet = this.tweet.bind(this);

    this.state = {
      message: ''
    };
  }

  tweet() {
    const tweet = { username: 'grumpycat', message: this.input.value }
    this.props.dispatch({type: 'app/TweetList/ADD_TWEET', tweet});
    this.input.value = '';
  }

  render() {
    return (
      <Wrapper>
        <Input
          placeholder="What's happening?"
          onChange={(message) => this.setState({message})}
          innerRef={node => {
            this.input = node;
          }}
        />
        <Button onClick={this.tweet}>tweet</Button>
      </Wrapper>
    );
  }
}

NewTweet.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(NewTweet);
