import server from '../server';
var Mock = require('mockjs')
var Randow = Mock.Random;

const CMN = {
  code: 0,
  message: '操作成功!',
  data: null
}

// 获取菜单列表
server.get(/\/user\/list/, function () {
  var data = Mock.mock({
    data: {
      'list|8-20': [{
        name: Randow.name(),
        msg: Randow.title(2)
      }]
    }
  })
  return Object.assign({}, CMN, data);
})