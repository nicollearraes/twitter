/**
*
* Tweet
*
*/

import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: flex;
  border: 2px solid #0084b4;
  padding: 10px;
  border-radius: 10px;
  flex-direction: column;

  & + & {
    margin-top: 5px;
  }
`;

const StyleDate = styled.div`
  font-size: 10px;
  color: #999;
`;

const Username = styled.span`
  font-weight: 700;
`;

const Message = styled.div``;

class Tweet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyleWrapper>
        <Message>
          <Username>{this.props.username}</Username>: {this.props.message}
        </Message>
        <StyleDate>
          <Moment format="DD/MM/YYYY HH:mm:ss">{new Date(this.props.date).toString()}</Moment>
        </StyleDate>
      </StyleWrapper>
    );
  }
}

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default Tweet;
