import React, { Component } from 'react';
import { Wrap, Bottom, Top, H5, Strong, Hr, SuTitle, Item, BtnGroup, ContenItem, GradientsBtn, Ul } from './style';
import TU from '@/asset/img/home-page/TU@2x.png'
import TU1 from '@/asset/img/home-page/TU1@2x.png'
import News from '@/asset/img/home-page/news@2x.png'

class HomePage extends Component {
  render () {
    return (
      <Wrap>
        <Top>
          <H5>
            <Strong>S</Strong>mart ecology
            <Hr></Hr>
          </H5>
          <SuTitle>智慧生态</SuTitle>
          <Item >
            <div>
              <h5>打通全产业链路 立体化构建物联网产业生态圈</h5>
              <p>整合物联网产业链整体资源，深度融合物联网行业应用场景，立体化构建物联网产业生态圈。</p>
            </div>
            <img src={TU} alt={'加载失败'} />
          </Item>
        </Top>
        <Bottom>
          <H5>
            <Strong>P</Strong>roduct planning
            <Hr></Hr>
          </H5>
          <SuTitle>产业规划</SuTitle>
          <Item >
            <img src={TU1} alt={'加载失败'} />
            <div>
              <h5>云、管、端、边协同布局 构建万物互联新生态</h5>
              <p>云、管、端、边协同布局，为用户提供物联网应用服务一体化的解决方案。</p>
              <BtnGroup>
                <button>智慧消防</button>
                <button>智慧农业</button>
                <button>智慧工业</button>
              </BtnGroup>
            </div>
          </Item>
        </Bottom>
        <ContenItem>
          <H5>
            <Strong>N</Strong>ews Center
            <Hr style={{ backgroundColor: '#fff' }}></Hr>
          </H5>
          <SuTitle>新闻中心</SuTitle>
          <p>构建基于大数据的“一张图 一张网”物联网智慧消防实战指挥平台</p>
          <p>充分运用大数据、云计算、无线网络、地理信息等技术，监控全区域消防设备设施运行情况及安全管理情况，实现灭火救援的一张图指挥、一张图调度、一张图分析、一张图决策。</p>
        </ContenItem>
        <Bottom style={{ paddingTop: '75px', backgroundColor: '#f3f3f3' }}>
          <H5>
            <Strong>N</Strong>ews Center
            <Hr></Hr>
          </H5>
          <SuTitle>新闻中心</SuTitle>
          <GradientsBtn>企业动态</GradientsBtn>
          <GradientsBtn>行业动态</GradientsBtn>
          <Ul>
            <li>
              <img src={News} alt='加载失败' />
              <div>
                <h4>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</h4>
                <p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻 新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>
                <div>
                  <span>2020.5.6</span><button>查看详情</button>
                </div>
              </div>
            </li>
            <li>
              <img src={News} alt='加载失败' />
              <div>
                <h4>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</h4>
                <p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻 新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>
                <div>
                  <span>2020.5.6</span><button>查看详情</button>
                </div>
              </div>
            </li>
            <li>
              <img src={News} alt='加载失败' />
              <div>
                <h4>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</h4>
                <p>新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻 新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻新闻</p>
                <div>
                  <span>2020.5.6</span><button>查看详情</button>
                </div>
              </div>
            </li>
          </Ul>
        </Bottom>
      </Wrap >
    )
  }
}
export default HomePage