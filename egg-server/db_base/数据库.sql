-- --------------------------------------------------------
-- 主机:                           169.254.169.253
-- 服务器版本:                        5.5.20 - MySQL Community Server (GPL)
-- 服务器OS:                        Win32
-- HeidiSQL 版本:                  10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for supermarket
CREATE DATABASE IF NOT EXISTS `supermarket` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `supermarket`;

-- Dumping structure for table supermarket.count
CREATE TABLE IF NOT EXISTS `count` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `phone` varchar(50) DEFAULT '0' COMMENT '电话号码',
  `type` varchar(50) DEFAULT 'false',
  `name` varchar(50) DEFAULT '0' COMMENT '名字',
  `address` varchar(50) DEFAULT '0' COMMENT '地址',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='所有的个人地址列表';

-- Dumping data for table supermarket.count: ~9 rows (大约)
DELETE FROM `count`;
/*!40000 ALTER TABLE `count` DISABLE KEYS */;
INSERT INTO `count` (`id`, `phone`, `type`, `name`, `address`) VALUES
	(1, '123321', 'false', '高炎鑫66', '北京八维研修学院'),
	(2, '123', 'true', '123', '212'),
	(3, '13522464901', 'false', '杨彭凯', '山西'),
	(4, '13522464901', 'false', '陈强', '北京'),
	(5, '158 9783 9018', 'false', '陈强', '海淀区'),
	(6, '13521612213', 'false', '孙淼', '河北邯郸'),
	(7, '15122352161', 'false', '于福意', '河北'),
	(8, '136 1118 1219', 'false', '郝楠', '偏关县'),
	(9, '183 6017 6433', 'false', '孙淼', '河北');
/*!40000 ALTER TABLE `count` ENABLE KEYS */;

