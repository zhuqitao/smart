//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    userList: [],
    loading: true
  },
  //事件处理函数

  

  onLoad: function () {
    console.log(app.globalData)
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      }
    })
    wx.showLoading({
      title: 'aa',
      mask: true
    })
    app.login().then(res => {
      app.ajax('xcx/user/getCheckWorker', 'POST').then(res => {
        wx.hideLoading()
        this.setData({
          userList: res.data.body.checkWorkJoindata,
          loading: false
        })
      })
    })
  },

  onShow: function () {
    console.log('a')
  },

  // 添加出勤人员
  editStaff: function () {
    wx.switchTab({
      url: '../edit/edit',
    })
  },
})
