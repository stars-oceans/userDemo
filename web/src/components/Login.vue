<template>
  <div>
    账号:<input type="text" v-model="username">
    <br>
    密码:<input type="text" v-model="password">
    <br>
    年龄:<input type="text" v-model="age">
    <br>
        <button @click="add">注册</button>
    <button @click="myFind">查询</button>
    <div class="fu" v-for="(item,index) in list" :key="item._id">
      <div class="zi">{{ item.username }} </div>
      <div class="btn">
        <button @click="update">更新</button>
        <button @click="delect(index,item)">删除</button>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      username: '',
      password: '',
      age: 0,
      list: []
    }
  },
  methods: {
    myFind() {
      axios.get('/api/find',{
        params : {
          //想要第 1 页数据, 为两条
          page : 1,
          limit : 20
        }
      }).then((data) => {
        this.list = data.data.data
        console.log(this.list);
      },
        (error) => {
          console.log('error');
        })
    },
    add() {
      axios.post('/api/add', {
        username: this.username,
        password: this.password,
        age: this.age
      }).then(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log('出现错误');
        })
    },
    update() {
      console.log('111');
      axios.post('/api/update/641553b86e4b0c3ec51e212e', {
        username: '杨宏超666666',
        password: '密码',
        age: 1
      }).then((data => {
        console.log(data);
      }))
    },

    delect(index,item) {
      console.log(item._id);
    //  this.list.length =  delete this.list[index];
    console.log(delete this.list[index]);
      axios.get(`/api/delect/${ item._id }`).then((data) => {
        console.log(data);
      })
    }
  }
}
</script>

<style scoped>
.fu{
  display: flex;
  width: 500px;
  height: 30px;
}
.zi{
  flex: 1;
  height: 30px;

}
.btn{
  flex: 1;
  height: 30px;
  
  
}

</style>