// 操作数据库
const UserModel = require('../model/UserModel');
const UserService = {
  // 操作数据库  查：
  findUser : (page, limit)=>{
    return UserModel.find({}, ["username", "age"]).sort({ age: 1 }).skip((page - 1) * limit).limit(limit)
  },

  // 操作数据库 添加操作
  addUser: (username, password, age) => {
    return UserModel.create({
      username: username,
      password: password,
      age: age
    })
  },

  // 操作数据库 更新操作
  updateUser: (myid, username, password, age) => {
    // 更新数据
    return UserModel.updateOne(
      { _id: myid },
      { username, password, age }
    )
  },

  // 操作数据库 删除操作
  delectUser: (myid) => {
    return UserModel.deleteOne(
      { _id: myid },
    )
  }
}

module.exports = UserService