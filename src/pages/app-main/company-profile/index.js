import React, { Component } from 'react';
import { Wrap, Bottom, H5, Strong, Hr, SuTitle, Item } from '../home-page/style';
import { ContenItem, P, ContenItemP } from './style'
import TU1 from '@/asset/img/company-profile/TU1@2x.png'

class CompanyProfile extends Component {
  render () {
    return (
      <Wrap>
        <Bottom>
          <H5>
            <Strong>C</Strong>ompany profile
            <Hr></Hr>
          </H5>
          <SuTitle>公司简介</SuTitle>
          <Item style={{ marginBottom: '225px' }}>
            <img src={TU1} alt={'加载失败'} />
            <div>
              <h5>
                <span style={{ display: 'inline-block', width: '14px', height: '36px', background: '#0282FF' }}></span>
                <span style={{ position: 'relative', top: '-20px', left: '10px' }}>关于我们</span>
              </h5>
              <Hr style={{ width: '59px', height: '3px', backgroundColor: '#CCCCCC', marginLeft: '0', marginBottom: '35px' }}></Hr>
              <P>物域通（深圳）科技有限公司集智能终端传感设备、新一代无线信号传输设备、物联网大数据管理平台应用为一体，是物联网领域创新者，物联网生态方案提供的践行者。公司拥有强大自主研发能力和多项技术专利，是新一代物联网高科技企业。</P>
              <P>公司专注于物联网智慧消防相关产品研发、制造与服务，并广泛应用于智慧建设、智慧生态、智慧园区、智慧校园等智慧城市建设的各个领域，旨在构建“数据驱动”智慧产业新生态。</P>
            </div>
          </Item>
        </Bottom>
        <ContenItem>
          <div>
            <div>
              <h5>
                <span style={{ display: 'inline-block', width: '14px', height: '36px', marginLeft: '-30px', background: '#0282FF' }}></span>
                <span style={{ position: 'relative', top: '-20px', left: '10px', fontSize: '20px' }}>企业文化</span>
              </h5>
              <ContenItemP>
                <span>通透</span>
                <span>清晰</span>
                <span>严肃</span>
                <span>认真</span>
                <span>紧张</span>
                <span>活泼</span>
                <span>自驱</span>
                <span>有趣</span>
                <span>发展</span>
                <span>贡献</span>
              </ContenItemP>
            </div>
            <div>
              <h5>
                <span style={{ display: 'inline-block', width: '14px', height: '36px', background: '#0282FF' }}></span>
                <span style={{ position: 'relative', top: '-20px', left: '10px', fontSize: '20px', }}>企业愿景</span>
              </h5>
              <p style={{
                fontSize: '20px', width: '412px', marginBottom: '112px', marginTop: '40px'
              }}>构建一个无边界、多维度、立体化“万物互联”智能世界</p>
              <h5>
                <span style={{ display: 'inline-block', width: '14px', height: '36px', background: '#0282FF' }}></span>
                <span style={{ position: 'relative', top: '-20px', left: '10px', fontSize: '20px', }}>企业使命</span>
              </h5>
              <p style={{ fontSize: '20px', marginTop: '40px', width: '470px' }}>国内领先的物联网应用服务一体化解决方案供应商物联网技术框架与标准体系建立的驱动者</p>
            </div>
          </div>
        </ContenItem>
      </Wrap >
    )
  }
}
export default CompanyProfile