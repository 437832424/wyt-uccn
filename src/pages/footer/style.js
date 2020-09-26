import styled from 'styled-components'
import { theme } from '../../theme'
export const Wrap = styled.div`
  // display:flex;
  // justify-content:space-between;;
  // align-items:center;
  height: 350px;
  padding-top:64px;
  padding-left:360px;
  color:${theme['$-white-color']};
  background: ${theme['$-footer-bg']};
`
export const H4 = styled.h4`
  margin-bottom: 7px;
  font-size: 20px;
  font-weight: bold;
  color: #FEFEFE;
  background: ${theme['$-footer-bg']};
`

export const P = styled.p`
  font-size: 16px;
`
export const LastP = styled(P)`
  margin-bottom: 64px;
`