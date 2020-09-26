import styled from 'styled-components'
import { theme } from '@/theme'
import HOMEBG from '@/asset/img/home-page/HOMEBG@2x.png'

const paddingBottom = 'padding-bottom: 75px;'
const paddingTop = 'padding-top: 75px;'

export const Wrap = styled.div`
  text-align:center;
  background:${theme['$-white-color']};
`
export const Bottom = styled.div`
  ${paddingTop};
  ${paddingBottom};
  background:${theme['$-white-color']};
`
export const Top = styled.div`
  ${paddingTop};
  ${paddingBottom};
  border:2px solid #eee;
`
export const H5 = styled.h5`
  font-size: 40px;
  font-family: Arial;
  font-weight: 400;
  color:#C5C5C5;
  line-height: 30px;
`
export const Strong = styled.strong`
  color: #0181FD;
`
export const Hr = styled.hr`
  width: 100px;
  height: 3px;
  background: #00449B;
`
export const SuTitle = styled.h4`
  font-size: 30px;
  font-weight: 400;
  color: ${theme['$-sub-title-color']};
  line-height: 82px;
`
export const Item = styled.div`
  display: flex;
  justify-content:space-between;
  items-align:center;
  padding-left:360px;
  padding-right:360px;
  color: #333333;
  & > div{
    display: flex;
    justify-content: center;
    flex-flow: column;
    padding-left:88px;
    text-align:left;
    & h5{
      width: 490px;
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: bold;
      color: #333333;
    }
    & p{
      width: 398px;
      font-size: 16px;
      font-weight: 400;
    }
  }  
`
export const BtnGroup = styled.div`
  display: flex;
  justify-content:flex-start;
  items-align:center;
  margin-top:70px;
  & button{
    margin-right:35px;
    padding:6px 8px;
    border-radius: 10px;
    background: #E0DFDF;
    border: none; 
    outline: none;
    cursor:pointer;
    &:hover {
      background: #0284FE;
    }
    &:visited {
      background: #0284FE;
    }
  }
`
export const ContenItem = styled.div`
  width:100%;
  height: 710px;
  padding-top: 118px;
  font-family: Arial;
  color:#fff;
  background-image:url(${HOMEBG});
  background-position:center;
  background-size:cover;
  & p{
    margin-top: 120px;
    font-weight:bold;
    letter-spacing:3px;
  }
  & p:last-child{
    width:400px;
    margin:0 auto;
    margin-top:34px;
    font-weight:400;
    font-size:14px;
  }
`
export const GradientsBtn = styled.button`
  margin-right: 70px;
  margin-left: 70px;
  padding:6px 24px;
  font-size:20px;
  cursor:pointer;
  background-color:transparent;
  border:none;
  outline:none;
  &:hover{
    border-radius: 10px;
    background:linear-gradient(-90deg, #005DFF, #04BEFD);
  }
`
export const Ul = styled.ul`
  margin-top:55px;
  & li{
    margin:20px 235px;
    display:flex;
    justify-content:flex-start;
    align-item:center;
    padding:80px 50px;
    background-color:#fff;
    &:first-child {
      margin-top:0;
    }
    &:last-child {
      margin-bottom:0;
    }
    &:hover {
      margin: 0 auto;
      width:1400px;
    }
    & img {
      margin-right:45px;
    }
    & > div {
      width: 100%;
      display:flex;
      flex-flow:column nowrap;
      justify-content:space-between;
      align-item:center;
      text-align:left;
      & h4 {
        font-size:18px;
        font-weight:600;
      }
      & > p{
        width:810px;
        font-size:16px;
      }
      & button{
        float:right;
        color:${theme['$-detail-color']};
        background-color:transparent;
        outline:none;
        border:none;
      }
    }
  }
`
