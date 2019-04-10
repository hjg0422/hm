// pages/login/login.js
import url from '../../utils/baseUrlConfig.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
 data: {
  },
  formSubmit(e) {
    if (this.varifyData(e.detail.value))
      return wx.showToast({
        title: '不能为空',
      });
    this.setData({ loginBody: { ...e.detail.value, select: 0 } });
    wx.request({
      url: `${url}/login`,
      data: this.data.loginBody,
      method: 'POST',
      success: (res) => {
        if (res['data']['code'] === '1000') { // 登陆成功
          wx.setStorageSync('user', res['data']['data']);
          wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000
          });
          wx.switchTab ({
            url: '../../pages/home/home',
          });
        }
        else{
          wx.showToast({
            title: res['data']['msg'],
          })
        }
        console.log(res, 'res')
      }
    })
    /*  wx.navigateTo({
       url: '../../pages/home/index',
     });
     wx.showToast({
       title: '成功',
       icon: 'success',
       duration: 2000
     }) */

  },
  varifyData(body) {
    if (JSON.stringify(body) === '{}') {
      return false;
    }
    return Object.keys(body).some(item => body[item] === '')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})