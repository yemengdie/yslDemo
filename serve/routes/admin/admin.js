const express = require('express');
const router = express.Router();
// 数据库
let db = require('../../config/mysql');
// JSON Web Token
const jwt = require("jsonwebtoken");
// express-jwt
let expressJwt = require('express-jwt');
/**
 * @apiDefine AdminLoginResponse
 * @apiSuccess { Boolean } status 请求状态.
 * @apiSuccess { String } msg 请求结果信息.
 * @apiSuccess { Object } data 请求结果信息.
 * @apiSuccess { String } data.token 返回的token.
 * @apiSuccess { String } data.id 账户id.
 * @apiSuccess { String } data.role 账户角色id.
 *
 * @apiSuccessExample { json } 200返回的JSON:
 *  HTTP / 1.1 200 OK
 *  {
 *      "status": true,
 *      "msg": "成功",
 *      "data":{
 *          "id":5,
 *          "role":3,
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwidXNlcm5hbWUiOiIxIiwiaWF0IjoxNTU3MzM1Mzk3LCJleHAiOjE1NTczNDI1OTd9.vnauDCSHdDXaZyvTjNOz0ezpiO-UACbG-oHg_v76URE"
 *      }
 *  }
 */

/**
 * @api {post} /api/admin/register 管理员注册
 * @apiDescription 注册成功，默认角色为运营人员，默认生成头像地址："/images/avatar/default.jpg"， 返回token, 请在头部headers中设置Authorization: `Bearer ${token}`,所有请求都必须携带token;
 * @apiName AdminRegister
 * @apiGroup admin User
 * @apiPermission admin
 *
 * @apiParam { String } username 账户名.
 * @apiParam { String } password 密码.
 * @apiParam { String } fullname 姓名.
 * @apiParam { String } sex 性别.
 * @apiParam { String } tel 手机号码.
 *
 * @apiUse AdminLoginResponse
 *
 * @apiSampleRequest /api/admin/register
 */
router.post('/register', function (req, res) {
	let { user, phone, password } = req.body;
	// 查询账户是否存在
	let sql = `SELECT * FROM user WHERE phone = ?`
	db.query(sql, [phone], function (results, fields) {
		if (results.length) {
			res.json({
				code: "201",
				message: "账号已经存在！"
			});
			return false;
		}
		let { pool } = db;
		pool.getConnection(function (err, connection) {
			if (err) throw err; // not connected!
			connection.beginTransaction(function (err) {
				if (err) throw err;
				let sql =
					`INSERT INTO user (user, phone, password) VALUES ("${user}","${phone}","${password}")`;
				connection.query(sql, [user, phone, password], function (error, results, fields) {
					let { insertId, affectedRows } = results;
					console.log(results)
					if (error || affectedRows <= 0) {
						return connection.rollback(function () {
							throw error || `${affectedRows} rows changed!`;
						});
					}
					connection.commit(function (err) {
						if (err) {
							return connection.rollback(function () {
								throw err;
							});
						}
					});
					let payload = {
						id: insertId,
						//user: parms.user,

					};
					// 生成token
					let token = jwt.sign(payload, 'secret', { expiresIn: '4h' });
					// 存储成功
					res.json({
						code: "200",
						message: "注册成功！",
						data: {
							token,
							id: insertId,
							user: user,

						}
					});
				});
			});
		});
	});
});

/**
 * @api {post} /api/admin/login 管理员登录
 * @apiDescription 登录成功， 返回token, 请在头部headers中设置Authorization: `Bearer ${token}`, 所有请求都必须携带token;
 * @apiName AdminLogin
 * @apiGroup admin User
 * @apiPermission admin
 *
 * @apiParam {String} username 账户名.
 * @apiParam {String} password 密码.
 *
 * @apiUse AdminLoginResponse
 *
 * @apiSampleRequest /api/admin/login
 */


router.post('/login', function (req, res) {
	let { phone, password, user } = req.body;
	let sql = `SELECT * FROM user WHERE phone = ?`;
	db.query(sql, [phone], function (results) {
		if (!results.length) {
			res.json({
				code: '210',
				message: '账号不存在，请前去注册！'
			})

		} else {
			let sql = `SELECT * from  user where phone=${phone}`
			db.query(sql, [results[0].phone], function (response) {
				if (!results.length) {
					res.json({
						code: '210',
						message: '账号不存在，请前去注册！'
					})
					// return false;
				} else {
					db.query(sql, [results[0].phone], function (response) {
						if (response[0].password == password) {
							let { insertId, affectedRows } = results;
							console.log(response)
							parms = response[0]
							let payload = {
								user: parms.user,

							};
							let token = jwt.sign(payload, 'secret', { expiresIn: '4h' });

							res.json({
								code: '200',
								message: '登录成功！',
								data: {
									token,
									user: parms.user,

								}
							})
						} else {
							res.json({
								code: '210',
								message: '密码错误'
							})
						}
					})

				}
			})
		}
	})
})
/**
 * @api {get} /api/admin/banner 获取管理员列表
 * @apiName AdminList
 * @apiGroup admin User
 * @apiPermission admin
 *
 * @apiSampleRequest /api/admin/banner
 */
