// 表层 路由层
var express = require('express');
const UserController = require('../controllers/UserController');
const UserModel = require('../model/UserModel');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // 获取前端的 cookie
  console.log(req.cookies);

  // 设置前端的 cookie
  res.cookie('name', '李四')
  res.send('respond with a resource');
});

// 增加
router.post('/add', UserController.addUser)

// 更新
// 动态路由,获取id
router.post('/update/:myid', UserController.updateUser)

//删除
router.get('/delect/:id', UserController.delectUser)

// 查询
router.get('/find', UserController.findUser)
module.exports = router;
