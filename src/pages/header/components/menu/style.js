import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';
import { theme } from '@/theme'
export const Globalstyle = createGlobalStyle`
  .active {
    color:${theme['$-primary-color']}
  }
`

export const Ul = styled.ul`
  display:flex;
  justify-content: space-around;
  align-items:center;
  margin-right:360px;
  color: ${theme['$-white-color']};
`
export const Li = styled.li`
  display:flex;
  justify-content: space-around;
  align-items:center;
  width: 150px;
  font-size: 16px;
  font-weight: 400;
  cursor:pointer;
  color: ${theme['$-white-color']};
  & a{
    &:link {color: ${theme['$-white-color']}} /* 未访问时的状态baidu */
    &:visited {color: ${theme['$-white-color']}} /* 已访问过的状态 */
    &:hover {color: ${theme['$-white-color']}} /* 鼠标移动到链接上时的状态 */
    &:active {color: ${theme['$-active-color']}} /* 鼠标按下去时的状态 */
  }
`