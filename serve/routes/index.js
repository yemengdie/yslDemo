var express = require('express');
var router = express.Router();
var db = require("../sqldb");
var User = db.User;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { titile: 'express' })
});
//用户注册接口
router.post('/add/user', function (req, res, next) {
  return db.sequelize.transaction(function (t) {
    var phone = req.body.phone
    return User.findOne({
      phone
    }).then(result => {
      // console.log(res)
      if (result) {
        if (phone == result.phone) {
          res.json({
            code: 201,
            message: "该账号已注册"
          })
        } else {
          return User.create({
            user: req.body.user,
            password: req.body.password,
            phone: req.body.phone
          }).then(result => {
            res.json({
              code: 200,
              flag: 1,
              message: "注册成功",
            })
          }).catch(err => {
            console.log(err)
          })
        }
      }
    }).catch(err => {
      console.log(err)
    })
  })
})
router.post("/login", (req, res) => {

  return db.sequelize.transaction(function (t) {
    var phone = req.body.phone;
    var password = req.body.password;
    console.log(req.body)
    return User.findOne({
      phone
    }).then(result => {
      console.log("99999999999")
      console.log(result)
      if (result) {
        console.log("00000000000000")
        if (phone == result.phone) {
          if (password == result.password) {
            res.json({
              code: 200,
              message: "登录成功",
            })
          } else {
            res.json({
              code: 211,
              message: "密码错误",
            })
          }
        } else {
          res.json({
            code: 210,
            message: "账号不存在，请先注册",
          })
        }
      } else {
        console.log(res)
      }

    })
  })
})

module.exports = router;
