import styled from 'styled-components'
import BG from '@/asset/img/company-profile/BG@2x.png'
export const ContenItem = styled.div`
  width:100%;
  height: 710px;
  padding-top: 118px;
  padding-bottom:260px;
  font-family: Arial;
  color:#fff;
  background-image:url(${BG});
  background-position:center;
  background-size:cover;
  & > div {
    display:flex;
    flex-flow:row nowrap;
    justify-content:space-between;
    align-items: stretch;
    margin:0 auto;
    padding:80px  15px 50px 200px;
    width: 1097px;
    height: 632px;
    letter-spacing: 2px;
    background:rgba(255,255,255,0.2);
  }
`
export const ContenItemP = styled.p`
  width: 145px;
  &> span {
    display: inline-block;
    margin-top:70px;
    font-size:24px;
    &:nth-child(2n-1){
      margin-right:30px;
    }
  }
`
export const P = styled.p`
  letter-spacing: 1px;
  text-indent: 2em;
  color:#161616;
`
