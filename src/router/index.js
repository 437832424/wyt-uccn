// 实现懒加载路由
import { lazy } from 'react';
const LazyRouter = [//由于路由模块不够多，也就没必要分模块.
  {
    path: "/homePage",
    name: "homePage",
    component: lazy(() => import("../pages/app-main/home-page")),
    meta: {
      title: '首页'
    }
  },
  {
    path: "/companyProfile",
    name: "companyProfile",
    component: lazy(() => import("../pages/app-main/company-profile")),
    meta: {
      title: '公司介绍'
    }
  },
  {
    // redirect: '/intelligentFire/index',
    path: "/intelligentFire",
    name: "intelligentFire",
    component: lazy(() => import("../pages/app-main/company-profile")),
    meta: {
      title: '智慧消防'
    },
    children: [
      {
        path: "/intelligentFire/index",
        name: "intelligentFireIndex",
        component: lazy(() => import("../pages/app-main/company-profile")),
        meta: {
          title: '智慧消防'
        }
      },
      {
        path: "/rfChips",
        name: "rfChips",
        component: lazy(() => import("../pages/app-main/rf-chips")),
        meta: {
          title: '射频通信芯片'
        }
      }, {
        path: "/honeycombAp",
        name: "honeycombAp",
        component: lazy(() => import("../pages/app-main/honeycomb-ap")),
        meta: {
          title: '蜂窝AP'
        }
      }, {
        path: "/intelligentFireEquip",
        name: "intelligentFireEquip",
        component: lazy(() => import("../pages/app-main/intelligentfire-equip")),
        meta: {
          title: '智能消防设备'
        }
      }, {
        path: "/intelligentFirePlatform",
        name: "intelligentFirePlatform",
        component: lazy(() => import("../pages/app-main/intelligentfire-platform")),
        meta: {
          title: '智慧消防平台'
        }
      },
    ]
  }, {
    path: "/cooperationCase",
    name: "cooperationCase",
    component: lazy(() => import("../pages/app-main/cooperation-case")),
    meta: {
      title: '合作案列'
    }
  },
  // {
  //   path: "/pressCenter",
  //   name: "pressCenter",
  //   component: lazy(() => import("../pages/app-main/company-profile")),
  //   meta: {
  //     title: '新闻中心'
  //   }
  // }, 
  {
    path: "/contactUs",
    name: "contactUs",
    component: lazy(() => import("../pages/app-main/contact-us")),
    meta: {
      title: '联系我们'
    }
  }
]

export default LazyRouter 
