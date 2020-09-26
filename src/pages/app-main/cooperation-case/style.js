import styled from 'styled-components'

export const Grid = styled.div`
  display:grid;
  grid-template-columns:repeat(4,25%);
  grid-template-rows:repeat(2,50%);
  justify-items: center;
  align-items:stretch;
  grid-row-gap: 70px;
  // grid-column-gap: 100px;
  margin-top:80px;
  & > div {
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.19);
    > div:first-child{
      width: 315px;
      height: 193px;
    }
    > div:last-child {
      margin-left: 15px;
      margin-bottom: 50px;
      > h4 {
        margin-top:28px;
        text-align: left;
        font-size:24px;
      }
      > p {
        width: 256px;
        text-align: left;
        font-size:16px;
      }
    }
  } 
`
export const GridHr = styled.hr`
  margin-left: 0px;
  margin-bottom: 10px;
  width: 60px;
  height: 2px;
  background-color: #0382FE;
`
export const GridEnterprise = styled.div`
  display:grid;
  grid-template-columns:repeat(4,25%);
  grid-template-rows:repeat(3,33.33%);
  justify-items: center;
  align-items:stretch;
  // grid-row-gap: 70px;
`
