import server from '../server';
var Mock = require('mockjs')
var Randow = Mock.Random;

const CMN = {
  code: 0,
  message: '操作成功!',
  data: null
}

// 获取窗口中用户
server.get(/\/windows\/users/, function () {
  let list = []
  for (var i = 0; i < 25; i++) {
    let data = Mock.mock({
      name: Randow.name(),
      id: i + 1
    })
    list.push(data)
  }
  return Object.assign({}, CMN, {
    data: {
      list: list
    }
  });
})