var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = 3300;
const hostname = "localhost";
var sqldb = require('./sqldb');
sqldb.sequelize.sync({ force: false }).then(function () {
  console.log("Server successed to start");
}).catch(function (err) {
  console.log("Server failed to start due to error: %s", err);
});
var routes = require('./routes/index');

const cors = require("cors");
var app = express();
app.use(cors()); // cors 解决跨域的问题 
app.use(express.json()); //  得到 post请求的提交的 formData 数据 
app.use(express.urlencoded({ extended: false })); // req.body 


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 监听端口
// app.listen(3300, () => {
//   console.log('后端服务器启动成功，地址是:http://127.0.0.1:3300')
// })
app.listen(port, hostname, () => {
  console.log(`my server is listening on http://${hostname}:${port}`);
})

module.exports = app;