-- Dumping structure for table supermarket.info
CREATE TABLE IF NOT EXISTS `info` (
  `uid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` char(100) DEFAULT NULL COMMENT '用户名',
  `signature` char(100) DEFAULT NULL COMMENT '用户签名',
  `discountcoupon` char(100) NOT NULL DEFAULT '0' COMMENT '优惠券',
  `emailcode` char(100) NOT NULL COMMENT '邮箱账号',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COMMENT='用户信息';

-- Dumping data for table supermarket.info: ~19 rows (大约)
DELETE FROM `info`;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` (`uid`, `username`, `signature`, `discountcoupon`, `emailcode`) VALUES
	(4, '02312131', '1111111111111', '0', '839304376@qq.com'),
	(5, '李玲玉334', '杀手狂三快快乐乐', '0', '1483137061@qq.com'),
	(7, NULL, NULL, '0', '84951'),
	(8, 'douaiqi', '卢克的金发科技上都看', '0', '849104995@qq.com'),
	(9, '11111', 'hbjhbb', '0', '1172600218@qq.com'),
	(10, NULL, NULL, '0', '1738895221@qq.com'),
	(11, 'douaiqi', '卢克的金发科技上都看', '0', '849104995@qq.com'),
	(12, 'Yanxin', '123', '0', 'love1003089761@qq.com'),
	(13, 'gujiaxian', '456', '0', 'gzr13520881781@163.com'),
	(14, 'gujiaxian', '456', '0', 'gzr13520881781@163.com'),
	(15, 'gujiaxian', '456', '0', 'gzr13520881781@163.com'),
	(16, 'gujiaxian', '456', '0', 'gzr13520881781@163.com'),
	(17, NULL, NULL, '0', '849104995@qq.com'),
	(18, 'douaiqi', '这个人不懒   留了点东西', '0', 'Douaiqi9618@163.com'),
	(19, NULL, NULL, '0', '1483137061@qq.com'),
	(20, NULL, NULL, '0', '849512'),
	(21, NULL, NULL, '0', '849512'),
	(22, NULL, NULL, '0', '849512'),
	(23, '66666', '123', '0', '670218832@qq.com');
/*!40000 ALTER TABLE `info` ENABLE KEYS */;

-- Dumping structure for table supermarket.location_address
CREATE TABLE IF NOT EXISTS `location_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `index` int(11) DEFAULT '0' COMMENT '每个·的下标',
  `scale` int(11) DEFAULT '14' COMMENT '缩放比例',
  `name` char(50) DEFAULT NULL COMMENT '地址名称',
  `x` char(50) DEFAULT NULL COMMENT '经度',
  `y` char(50) DEFAULT NULL COMMENT '纬度',
  `type` char(50) NOT NULL DEFAULT 'false' COMMENT '默认是否选中',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COMMENT='地区定位的数据';

-- Dumping data for table supermarket.location_address: ~4 rows (大约)
DELETE FROM `location_address`;
/*!40000 ALTER TABLE `location_address` DISABLE KEYS */;
INSERT INTO `location_address` (`id`, `index`, `scale`, `name`, `x`, `y`, `type`) VALUES
	(11, 0, 14, '北京', '116.403901', '39.915462', 'false'),
	(12, 1, 14, '天津', '117.229804', '39.115913', 'false'),
	(13, 2, 14, '上海', '121.480271', '31.236299', 'false'),
	(14, 3, 17, '八维', '116.307328', '40.047115', 'true');
/*!40000 ALTER TABLE `location_address` ENABLE KEYS */;

-- Dumping structure for table supermarket.login
CREATE TABLE IF NOT EXISTS `login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(255) DEFAULT NULL COMMENT '用户邮箱',
  `phone` char(255) DEFAULT NULL COMMENT '验证码',
  `password` char(255) DEFAULT NULL,
  `token` char(255) DEFAULT NULL,
  `authCode` char(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COMMENT='登录';

-- Dumping data for table supermarket.login: ~23 rows (大约)
DELETE FROM `login`;
/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` (`id`, `username`, `phone`, `password`, `token`, `authCode`) VALUES
	(1, NULL, '894204995@qq.com', NULL, '9372e941e03273f9b736814b0889b65b', '85446'),
	(3, NULL, '849104995@qq.com', NULL, '3c4c3c7b2a246c167d7c5f7ff9d7e182', ''),
	(4, NULL, '849104955@qq.com', NULL, NULL, '44455'),
	(5, NULL, '1483137061@qq.com', NULL, '726b9d7c857ed0e45d1041e193443334', ''),
	(6, NULL, '849204995@qq.com', NULL, NULL, '74957'),
	(7, NULL, '1003089761@qq.com', NULL, '7c9f9f995f1a32b8e5f77706391067df', ''),
	(8, NULL, 'asdasd@qwe.asd', NULL, NULL, '84475'),
	(9, NULL, 'asdasdas@qwe.asd', NULL, NULL, '52850'),
	(10, NULL, '1172600218@qq.com', NULL, '4650fddec57d2c59718e9d634d7cd533', ''),
	(11, NULL, 'ocz54@qq.com', NULL, NULL, '46003'),
	(12, NULL, '314536038@qq.com', NULL, NULL, '73068'),
	(13, NULL, '2384507519@qq.com', NULL, NULL, '88502'),
	(14, NULL, '392118579@qq.com', NULL, NULL, '79098'),
	(15, NULL, 'zwen0055@qq.com', NULL, NULL, '23089'),
	(16, NULL, '1255193184@qq.com', NULL, NULL, '52816'),
	(17, NULL, 'aasdas@asd.asd', NULL, NULL, '17018'),
	(18, NULL, '839304376@qq.com', NULL, 'bd7b7333dced2a43dc0f7508b5383499', ''),
	(19, NULL, 'gzr13520881781@163.com', NULL, '4ebd73d0336849e33981d81581323879', ''),
	(20, NULL, '2721703228@qq.com', NULL, '7790e61e3929213a5c9a029eb205bc36', ''),
	(21, NULL, '76351506@qq.com', NULL, 'd336198438dd913006d7fe8e1723c792', ''),
	(22, NULL, 'love1003089761@qq.com', NULL, 'f12ef360e180a33fb47d9773f95e3808', ''),
	(23, NULL, '1738895221@qq.com', NULL, 'a6b040c386f4c48c2c5a9930f8134977', ''),
	(24, NULL, 'Douaiqi9618@163.com', NULL, '635fa8fae29fc8cadd0dc3c5e1c038fe', ''),
	(25, NULL, '670218832@qq.com', NULL, '0a72424fbb0746f1d868614b901ccc1f', '');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;

-- Dumping structure for table supermarket.mainclass
CREATE TABLE IF NOT EXISTS `mainclass` (
  `m_id` int(11) NOT NULL AUTO_INCREMENT,
  `m_title` char(250) NOT NULL,
  PRIMARY KEY (`m_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COMMENT='大类';

-- Dumping data for table supermarket.mainclass: ~9 rows (大约)
DELETE FROM `mainclass`;
/*!40000 ALTER TABLE `mainclass` DISABLE KEYS */;
INSERT INTO `mainclass` (`m_id`, `m_title`) VALUES
	(1, '蔬菜水果'),
	(2, '熟食速食'),
	(3, '牛奶冰品'),
	(4, '休闲小食'),
	(5, '酒水饮料'),
	(6, '体育用品'),
	(7, '学习用品'),
	(8, '生活用品'),
	(9, '办公用品');
/*!40000 ALTER TABLE `mainclass` ENABLE KEYS */;

-- Dumping structure for table supermarket.order
CREATE TABLE IF NOT EXISTS `order` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `price` char(50) NOT NULL DEFAULT '0' COMMENT '单价',
  `title` char(50) DEFAULT NULL COMMENT '商品名称',
  `img` varchar(500) DEFAULT NULL COMMENT '图片',
  `type` char(50) DEFAULT NULL COMMENT '订单状态（待付款1     帶配送2  已发货3   退款售后4）',
  `num` int(11) DEFAULT NULL COMMENT '數量',
  `orderTime` char(50) DEFAULT NULL COMMENT '订单时间',
  `user` varchar(300) DEFAULT NULL COMMENT '下单用户',
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COMMENT='订单';

-- Dumping data for table supermarket.order: ~20 rows (大约)
DELETE FROM `order`;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
INSERT INTO `order` (`oid`, `price`, `title`, `img`, `type`, `num`, `orderTime`, `user`) VALUES
	(19, '3.82', '冬瓜约1kg', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 4, '2019-10-21', '1172600218@qq.com'),
	(20, '2.90', '金针菇400g', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 1, '2019-10-22', '1172600218@qq.com'),
	(21, '1.9', '三元牛奶', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 1, '2019-10-22', '1172600218@qq.com'),
	(22, '3.5', '西兰花', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '1', 4, '2019-10-23', '1172600218@qq.com'),
	(23, '5.90', '农夫山泉天然水', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 5, '2019-10-23', '1172600218@qq.com'),
	(24, '259.00', '打印机', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '1', 2, '2019-10-23', '1172600218@qq.com'),
	(25, '1', '窝窝头', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '1', 4, '2019-10-21', '839304376@qq.com'),
	(26, '1', '菠菜', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '2019-10-21', '839304376@qq.com'),
	(29, '3.5', '西兰花', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 3, '2019-10-23', '1483137061@qq.com'),
	(30, '259.00', '打印机', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 1, '2019-11-14', 'gzr13520881781@163.com'),
	(31, '0.99', '芹菜1把', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '2019-10-23', '1483137061@qq.com'),
	(32, '9.90', '雪花精制啤酒', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '2019-10-23', '1483137061@qq.com'),
	(33, '5.20', '可口可乐', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '2019-10-23', '1483137061@qq.com'),
	(34, '5.20', '雪碧', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '2019-10-23', '1483137061@qq.com'),
	(35, '259.00', '打印机', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '1', 1, '2019-10-23', '670218832@qq.com'),
	(36, '0.99', '芹菜1把', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '', NULL),
	(37, '9.90', '雪花精制啤酒', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 2, '', NULL),
	(38, '1', '菠菜', 'undefined', '2', 2, '', NULL),
	(39, '1', '窝窝头', 'undefined', '2', 4, '', NULL),
	(40, '2.00', '油菜（精）约350g', 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', '2', 6, '2019-10-24', 'gzr13520881781@163.com');
/*!40000 ALTER TABLE `order` ENABLE KEYS */;

-- Dumping structure for table supermarket.productlist
CREATE TABLE IF NOT EXISTS `productlist` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(250) NOT NULL COMMENT '商品名称',
  `addUp` float NOT NULL DEFAULT '1.3' COMMENT '累计',
  `haveSpell` int(11) NOT NULL DEFAULT '13' COMMENT '已拼',
  `modes` char(250) NOT NULL DEFAULT '自营' COMMENT '经营模式',
  `price` char(250) NOT NULL COMMENT '价格',
  `oldPrice` char(250) NOT NULL COMMENT '原价格',
  `num` int(11) NOT NULL DEFAULT '0' COMMENT '数量',
  `m_id` int(11) NOT NULL COMMENT '大类对应的id',
  `imgUrl` varchar(500) DEFAULT NULL COMMENT '图片路径',
  `s_id` int(11) NOT NULL COMMENT '小类对应的id',
  `spec` char(50) NOT NULL COMMENT '重量',
  `type` int(11) NOT NULL DEFAULT '0' COMMENT '加入购物车的状态',
  `imgList` varchar(500) NOT NULL COMMENT '详情轮播图',
  `ischecked` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8 COMMENT='商品列表';

-- Dumping data for table supermarket.productlist: ~56 rows (大约)
DELETE FROM `productlist`;
/*!40000 ALTER TABLE `productlist` DISABLE KEYS */;
INSERT INTO `productlist` (`id`, `title`, `addUp`, `haveSpell`, `modes`, `price`, `oldPrice`, `num`, `m_id`, `imgUrl`, `s_id`, `spec`, `type`, `imgList`, `ischecked`) VALUES
	(1, '油菜（精）约350g', 2, 13, '自营', '2.00', '2.00', 6, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 2, '1.2', 1, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(2, '西兰花', 1.3, 13, '自营', '3.5', '3.9', 1, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 2, '1.5', 1, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(3, '芹菜1把', 1.3, 13, '自营', '0.99', '2', 1, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 2, '1.1', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(4, '冬瓜约1kg', 1.3, 13, '自营', '3.82', '4.60', 0, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 2, '2.1', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(5, '金针菇400g', 1.3, 13, '自营', '2.90', '3.40', 1, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 2, '2.2', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(6, '越南红心火龙果', 1.3, 13, '自营', '8.90', '9.70', 1, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 1, '3.9', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(7, '巨峰葡萄', 1.3, 13, '自营', '14.9', '18.65', 1, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 1, '2.9', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(8, '寒富苹果', 1.3, 13, '自营', '8.39', '12.09', 0, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 1, '3.5', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(9, '进口香蕉', 1.3, 13, '自营', '7.90', '8.90', 0, 1, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 1, '1.9', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(10, '优选后尖', 1.3, 13, '自营', '12', '13', 0, 2, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 3, '2.3', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(11, '馒头6个装', 1.3, 13, '自营', '3.2', '5.0', 0, 2, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 3, '1.3', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(12, '桃酥', 1.3, 13, '自营', '4.99', '7.79', 0, 2, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 3, '2.0', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(13, '双汇王中王', 1.3, 13, '自营', '18.9', '21.0', 0, 2, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 4, '2.3', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(14, '统一老坛酸菜', 1.3, 13, '自营', '10.9', '13.0', 0, 2, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 4, '2.1', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(15, '三元牛奶', 1.3, 13, '自营', '1.9', '2.1', 0, 3, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 5, '1.6', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(16, '蒙牛纯牛奶', 1.3, 13, '自营', '54.9', '56', 0, 3, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 5, '2.5', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(17, '蒙牛随便家庭装', 1.3, 13, '自营', '16.8', '18', 0, 3, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 6, '2.8', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(18, '妙可蓝多奶酪棒', 1.3, 13, '自营', '17.6', '18', 0, 3, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 6, '2.3', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(19, '好丽友好多鱼', 1.3, 13, '自营', '12.8', '14.8', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 7, '2.0', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(20, '乐天巧克派12枚', 1.3, 13, '自营', '19.2', '21.0', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 7, '2.1', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(21, '迷你小蛋糕', 1.3, 13, '自营', '7.9', '12', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 7, '3.2', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(22, '奶黄排包', 1.3, 13, '自营', '8.9', '9.6', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 8, '5', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(23, '旺仔小馒头', 1.3, 13, '自营', '8.00', '12.00', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 8, '3.2', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(24, '徐福记凤梨酥', 1.3, 13, '自营', '10.9', '12.00', 0, 4, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 8, '158', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(25, '雪花精制啤酒', 1.3, 13, '自营', '9.90', '12.00', 1, 5, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 17, '89', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(26, '农夫山泉天然水', 1.3, 13, '自营', '5.90', '6.50', 0, 5, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 17, '40', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(27, '可口可乐', 1.3, 13, '自营', '5.20', '6.50', 1, 5, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 18, '43', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(28, '雪碧', 1.3, 13, '自营', '5.20', '6.50', 1, 5, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 18, '35', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(29, '跳绳', 1.3, 13, '自营', '22.00', '25.00', 0, 6, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 9, '23', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(30, '篮球', 1.3, 13, '自营', '89.00', '95.00', 0, 6, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 9, '30', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(31, '足球', 1.3, 13, '自营', '78.00', '85.00', 0, 6, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 10, '23', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(32, '羽毛球', 1.3, 13, '自营', '56.00', '78.00', 0, 6, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 10, '16', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(33, '芭比笔袋', 1.3, 13, '自营', '26.00', '30.00', 0, 7, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 11, '10', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(34, '2B铅笔', 1.3, 13, '自营', '2.80', '3.00', 0, 7, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 11, '2', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(35, '自动卷皮刀', 1.3, 13, '自营', '23.00', '30.00', 0, 7, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 12, '2.6', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(36, '加密日记本', 1.3, 13, '自营', '32.00', '36.00', 0, 7, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 12, '2.6', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(37, '作业本', 1.3, 13, '自营', '6.00', '6.30', 0, 7, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 12, '3', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(38, '妙洁PE保鲜膜盒装', 1.3, 13, '自营', '10.90', '12.90', 0, 8, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 13, '30', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(39, '妙洁保鲜袋点断式200只', 1.3, 13, '自营', '8.80', '9.30', 0, 8, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 13, '19', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(40, '南孚电池5号', 1.3, 13, '自营', '15.80', '15.80', 0, 8, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 14, '15', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(41, '三利慢时光面巾', 1.3, 13, '自营', '19.00', '22.00', 0, 8, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 14, '20', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0),
	(42, '订书针', 1.3, 13, '自营', '2.50', '2.80', 0, 9, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 15, '2.5', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(43, '打印机', 1.3, 13, '自营', '259.00', '280.00', 1, 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 15, '120', 0, 'https://img.dmallcdn.com/20180627/5ca12e58-496d-47fb-8739-611b2992b9ec_800x800L,https://img.dmallcdn.com/20180627/8fbcf82f-78e0-4dbf-a838-e40b087d3734_800x800L,https://img.dmallcdn.com/20180627/0be4abc2-6ea4-4bd1-926a-c350afc93117_800x800L', 0),
	(44, '棒乳胶', 1.3, 13, '自营', '3.50', '3.80', 0, 9, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 16, '2.5', 0, 'https://img.dmallcdn.com/20180611/0b7358d7-dfda-4654-986c-67ab2d3b4701_800x800L,https://img.dmallcdn.com/20180612/cf5cf105-6f63-4101-b079-ef93ee352c3d_800x800L,https://img.dmallcdn.com/20180612/51360d49-a0f7-478f-9819-08762048a423_800x800L', 0),
	(45, '鼠标', 1.3, 13, '自营', '35.00', '38.00', 1, 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L', 16, '20', 0, 'https://img.dmallcdn.com/20170314/dd9a2a68-cf20-415c-a3ba-5c654b3d6000_800x800L,https://img.dmallcdn.com/20150724/6eb9d015-34e2-4b8d-b756-c4fb310aed27_800x800L,https://img.dmallcdn.com/20150724/5aa9b9d4-0224-4c05-ba77-cae4a8bf05cc_800x800L', 0);
/*!40000 ALTER TABLE `productlist` ENABLE KEYS */;

-- Dumping structure for table supermarket.subclass
CREATE TABLE IF NOT EXISTS `subclass` (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `s_title` char(250) NOT NULL,
  `m_id` int(11) NOT NULL,
  PRIMARY KEY (`s_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8 COMMENT='小类';

-- Dumping data for table supermarket.subclass: ~18 rows (大约)
DELETE FROM `subclass`;
/*!40000 ALTER TABLE `subclass` DISABLE KEYS */;
INSERT INTO `subclass` (`s_id`, `s_title`, `m_id`) VALUES
	(1, '新鲜水果', 1),
	(2, '蔬菜豆菇', 1),
	(3, '熟食', 2),
	(4, '速食', 2),
	(5, '牛奶饮品', 3),
	(6, '冰品', 3),
	(7, '休闲小吃', 4),
	(8, '超值小食', 4),
	(9, '体育器材', 6),
	(10, '体育用品', 6),
	(11, '学习工具', 7),
	(12, '学习用品', 7),
	(13, '生活需品', 8),
	(14, '生活用品', 8),
	(15, '办公需品', 9),
	(16, '办公用品', 9),
	(17, '酒水', 5),
	(18, '饮料', 5);
/*!40000 ALTER TABLE `subclass` ENABLE KEYS */;

-- Dumping structure for table supermarket.swiper
CREATE TABLE IF NOT EXISTS `swiper` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `list_img` char(100) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='首页轮播图';

-- Dumping data for table supermarket.swiper: ~3 rows (大约)
DELETE FROM `swiper`;
/*!40000 ALTER TABLE `swiper` DISABLE KEYS */;
INSERT INTO `swiper` (`id`, `list_img`) VALUES
	(1, 'https://img.dmallcdn.com/dshop/201910/c5e62011-1be0-496b-9b1f-752913ba205b_750H'),
	(4, 'https://img.dmallcdn.com/dshop/201910/c5e62011-1be0-496b-9b1f-752913ba205b_750H'),
	(5, 'https://img.dmallcdn.com/dshop/201910/c5e62011-1be0-496b-9b1f-752913ba205b_750H');
/*!40000 ALTER TABLE `swiper` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
