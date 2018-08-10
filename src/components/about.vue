<template>
  <div class="about">
    <img class="a" src="../assets/a.png">
    <h1>{{ msg }}</h1>
    <h2>如果你无法简洁表达你的想法，那只能说明你还不够了解它。</h2>
    <h3>—————阿尔伯特·爱因斯坦</h3>
  <div>
    <ul>    
      <li><a href="#/denglu">加入我们</a></li>
      <li><a href="#/index">逛逛社区</a></li>
    </ul>
  </div>
    
  </div>
 

</template>

<script>


name: 'about'
export default {
  data () {
    return {
      msg: '关 于 猫 的 公 益'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.a{width: 200px;height: 50px;
margin-top: 180px;}
.about{background-color: #ffddce;height: 654px;}
h1{font-weight: normal;font-size: 60px;color: #333333;} 
h2 {font-weight: normal;font-size: 20px;color: #333333;}
h3{margin-left: 500px;font-size: 22px;color: #333333;}
ul {
  list-style-type: none;
  padding: 0;

}
li {
  display: inline-block;
  margin: 0 10px;
  width: 200px;height: 60px;background-color: #fc8d59;border-radius:5px;font-size: 18px;
        line-height: 60px;
}
a {
  color: #ffffff;text-decoration: none;

}
</style>
