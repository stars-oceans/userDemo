// 中间层

const UserModel = require('../model/UserModel');
const UserService = require('../services/UserService');

const UserController = {
  // 查询
  findUser: async (req, res) => {
    // 查询不要密码,并排序
    const { page, limit } = req.query
    //  原来 写法
    /* UserModel.find({}, ["username", "age"]).sort({ age: 1 }).skip((page - 1) * limit).limit(limit).then((data) => {
       console.log(data);
       res.send({
         ok: 1,
         data: data
       })
     }) */

    // TODO: 新写法

    const data = await UserService.findUser(page, limit)
    res.send({
      ok: 1,
      data: data
    })


  },

  // 增加
  addUser: async (req, res) => {
    console.log(req.body);
    const { username, password, age } = req.body
    // 增
    await UserService.addUser(username, password, age)
    res.send('OK')
  },

  // 更新修改
  updateUser: async function (req, res) {
    console.log(req.body);
    console.log('获取路由传过来的id数据', req.params.myid);
    // 获取前端的数据
    const { username, password, age } = req.body
    await UserService.updateUser(req.params.myid, username, password, age)
    res.send({
      ok: 1
    })
  },

  // 删除
  delectUser: async (req, res) => {
    console.log(req.body);
    console.log('获取路由传过来的id数据', req.params.id);

    // 更新数据
    await UserService.delectUser(req.params.id)
    res.send({
      ok: 1,
    })
  },


}

module.exports = UserController