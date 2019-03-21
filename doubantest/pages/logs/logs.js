//logs.js
var num=0;
Page({
 
  onLoad: function (options) {
   var that = this;
    that.setData({
     num: options.id
    });
  } 
})
