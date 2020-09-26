import React, { Component } from 'react';
import { Wrap, A } from './style'
import Menu from './components/menu/index.js'
class header extends Component {
  render () {
    return (
      <Wrap>
        <A />
        <Menu />
      </Wrap>
    )
  }
}
export default header