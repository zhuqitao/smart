
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    state: 0,
    name: '',
    phone: '',
    address: '',
    payOfferId: '', // 工资标准
    type: '',       // 类型 1、公共2、私有
    sex: '',        // 性别 1 男 2 女
  },

  // 输入框 获取焦点
  focus (e) {
    console.log(e)
    this.setData({
      state: e.target.dataset.state
    })
    console.log(this.data.state)
  },

  nameInp: function (e) {
    this.setData({
      name: e.detail.value 
    })
  },
  mobileInp: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },
  addressInp: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  payOfferInp: function (e) {
    this.setData({
      payOfferId: e.detail.value
    })
  },
  sexChange: function (e) {
    this.setData({
      sex: e.detail.value
    })
  },
  typeChange: function (e) {
    this.setData({
      type: e.detail.value
    })
  },

  submit: function () {
    app.ajax('https://www.meijile.xin/api/xcx/user/addWorker', 'POST', {
      name: this.data.name,
      sex: this.data.sex,
      address: this.data.address,
      phone: this.data.phone,
      payOfferId: this.data.payOfferId,
      type: this.data.type,
    }).then(res => {
      if(res.data.success) {
        wx.showToast({
          title: res.data.msg,
          icon: 'success'
        })
      } else {
        wx.showToast({
          title: '保存失败',
          icon: 'none'
        })
      }
      console.log(res.data.success)
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  }
})