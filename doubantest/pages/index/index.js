//index.js
//获取应用实例
var API_URL = 'http://localhost/traval/chat_index.php?tr_me_id=2&tr_friend_id=2';
Page({ 
  data:{
   chat:[]
  },
  onLoad: function () {
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 10000
    });

    wx.request({
      url: API_URL,
      data: {}, 
      header: {
        'Content-Type': 'application/json' 
      },
      success: function (res) {
        wx.hideToast();
        var data = res.data;
        console.log(data);
        that.setData({
           chat:data
        });
       
      }
    });
  }
  
})
