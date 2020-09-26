import React, { Component } from 'react';
import lazyRouter from '../../../../router'
import { Ul, Li, Globalstyle } from './style';
import { NavLink } from "react-router-dom";
import { theme } from '@/theme'

class Menu extends Component {
  handleClick (e) {
    // e.persist();
    // e.target.className = e.target.className.split(' active')[0];//先恢复
    // for (let i = 0; i < e.nativeEvent.target.parentElement.children.length; i++) {
    //   if (e.nativeEvent.target.parentElement.children[i].className.includes('active'))
    //     e.nativeEvent.target.parentElement.children[i].className = e.nativeEvent.target.parentElement.children[i].className.split(' active')[0]
    // }
    // e.target.className = e.target.className + ' active'
  }
  render () {
    const listItems = lazyRouter.map((item, index) =>
      <Li onClick={(e) => this.handleClick(e)} key={item.path}>
        <NavLink
          to={item.path}
          activeStyle={{
            color: theme['$-active-color']
          }}>
          {item.meta.title}
        </NavLink>
      </Li>
    )
    return (
      <Ul>
        {listItems}
        <Globalstyle />
      </Ul>
    )
  }
}
export default Menu