//查询轮播图图片
router.get('/lunbo', function (req, res) {
	let sql = `SELECT * FROM banner`;
	db.query(sql, [], function (results, fields) {
		if (!results.length) {
			res.json({
				code: 201,
				message: "网络请求失败！"
			});
		} else {
			res.json({
				code: 200,
				message: "",
				data: results
			});
		}
	})
})
/**
 * @api {get} /api/admin/list 获取管理员列表
 * @apiName AdminList
 * @apiGroup admin User
 * @apiPermission admin
 *
 * @apiSampleRequest /api/admin/list
 */
router.get("/list", function (req, res) {
	//查询账户数据
	let sql =
		`SELECT a.id,a.username,a.fullname,a.email,a.sex,a.avatar,a.tel,DATE_FORMAT(a.login_time,'%Y-%m-%d %H:%i:%s') AS login_time,a.login_count,r.role_name,r.id AS role FROM ADMIN AS a LEFT JOIN admin_role AS ar ON a.id = ar.admin_id LEFT JOIN role AS r ON r.id = ar.role_id ORDER BY a.id`;
	db.query(sql, [], function (results, fields) {
		if (!results.length) {
			res.json({
				status: false,
				msg: "获取失败！"
			});
			return false;
		}
		// 获取成功
		res.json({
			status: true,
			msg: "获取成功！",
			data: results
		});
	})
});
/**
 * @api {delete} /api/admin 删除管理员
 * @apiName DeleteAdmin
 * @apiGroup admin User
 * @apiPermission admin
 *
 * @apiParam {Number} id 账户id.
 *
 * @apiSampleRequest /api/admin
 */
router.delete('/', function (req, res) {
	let { id } = req.query;
	let sql = `DELETE FROM admin WHERE id = ?;DELETE FROM admin_role WHERE admin_id = ?;`
	db.query(sql, [id, id], function (results) {
		// 获取成功
		res.json({
			status: true,
			msg: "删除成功！",
		});
	})
});
/**
 * @api {get} /api/admin 获取管理员个人资料
 * @apiName AdminInfo
 * @apiGroup admin User
 *
 * @apiParam {Number} id 账户id.
 * 
 * @apiSampleRequest /api/admin
 */
router.get("/", function (req, res) {
	let { id } = req.query;
	//查询账户数据
	let sql =
		`SELECT a.id,a.username,a.fullname,a.email,a.sex,a.avatar,a.tel,r.role_name,r.id AS role FROM ADMIN AS a LEFT JOIN admin_role AS ar ON a.id = ar.admin_id LEFT JOIN role AS r ON r.id = ar.role_id WHERE a.id = ?`;
	db.query(sql, [id], function (results, fields) {
		if (!results.length) {
			res.json({
				status: false,
				msg: "获取失败！"
			});
			return false;
		}
		// 获取成功
		res.json({
			status: true,
			msg: "获取成功！",
			data: results[0]
		});
	})
});
/**
 * @api { put } /api/admin 更新管理员个人资料
 * @apiName UpdateInfo
 * @apiGroup admin User
 *
 * @apiParam {Number} id 账户id.
 * @apiParam {String} fullname 姓名.
 * @apiParam {String} sex 性别.
 * @apiParam {String} avatar 头像.
 * @apiParam { String } tel 手机号码.
 * @apiParam { String } email 邮箱地址.
 * @apiParam { String } role 账户角色id.
 *
 * @apiSampleRequest /api/admin
 */
router.put("/", function (req, res) {
	let { id, fullname, sex, avatar, tel, email, role } = req.body;
	let sql = `
    UPDATE admin SET fullname = ?,sex = ?,avatar = ?,tel = ?,email = ? WHERE id = ?;
    UPDATE admin_role SET role_id = ? WHERE admin_id = ?`;
	db.query(sql, [fullname, sex, avatar, tel, email, id, role, id], function (results, fields) {
		res.json({
			status: true,
			msg: "修改成功！"
		});
	});
});

module.exports = router;
