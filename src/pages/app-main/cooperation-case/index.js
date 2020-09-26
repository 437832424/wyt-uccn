import React, { Component } from 'react';
import { Wrap, Bottom, H5, Hr, Strong, SuTitle } from '../home-page/style';
import { Grid, GridHr, } from './style'
import cases1 from '@/asset/img/cooperation-case/cases-1.jpg'
import cases2 from '@/asset/img/cooperation-case/cases-2.jpg'
import cases3 from '@/asset/img/cooperation-case/cases-3.jpg'
import cases4 from '@/asset/img/cooperation-case/cases-4.jpg'
import cases5 from '@/asset/img/cooperation-case/cases-5.jpg'
import cases6 from '@/asset/img/cooperation-case/cases-6.jpg'
import cases7 from '@/asset/img/cooperation-case/cases-7.jpg'
import cases8 from '@/asset/img/cooperation-case/cases-8.jpg'

class HomePage extends Component {
  render () {
    return (
      <Wrap>
        <Bottom style={{ paddingBottom: '175px' }}>
          <H5>
            <Strong>C</Strong>ooperation cases
            <Hr></Hr>
          </H5>
          <SuTitle>合作案例</SuTitle>
          <Grid >
            <div>
              <div style={{ backgroundImage: `url(${cases1})` }}></div>
              <div>
                <h4>天盈广场</h4>
                <GridHr />
                <p>天盈广场是六安天盈置业发展有限责任公司旗下高层建筑项目，高层住宅总层数为地上16层，地下1层，其中......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases2})` }}></div>
              <div>
                <h4>寰城中心广场</h4>
                <GridHr />
                <p>位于天河北CBD核心地区，占地7万平米，建筑面积11万平方米，50层写字楼......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases3})` }}></div>
              <div>
                <h4>云来斯堡酒店</h4>
                <GridHr />
                <p>云来斯堡酒店位于广州市天河区珠江新城黄埔大道西与海业路交界处。酒店按照五星级标准设计施工......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases4})` }}></div>
              <div>
                <h4>雅乐轩酒店</h4>
                <GridHr />
                <p>毗邻天河北CBD核心地区，酒店共50层，拥有498间客房，以及10个会议与宴会空间，总面积达1,000平方米......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases5})` }}></div>
              <div>
                <h4>天盈广场</h4>
                <GridHr />
                <p>天盈广场是六安天盈置业发展有限责任公司旗下高层建筑项目，高层住宅总层数为地上16层，地下1层，其中......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases6})` }}></div>
              <div>
                <h4>寰城中心广场</h4>
                <GridHr />
                <p>位于天河北CBD核心地区，占地7万平米，建筑面积11万平方米，50层写字楼......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases7})` }}></div>
              <div>
                <h4>云来斯堡酒店</h4>
                <GridHr />
                <p>云来斯堡酒店位于广州市天河区珠江新城黄埔大道西与海业路交界处。酒店按照五星级标准设计施工......</p>
              </div>
            </div>
            <div>
              <div style={{ backgroundImage: `url(${cases8})` }}></div>
              <div>
                <h4>雅乐轩酒店</h4>
                <GridHr />
                <p>毗邻天河北CBD核心地区，酒店共50层，拥有498间客房，以及10个会议与宴会空间，总面积达1,000平方米......</p>
              </div>
            </div>
          </Grid>
        </Bottom>
        {/* <Bottom>
          <H5>
            <Strong>C</Strong>ooperative enterprise
            <Hr></Hr>
          </H5>
          <SuTitle>合作伙伴</SuTitle>
          <GridEnterprise >
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </GridEnterprise>
        </Bottom> */}
      </Wrap >
    )
  }
}
export default HomePage