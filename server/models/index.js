const AV = require('leanengine')

// `AV.Object.extend` 方法一定要放在全局变量，否则会造成堆栈溢出。
// 详见： https://leancloud.cn/docs/js_guide.html#对象

exports.News = AV.Object.extend('News')
exports.Channel = AV.Object.extend('Channel')