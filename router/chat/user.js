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
  var list = [],
    icons = ['#icon-girl-one', '#icon-girl-two', '#icon-girl-three',
      '#icon-man-one', '#icon-man-two', '#icon-man-three', '#icon-man-four',]
  for (let i = 0; i <= 20; i++) {
    let d = Mock.mock({
      icon: icons[Randow.integer(0, 6)],
      name: Randow.name(),
      msg: Randow.title(2)
    })
    list.push(d)
  }
  return Object.assign({}, CMN, { data: { list: list } });
})