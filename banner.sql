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

 Date: 19/06/2020 17:50:31
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for banner
-- ----------------------------
DROP TABLE IF EXISTS `banner`;
CREATE TABLE `banner`  (
  `goodId` int(11) NOT NULL,
  `pic_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`goodId`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of banner
-- ----------------------------
INSERT INTO `banner` VALUES (0, '/images/gw.jpg');
INSERT INTO `banner` VALUES (1, '/images/lb1.jpg');
INSERT INTO `banner` VALUES (2, '/images/lb2.jpg');
INSERT INTO `banner` VALUES (3, '/images/lb3.jpg');

SET FOREIGN_KEY_CHECKS = 1;
