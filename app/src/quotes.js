import React, { Component } from 'react';
import styled from 'styled-components';


const Quote = styled.div `
  color: hotpink;
  font-family: georgia;
  font-style: italic;
  text-align: center;
  border: 1px solid yellow;
  font-size: ${props => props.huge ? '120px' : '14px'};
  color: ${props => props.huge ? 'green' : 'orange'};


  span {
    font-size: 10px;
    font-family: arial;
    text-transform: uppercase;
    font-style: normal;
    letter-spacing: 1px;
  }
`

class Quotes extends Component {
  render() {
    return (
      <Quote>
      <p>{this.props.quote}</p>
      <span>{this.props.author}</span>
      </Quote>
    );
  }
}

export default Quotes;
