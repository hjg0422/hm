Page({
  data: {
    imgUrls: [
    '../../../images/1.jpg',
      '../../../images/2.jpg',
      '../../../images/3.jpg',
      '../../../images/4.jpg',
      '../../../images/5.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 2000,
    fnList: [
      {
        name: "信息录入",
        path: `../pages/user/function/record/record`
      },
      {
        name: "健康评估",
        path: `pages/user/function/`
      },
      {
        name: "查询",
        path: `pages/user/function/`
      }
    ]
  },
 /*  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  } */
})