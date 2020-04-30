/**
 * @description mockjs用法示例
 * @author xinyang3
 * @date 2020/4/29
 */

import server from './server';
var Mock = require('mockjs')

const CMN = {
  code: 0,
  message: '操作成功!',
  data: null
}

// 获取菜单列表
server.get(/\/menu\/list/, function () {
  var data = Mock.mock({
    data: [{ "user": { "number": "SA00000001", "name": "管理员", "authorities": ["ROLE_COMMON", "ROLE_MODULE_DEMO_USER", "ROLE_DEMO_ADMIN"] }, "routers": [{ "children": [{ "component": "Display/mould1", "meta": { "code": "", "icon": "menu-user", "title": "模板1" }, "name": "Mould1", "path": "mould1" }, { "component": "Display/mould2", "meta": { "code": "", "icon": "menu-user", "title": "模板2" }, "name": "Mould2", "path": "mould2" }, { "component": "Display/mould3", "meta": { "code": "", "icon": "menu-user", "title": "模板3" }, "name": "Mould3", "path": "mould3" }, { "component": "Display/mould4", "meta": { "code": "", "icon": "menu-user", "title": "模板4" }, "name": "Mould4", "path": "mould4" }, { "component": "Display/mould5", "meta": { "code": "", "icon": "menu-user", "title": "模板5" }, "name": "Mould5", "path": "mould5" }, { "component": "Display/mould6", "meta": { "code": "", "icon": "menu-user", "title": "模板6" }, "name": "Mould6", "path": "mould6" }, { "component": "Display/mould7", "meta": { "code": "", "icon": "menu-user", "title": "模板7" }, "name": "Mould7", "path": "mould7" }, { "component": "Display/mould8", "meta": { "code": "", "icon": "menu-user", "title": "模板8" }, "name": "Mould8", "path": "mould8" }, { "component": "Display/mould9", "meta": { "code": "", "icon": "menu-user", "title": "模板9" }, "name": "Mould9", "path": "mould9" }, { "component": "Display/mould10", "meta": { "code": "", "icon": "menu-user", "title": "模板10" }, "name": "Mould10", "path": "mould10" }], "component": "Layout", "meta": { "code": "", "icon": "menu-system", "title": "展示级" }, "name": "Display", "path": "/display", "redirect": "/display/mould1" }, { "children": [{ "component": "Functional/mould1", "meta": { "code": "", "icon": "menu-user", "title": "模板1" }, "name": "Mould1", "path": "mould1" }, { "component": "Functional/mould2", "meta": { "code": "", "icon": "menu-user", "title": "模板2" }, "name": "Mould2", "path": "mould2" }, { "component": "Functional/mould3", "meta": { "code": "", "icon": "menu-user", "title": "模板3" }, "name": "Mould3", "path": "mould3" }, { "component": "Functional/mould4", "meta": { "code": "", "icon": "menu-user", "title": "模板4" }, "name": "Mould4", "path": "mould4" }], "component": "Layout", "meta": { "code": "", "icon": "menu-system", "title": "功能级" }, "name": "Functional", "path": "/functional", "redirect": "/functional/mould1" }] }]
  })
  return Object.assign({}, CMN, data);
})

