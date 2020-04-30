/**
 * @description express mock server enter file
 * @author xinyang3
 * @date 2020/3/20
 */

// const express = require("express");
import express from 'express';
import morgan from 'morgan';
import path from "path";
import { router } from './router'

var app = express();
app.use(morgan('short'));

app.use(router)

app.listen(3000, () => {
  console.debug('mockjs server is running at \' http:127.0.0.1://3000 \' !')
});

export default app;