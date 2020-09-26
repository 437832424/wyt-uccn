import React, { Component } from 'react';
import { Wrap, H4, P, LastP } from './style'
class Footer extends Component {
  render () {
    return (
      <Wrap>
        <H4>联系电话</H4>
        <LastP>0755-23205664</LastP>
        <H4>联系地址</H4>
        <P>总部：深圳市宝安区航城街道三围社区泰华梧桐工业</P>
      </Wrap>
    )
  }
}
export default Footer