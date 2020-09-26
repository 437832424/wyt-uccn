import styled from 'styled-components'

export const FlexCard = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items: center;
  & > div {
    display:flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 340px;
    height: 180px;
    margin-top:175px;
    margin-right:90px;
    background: #FFFFFF;
    box-shadow: 0px 0px 21px 0px rgba(105, 187, 236, 0.25);
    border-radius: 4px;
    &:last-child {
      margin-right:0
    }
  }
`
export const Subtitle = styled.h4`
  margin-top:100px;
  font-size:30px;
`
export const FlexLine = styled.div`
  display:flex;
  flex-flow:row nowrap;
  justify-content:center;
  align-items: center;
  & > div {
    display:flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    width: 340px;
    height: 180px;
    margin-top:50px;
    margin-right:90px;
    background: #FFFFFF;
    &:last-child {
      margin-right:0
    }
    & > p:nth-child(4),p:nth-child(3) {
      width: 100%;
      text-align: left;
      margin-left: 114px;
    }
  }
`
export const PBorder = styled.p`
  width:228px;
  margin-top: 10px;
  margin-bottom: 20px;
  padding: 4px 0;
  border-top:3px solid #D0E7FF;
  border-bottom:3px solid #D0E7FF;
  text-align: center !important;
  vertical-align: middle;
`
export const FormItem = styled.div`
  // width:100%;
  margin-bottom:30px;
  textarea {
    position: relative;
    top: 17px;
    width: 706px;
    height: 180px;
    padding: 6px 8px;
    font-size: 14px;
    background: #F1F1F1;
    border-radius: 4px;
    border:0;
    outline:0;
    resize:none;
  }
  input {
    width: 386px;
    height: 32px;
    padding: 6px 8px;
    font-size: 14px;
    border-radius: 4px;
    background: #F1F1F1;
    border:0;
    outline:0;
    &[type*="submit"] {
      width: 1230px;
      padding: 6px 8px;
      color:#005DFF;
      cursor:pointer;
      background: #FFFFFF;
      box-shadow: 0px 0px 5px 0px rgba(184, 184, 184, 0.34);
    }
    + p {
      position: absolute;
      text-align:center;
      color:red;
      > span {
        margin-right:2px;
        vertical-align: middle;
      }
    }
  }
`
export const FormItemLine = styled.div`
  display: inline-block;
  margin-right:108px;
`