<template>
  <div class="denglu">
    <h1>{{ msg }}</h1>
    <h3>登 录</h3>
    <div class="user">账号：
      <input class="input" name="user" placeholder="请输入手机号/邮箱/用户名">
    </div>
    <li class="line"></li>
    <div class="user">密码：
      <input class="input" name="key" placeholder="请输入密码" >
    </div>
    <li class="line"></li>
      <div class="o_o"><input type="checkbox"/> 30天记住我</div>
  <div>
 <ul>    
      <li class="jion"><a class="a" href="#/index">登 录</a></li>
    </ul>
    <ul>    
      <li class="forget"><a href="#/wangji">忘记密码?</a></li>
    </ul>
    <ul>    
      <li class="forget"><a class="d">没有账号?</a> <a href="#/zhuce"> 注册账号</a></li>
    </ul>
  </div>
    
  </div>
 

</template>

<script>

export default {

  data () {
    return {
      msg: '欢 迎 加 入 猫 公 益'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.denglu{background-color: #ffffff;}
h1{font-weight: normal;margin-top: 100px;color: #333333;} 
h3 {color: #fc8d59;margin-bottom: 45px}
ul {
  list-style-type: none;
  padding: 0;
}
.user{font-size: 22px;color: #333333;
margin-left: -110px;margin-top: 25px}
.line{
  display: inline-block;
  margin: 0 10px;margin-bottom: 20px;margin-top: 11px;
  width: 400px;height: 2px;background-color: #999999;
  }
  .o_o{font-size: 12px;color: #fc8d59;margin-left: -260px }
.input{border: 0px;outline:none;font-size: 14px;
color: #999999;margin-left: 45px}
.jion {
  display: inline-block;
  margin: 0 10px;margin-top: 30px;
  width: 400px;height: 60px;background-color: #fc8d59;
  border-radius:5px;font-size: 18px;line-height: 60px;
}
.forget{
  margin-top: 30px
}
.a{
  color: #ffffff;text-decoration: none;

}
.d{
  color: #666666;font-size: 12px
}
a {
  color: #fc8d59;text-decoration: none;

}
</style>
