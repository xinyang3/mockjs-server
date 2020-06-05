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

app.use('/public', express.static(path.resolve('./public')));

// app.use(/\/public\/download/, (req, res, next) => {

//   console.log(res.headers['Content-Type'])
//   const filepath = path.join(__dirname, './public', '.', req.path)
//   const filename = req.path.slice(1)
//   res.header('Content-Type', 'image/jpeg');
//   res.header('Content-Disposition', `attachment; filename=${filename}`);
//   res.sendFile(filepath)
// })


app.listen(config.fporte, config.host, () => {
  console.debug(`mockjs server is running at \' http:127.0.0.1://${config.fporte} \' !`)
});

export default app;