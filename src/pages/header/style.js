import styled from 'styled-components'
import logo from './img/logo.png'
import { theme } from '../../theme'
export const Wrap = styled.div`
  display:flex;
  justify-content:space-between;;
  align-items:center;
  height: 100px;
  background: ${theme['$-bg-color']};
`
// 背景图片不能生效
export const A = styled.a`
  display: inline-block;
  width: 174px;
  height: 48px;
  margin-left: 360px;
  cursor:pointer;
  background-image: url(${logo});
  background-repeat:no-repeat;
  background-size:100%;
  background-position:center;
`
