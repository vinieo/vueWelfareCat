<template>
    <div id="top">
        <div class="top">
            <Ul>
                <li>
                <div class="tt">
                <router-link class="change" to="/index">首页</router-link>
                <a href="#/community" class="change">社区</a>
                <a href="#/diary" class="change">日记</a>
                <a href="#/push" class="change">发布</a>
                <a href="#/me" class="change">我的</a>
                </div>
                <div class="t">
                <a href="#/denglu" class="yi">登录</a>
                <a href="#/zhuce" class="yi">注册</a>
                </div>
                </li>
            </Ul>            
    </div>
    </div>
</template>
<script>


export default {

};
</script>
<style scoped>
    .tt{margin-top: -13px;margin-right: 100px;}
    .t{margin-left:900px;margin-top: -35px;}
    .yi {display: inline-block;
  width: 45px;height: 25px;background-color: #fc8d59;
  font-size: 10px;line-height: 25px;border-radius:10px;
}
.change {
  display:inline-block;margin:-3px;
  width: 60px;height: 30px;background-color: #fc8d59;
  font-size: 14px;line-height: 30px;
}a {
  color: #ffffff;text-decoration: none;

}

</style>

