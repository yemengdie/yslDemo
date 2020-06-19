/*
 Navicat Premium Data Transfer

 Source Server         : vueDemo
 Source Server Type    : MySQL
 Source Server Version : 50728
 Source Host           : localhost:3306
 Source Schema         : vuedemo

 Target Server Type    : MySQL
 Target Server Version : 50728
 File Encoding         : 65001

 Date: 19/06/2020 17:50:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for menu
-- ----------------------------
DROP TABLE IF EXISTS `menu`;
CREATE TABLE `menu`  (
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `pId` int(11) NOT NULL,
  `menu_order` int(8) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of menu
-- ----------------------------
INSERT INTO `menu` VALUES ('彩妆', 1001, 1);
INSERT INTO `menu` VALUES ('香水', 1002, 2);
INSERT INTO `menu` VALUES ('护肤', 1003, 3);
INSERT INTO `menu` VALUES ('会员中心', 1006, 6);
INSERT INTO `menu` VALUES ('尊享礼盒', 1005, 5);
INSERT INTO `menu` VALUES ('618年中盛典', 1004, 4);
INSERT INTO `menu` VALUES ('私人定制服务', 1007, 7);

SET FOREIGN_KEY_CHECKS = 1;
