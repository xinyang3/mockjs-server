/**
 * @description mock server 基础类 对路由进性拦截
 * @author xinyang3
 * @date 2020/4/29
 */
import express from 'express';

const router = express.Router();

class Server {
  constructor(router) {
    this.router = router;
  }

  // 路由拦截回调处理提取
  static process(req, res, next, cb) {
    let result;
    if (result = cb()) {
      res.send(result)
    } else {
      console.log('no mock data is return !');
      next();
    }
  }

  request() {
  }

  get(url, cb) {
    console.log(url)
    console.log(cb)
    // 参数不匹配
    if (!url || !cb || typeof cb !== 'function') return;
    this.router.get(url, function (res, req, next) {
      Server.process(res, req, next, cb);
    })
  }

  post(url = '', cb) {
    // 参数不匹配
    if (!url || !cb || typeof cb !== 'function') return;

    this.router.post(url, function (res, req, next) {
      Server.process(res, req, next, cb);
    })
  }

  put(url = '', cb) {

  }

  delete(url = '', cb) {

  }
}

const server = new Server(router);

export default server;

export { router };
