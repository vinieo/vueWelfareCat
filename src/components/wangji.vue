<template>
  <div class="wangji">
    <h1>{{ msg }}</h1>
    <h3>修 改 密 码</h3>
    <div class="user">新密码：
      <input class="input2" name="key" placeholder="请设置新密码">
    </div>
    <li class="line"></li>
    <div class="user">新密码：
      <input class="input2" name="key" placeholder="请再次输入新密码">
    </div>
    <li class="line"></li>
    <div class="user">邮箱：
      <input class="input" name="number" placeholder="请输入您注册时使用的手机号/邮箱">
    </div>
    <li class="line"></li>
    <div class="user">验证码：
      <input class="input1" name="test" placeholder="请输入正确的验证码">
      <li class="g"><span class="get">获取验证码</span></li>
    </div>
    <li class="line"></li>
    <div>
 <ul>    
      <li class="enter"><a class="a" href="http://vuex.vuejs.org/">确 认 修 改</a></li>
    </ul>
    <ul>    
      <li class="forget"><a class="d">改变主意，直接</a> <a href="#/denglu"> 登录</a></li>
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
h1{font-weight: normal;margin-top: 30px;color: #333333;} 
h3 {color: #fc8d59;margin-bottom: 45px}
ul {
  list-style-type: none;
  padding: 0;
}
.g{ display: inline-block;margin-right: -110px;
  width: 80px;height: 30px;background-color: #fc8d59;
  border-radius:5px;}
.get{color: #ffffff;
font-size: 14px;
}
.l{
    text-decoration:underline;
    color: #fc8d59;
}
.user{font-size: 22px;color: #333333;
margin-left: -110px;margin-top: 25px}
.line{
  display: inline-block;
  margin: 0 10px;margin-bottom: 20px;margin-top: 11px;
  width: 400px;height: 2px;background-color: #999999;
  }
  .o{font-size: 14px;color: #333333; }
.input{border: 0px;outline:none;font-size: 14px;
color: #999999;margin-left: 45px}
.input2{border: 0px;outline:none;font-size: 14px;
color: #999999;margin-left: 20px;}
.input1{border: 0px;outline:none;font-size: 14px;
color: #999999;margin-left: 25px;margin-right: 20px}
.enter {
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
  color: #fda379;text-decoration: none;

}
</style>
