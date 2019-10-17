# 用途 
> 用作本地mock数据

### 框架 express  express-generator 

### 使用手册
> yarn 
> npm start

### 更新日志
+ 加入 supervisor  使用supervisor提高nodejs调试效率
+ 使用 nodemon 或者 Supervisor 监控 Express 4.x 代码改动进行开发
  >yarn add supervisor
  >"start": "node ./bin/www"
  >"start": "supervisor ./bin/www"
  Express 4.x 默认将启动模块分离到了./bin/www中，直接使用 supervisor 无法正常监控应用，使得开发过程中的调试非常不方便。
  直接在 app.js 添加 app 模块即可。
  参考：https://segmentfault.com/a/1190000000603336
  >"start": "supervisor app.js"
+mockjs 使用mock



