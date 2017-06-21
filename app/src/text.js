import React, { Component } from 'react';

import styled from 'styled-components';

import { media } from './styles-utils';

const IntroText = styled.div `
  background: #B3B8DE;
  ${media.phone`padding: 20px; `}
  ${media.tablet`padding: 20px 40px; `}
  ${media.giant`padding: 80px; `}
  h1 {
    font-size: 22px;
    line-height: 1;
    letter-spacing: -1px;
    text-transform: uppercase;
    ${ media.tablet`
      font-size: 44px;
    ` }

    ${ media.giant`
      font-size: 58px;
      font-weight: 700;
      padding-right: 100px;
    ` }
  }
  p {
    font-family: georgia;
    ${ media.giant`
      font-size: 28px;
    ` }
  }
`
class Text extends Component {
  render() {
    return (
      <IntroText>
      <h1>Nested Components with Media queries</h1>
      <p>Lorem ipsum intro text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eius alias est quidem commodi, enim voluptatum hic earum repellat illum veritatis accusantium, ex aperiam ullam ratione, exercitationem suscipit? Libero, tenetur.</p>

      </IntroText>
    );
  }
}

export default Text;
