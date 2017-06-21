import React, { Component } from 'react';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';
import IntroText from './text';
import GridUnit from './grid';

import { media } from './styles-utils';

injectGlobal`
  html {
    background: #F1F0F6;
    height: 100%;
    width: 100%;
  }
  body {
    background: #F1F0F6;
    font-size: 16px;
    margin: 20px;
    line-height: 1.7;
    font-family: 'Source Sans Pro', sans-serif;
  }

`;

const Outer=styled.div `

  ${media.phone`padding: 20px;`}
  ${media.tablet`padding: 20px 40px;`}
  ${media.desktop`padding: 20px;`}
`

const Header=styled.div `
  text-align: left;
  padding: 80px;
  border: 1px solid #CDC9E0;
  background: #180A24;
  h2 {
    color: #F1ECF3;
    line-height: 1;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 44px;
    letter-spacing: 1px;
    text-transform: uppercase;
    ${media.tablet`  font-size: 72px;`}
  }
  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 1;
    font-style: normal;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 4px;
    color: #CDC9E0;
    &:before {
      content: "";
      margin-bottom: 40px;
      display: block;
      background: #200f30;
      height: 10px;
      width: 100px;
    }
  }

`

const GridWrap=styled.div `
display: flex;
flex-direction: column;
flex-wrap : wrap;
background: green;
${media.desktop`flex-direction: row; background: cyan; flex-wrap: nowrap`}


`

const BtnWrap=styled.div `
  margin: 80px 0;
  paddding: 80px;
  display: flex;
  flex-direction: column;
  flex-wrap : wrap;
  justify-content: space-around;
  ${media.desktop`flex-direction: row;  flex-wrap: nowrap`}
`

const Button=styled.button`
  padding: ${props => props.small ? '0.75em 1em' : '1.25em 2.5em'};
  font-size: ${props => props.small ? '10px' : '16px'};
  border-radius: ${props => props.small ? '4px' : '12px'};
  background: ${props => props.cancel ? 'red' : 'green'};
  color: white;
  text-transform: uppercase;
  border: 1px solid darkcyan;
  line-height: 1;
  max-width: 280px;
  margin: 10px;

`;

class App extends Component {
  render() {
    return (
      <Outer>
        <Header>
          <h1>Pablo J Boerr</h1>
          <h2>Exploring styled Components</h2>
        </Header>

        <IntroText />

        <p>Using interpolated functions to style buttons </p>

        <BtnWrap>
          <Button>normal button!</Button>
          <Button small>small button!</Button>
          <Button cancel>cancel button!</Button>
          <Button small cancel>small cancel button!</Button>
        </BtnWrap>

        <h2> Flexbox using styled components and nested components</h2>

        <GridWrap>
          <GridUnit
            title="About us"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus in repellat labore excepturi sit voluptatum deserunt quod vel quo rerum corporis, laborum necessitatibus a cupiditate dolorem aperiam ratione, veniam dolor."
          />
          <GridUnit
            title="second column"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus in repellat labore excepturi sit voluptatum deserunt quod vel quo rerum corporis, laborum necessitatibus a cupiditate dolorem aperiam ratione, veniam dolor."
          />

          <GridUnit
            title="Third column"
            para="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus in repellat labore excepturi sit voluptatum deserunt quod vel quo rerum corporis, laborum necessitatibus a cupiditate dolorem aperiam ratione, veniam dolor."
          />
        </GridWrap>
      </Outer>
    );
  }
}

export default App;
