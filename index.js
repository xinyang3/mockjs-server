/**
 * @description express mock server enter file
 * @author xinyang3
 * @date 2020/3/20
 */

import express from 'express';
import morgan from 'morgan';
import path from "path";

import config from './config';

var app = express();
app.use(morgan('short'));

// app.use('/public', express.static('public'));

app.all(/\/api/, function (req, res, next) {
  console.log(req.headers.origin || '*')
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Content-Type', 'application/json;charset=utf-8');
  // if (req.method === 'OPTIONS') {
  //   res.sendStatus(200);
  // } else {
  next();
  // }
});

const { router } = require('./router')
app.use(router)

// 文件服务器
app.use(/\/public/, (req, res, next) => {

  console.log(res.headers)
  
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
  const filepath = path.join(__dirname, './public', '.', req.path)
  const filename = req.path.slice(1)
  // res.header('Content-Type', 'image/jpeg');
  res.header('Content-Disposition', `attachment; filename=${filename}`);
  res.sendFile(filepath)
})


app.listen(config.port, config.host, () => {
  console.debug(`mockjs server is running at \' http:127.0.0.1://${config.port} \' !`)
});

export default app;