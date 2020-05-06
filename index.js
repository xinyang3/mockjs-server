/**
 * @description express mock server enter file
 * @author xinyang3
 * @date 2020/3/20
 */

import express from 'express';
import morgan from 'morgan';
import path from "path";
import { router } from './router'
import config from './config';

var app = express();
app.use(morgan('short'));

app.use(router)

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization,Origin,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.listen(config.port, config.host, () => {
  console.debug('mockjs server is running at \' http:127.0.0.1://3000 \' !')
});

export default app;