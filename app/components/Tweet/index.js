/**
*
* Tweet
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyleWrapper = styled.div`
  display: flex;
  border: 2px solid #0084b4;
  padding: 10px;
  border-radius: 10px;

  & + & {
    margin-top: 5px;
  }
`;

const Username = styled.span`
  font-weight: 700;
`;

class Tweet extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <StyleWrapper>
        <Username>{this.props.username}</Username>: {this.props.message}
      </StyleWrapper>
    );
  }
}

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default Tweet;
