import React, { Component } from 'react';

import styled from 'styled-components';

const GridUnit = styled.div `
border: 1px solid #eee;
padding: 40px;
`

class Grid extends Component {
  render() {
    return (
      <GridUnit>
      <h3>{this.props.title}</h3>
      <p>{this.props.para}</p>
      </GridUnit>
    );
  }
}

export default Grid;
