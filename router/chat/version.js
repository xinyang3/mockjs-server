import server from '../server';
var Mock = require('mockjs')
var Randow = Mock.Random;

const path = require('path')
const fs = require('fs')

const CMN = {
  code: 0,
  message: '操作成功!',
  data: null
}

// 获取窗口中用户
server.post(/\/version\/check/, function () {
  return Object.assign({}, CMN, {
    data: 'wechat-'.concat(Randow.float(10, 20, 2, 20).toFixed(3))
  })
})


server.get(/\/version\/download/, function () {
  const stream = fs.readFileSync(path.resolve(__dirname, './Sublime.exe'))
  return stream;
})