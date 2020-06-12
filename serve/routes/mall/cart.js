const express = require('express');
const router = express.Router();
// 数据库
let db = require('../../config/mysql');

/**
 * @api {post} /api/cart 添加商品至购物车
 * @apiName AddCart
 * @apiGroup Cart
 *
 * @apiParam {Number} gid 商品id;
 * @apiParam {Number} num 商品数量,不能超过库存;
 *
 * @apiSampleRequest /api/cart
 */
router.post('/', function(req, res) {
    let { gid, num } = req.body;
    let { id } = req.user;
    // 检查购物车是否已经有此商品
    let sql = `SELECT * FROM cart WHERE goods_id = ?`;
    db.query(sql, [gid], function(results, fields) {
        // 没有此商品,插入新纪录
        sql =
            `INSERT INTO cart ( uid , goods_id , goods_num , create_time )
			VALUES ( '${id}' , ${gid} , ${num} ,CURRENT_TIMESTAMP())`;
        // 已有此商品，增加数量
        if (results.length > 0) {
            sql =
                `UPDATE cart SET goods_num = goods_num + ${num} WHERE goods_id = ${gid} AND uid = '${id}'`;
        }
        db.query(sql, function(results, fields) {
            //成功
            res.json({
                status: true,
                msg: "success!"
            });
        });
    });
});
/**
 * @api {get} /api/cart/list 获取购物车列表
 * @apiName CartList
 * @apiGroup Cart
 *
 * @apiSampleRequest /api/cart/list
 */
router.get('/list', function(req, res) {
    let { id } = req.user;
    let sql =`SELECT c.id, c.goods_id, g.img_md AS img, g.name, g.price, c.goods_num FROM cart c JOIN goods g WHERE c.uid = ? AND c.goods_id = g.id`;
    db.query(sql, [id], function(results, fields) {
        //成功
        res.json({
            status: true,
            msg: "success!",
            data: results
        });
    });
});
/**
 * @api {delete} /api/cart 购物车删除商品
 * @apiName DeleteCart
 * @apiGroup Cart
 *
 * @apiParam {Number} id 购物车条目id;
 *
 * @apiSampleRequest /api/cart
 */
router.delete('/', function(req, res) {
    let { id } = req.query;
    let sql = `DELETE FROM cart WHERE id = ?`;
    db.query(sql, [id], function(results, fields) {
        //成功
        res.json({
            status: true,
            msg: "success!",
        });
    });
});
/**
 * @api {put} /api/cart/increase 购物车增加商品数量
 * @apiDescription 增加商品数量，后台查询库存，注意提示库存不足
 * @apiName IncreaseCart
 * @apiGroup Cart
 *
 * @apiParam {Number} id 购物车条目id;
 * @apiParam {Number} gid 商品id;
 * @apiParam {Number{1-库存MAX}} num 商品数量;
 *
 * @apiSampleRequest /api/cart/increase
 */
router.put('/increase', function(req, res) {
    let { id, gid, num } = req.body;
    // 检查库存
    let sql = `SELECT goods_num FROM cart WHERE id = ?;
	SELECT inventory FROM goods WHERE id = ?`;
    db.query(sql, [id, gid], function(results, fields) {
        let isEmpty = results[1][0].inventory - results[0][0].goods_num - num >= 0 ? false : true;
        if (isEmpty) {
            res.json({
                status: false,
                msg: "库存不足!"
            });
            return;
        }
        let sql = `UPDATE cart SET goods_num = goods_num + ? WHERE id = ?`;
        db.query(sql, [num, id], function(results, fields) {
            //成功
            res.json({
                status: true,
                msg: "success!",
            });
        });
    });

});
/**
 * @api {put} /api/cart/decrease 购物车减少商品数量
 * @apiDescription 减少商品数量，前台注意约束num，商品数量>=1
 * @apiName DecreaseCart
 * @apiGroup Cart
 *
 * @apiParam {Number} id 购物车条目id;
 * @apiParam {Number{1-库存MAX}} num 商品数量;
 *
 * @apiSampleRequest /api/cart/decrease
 */
router.put('/decrease', function(req, res) {
    let { id, num } = req.body;
    let sql = `UPDATE cart SET goods_num = goods_num - ? WHERE id = ?`;
    db.query(sql, [num, id], function(results, fields) {
        //成功
        res.json({
            status: true,
            msg: "success!",
        });
    });
});

module.exports = router;
