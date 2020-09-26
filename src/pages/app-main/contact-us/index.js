import React, { Component} from 'react';
import Qs from 'qs';
import _ from "lodash/fp";
import { useForm } from "react-hook-form";
import axios from 'axios'
import { Wrap, Bottom, H5, Strong, Hr, SuTitle } from '../home-page/style';
import { FlexCard, Subtitle, FlexLine, PBorder, FormItem, FormItemLine } from './style'
import GJ from '@/asset/img/contact-us/GJ@2x.png'
import CZ from '@/asset/img/contact-us/CZ@2x.png'
import DT from '@/asset/img/contact-us/DT@2x.png'


class Amap extends Component {
  componentDidMount(){
    let amap = new window.AMap.Map('container', {
      viewMode: '3D',
      pitch: 50,
      zoom: 11,
      center: [116.480766, 39.932931]
    });
    // let mapCenter = []
    amap.plugin('AMap.Geolocation', function () {
      let geolocation = new window.AMap.Geolocation({
        enableHighAccuracy: true,//是否使用高精度定位，默认:true
        timeout: 10000,          //超过10秒后停止定位，默认：无穷大
        maximumAge: 0,           //定位结果缓存0毫秒，默认：0
        convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
        showButton: true,        //显示定位按钮，默认：true
        buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
        buttonOffset: new window.AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
        showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
        showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
        panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
        zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      });
      amap.addControl(geolocation);
      geolocation.getCurrentPosition();
      new window.AMap.event.addListener(geolocation, 'complete', function (res) {
        // mapCenter = [res.position.lng, res.position.lat]
        amap.setZoomAndCenter(14, [res.position.lng, res.position.lat])
      });//返回定位信息
      new window.AMap.event.addListener(geolocation, 'error', function (res) {
        console.log(res)
      });      //返回定位出错信息
    });
    // var marker = new window.AMap.Marker({
    //   position: new window.AMap.LngLat(mapCenter[0], mapCenter[1]),
    //   offset: new window.AMap.Pixel(-10, -10),
    //   icon: '//vdata.amap.com/icons/b18/1/2.png', // 添加 Icon 图标 URL
    // });
    // amap.add(marker);
  }
  render () {
    return (
      <div id={'container'} style={{ width: '100%', height: '888px', marginTop: '40px'}}></div>
    );
  }
}

export default function ContactUs () {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    axios({
      method: 'post',
      url: `/manage/online/2.0/messageAdd`,
      data: Qs.stringify(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(function (response) {
        if(response.data.info==='success'){
          alert('留言成功')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Wrap>
      <Bottom>
        <H5>
          <Strong>C</Strong>ontact us
            <Hr></Hr>
        </H5>
        <SuTitle>联系我们</SuTitle>
        <Amap></Amap>
        <FlexCard>
          <div>
            <h5>公司地址</h5>
            <p>深圳市宝安区泰华梧桐岛处暑（9A）栋7层</p>
          </div>
          <div>
            <h5>联系电话</h5>
            <p>Tel：0755-23205664</p>
          </div>
          <div>
            <h5>电子邮箱</h5>
            <p>E-mail：888-88888888@qq.com</p>
          </div>
        </FlexCard>
        <Subtitle>乘车路线</Subtitle>
        <FlexLine>
          <div>
            <img src={`${GJ}`} alt={'加载失败'} />
            <PBorder>公交车</PBorder>
            <p>站台：泰华梧桐岛站</p>
            <p>线路：M245路、M259路</p>
          </div>
          <div>
            <img src={`${CZ}`} alt={'加载失败'} />
            <PBorder>出租/自驾</PBorder>
            <p>地点：深圳市宝安区泰华梧桐岛</p>
            <p>具体地址：泰华梧桐岛处暑（9A）栋7层</p>
          </div>
          <div>
            <img src={`${DT}`} alt={'加载失败'} />
            <PBorder>地铁</PBorder>
            <p>站点：固戍站D出口</p>
            <p>地铁线路：地铁1号线固戍站D口</p>
          </div>
        </FlexLine>
        <Subtitle>在线留言</Subtitle>
        <h4 style={{
          position: 'relative', left: '-575px', marginTop: '64px', fontWeight: 'bold'
        }}>给我们留言</h4>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormItemLine>
            <FormItem>
              <input name="onlineName"
                placeholder="请输入姓名"
                autoComplete="off"
                ref={register({ required: true, maxLength: 8, pattern: /\D/ })}
              />
              {_.get("onlineName.type", errors) === "required" && (
                <p><span>*</span>请输入姓名</p>
              )}
              {_.get("onlineName.type", errors) === "pattern" && (
                <p><span>*</span>请输入真实姓名</p>
              )}
            </FormItem>
            <FormItem>
              <input name="onlinePhone"
                placeholder="请输入手机号码"
                autoComplete="off"
                ref={register({ required: true, maxLength: 11, pattern: /^1(3|4|5|6|7|8|9)\d{9}$/ })}
              />
              {_.get("onlinePhone.type", errors) === "required" && (
                <p><span>*</span>请输入手机号码</p>
              )}
              {_.get("onlinePhone.type", errors) === "pattern" && (
                <p><span>*</span>请输入正确手机号码</p>
              )}
            </FormItem>
            <FormItem>
              <input name="onlineEmail"
                placeholder="请输入邮箱"
                autoComplete="off"
                ref={register({ required: true, pattern: /^([A-z0-9]{6,18})(\w)+@[A-z0-9]+\.([A-z]{2,3})$/ })}
              />
              {_.get("onlineEmail.type", errors) === "required" && (
                <p><span>*</span>请输入邮箱</p>
              )}
              {_.get("onlineEmail.type", errors) === "pattern" && (
                <p><span>*</span>请输入正确邮箱</p>
              )}
            </FormItem>
          </FormItemLine>
          <FormItemLine style={{ marginRight: '0' }}>
            <FormItem>
              <textarea name="onlineContent"
                placeholder="请输入内容~"
                autoComplete="off"
                ref={register({})}
              ></textarea>
              {/* {_.get("mail.type", errors) === "required" && (
                <p><span>*</span>请输入内容</p>
              )} */}
            </FormItem>
          </FormItemLine>
          <FormItem>
            <input type="submit" />
          </FormItem>
        </form>
      </Bottom>
    </Wrap >
  )
}