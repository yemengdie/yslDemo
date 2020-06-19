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

 Date: 19/06/2020 17:50:49
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for submenu
-- ----------------------------
DROP TABLE IF EXISTS `submenu`;
CREATE TABLE `submenu`  (
  `pId` int(8) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of submenu
-- ----------------------------
INSERT INTO `submenu` VALUES (1001, '唇部');
INSERT INTO `submenu` VALUES (1001, '面部');
INSERT INTO `submenu` VALUES (1001, '眼部');
INSERT INTO `submenu` VALUES (1001, '唇膏');
INSERT INTO `submenu` VALUES (1001, '唇釉');
INSERT INTO `submenu` VALUES (1001, '唇颊霜');

SET FOREIGN_KEY_CHECKS = 1;
