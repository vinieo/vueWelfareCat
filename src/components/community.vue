<template>
<div id="community">
    <div class="top_co">
            <ul>
                <li>
                    <h1 class="tit">喵星人的故事</h1>
                    <a class="jilu">记录喵星人</a>
                    <div><img class="b" src="../assets/b.png"></div>
                </li>
                <li>
                    <h2 class="tit_a">喵星人的成长故事</h2>
                    <div>
                        <div class="pp">城市<input class="k">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        年龄段<input class="k"></div>
                        <div class="oo">性别&nbsp;&nbsp;&nbsp;
                        <input class="g" type="checkbox">公猫<input class="g" type="checkbox">母猫<input class="g" type="checkbox">不明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        健康状况&nbsp;&nbsp;&nbsp;<input class="g" type="checkbox">健康<input class="g" type="checkbox">一般<input class="g" type="checkbox">较弱<input class="g" type="checkbox">小疾<input class="g" type="checkbox">残疾
                        </div>
                        <div class="ta">
                        <input class="y" type="button" value="重置">
                        <input class="y" type="button" value="搜索">
                        </div>
                    </div>
                </li>
            </ul>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style>
#community{height: 1500px;}
.tit{font-size: 18px;color: #333333;margin-right: 600px;margin-top: 50px}
.tit_a{font-size: 18px;color: #333333;margin-right: 570px;margin-top: 25px}
.b{height: 200px;width: 160px;margin-top: -130px;margin-left: 900px}
.jilu {
    display: inline-block;margin-top: 20px;margin-right: 300px;
    width: 160px;height: 45px;
    background-color: #fc8d59;border-radius:5px;
    font-size: 18px;line-height: 45px;
    color: #ffffff;text-decoration: none;
}
.ta{margin-left:950px;margin-top: -80px;}
    .y {display:block;color: #fc8d59;margin: 10px;
  width: 45px;height: 25px;background-color: #ffffff;
  font-size: 10px;line-height: 20px;border-radius:5px;
  border: 1px solid #fc8d59
}
.g{margin: 10px;width: 12px;height: 12px;}
.k{margin: 10px;border-radius: 5px;width: 120px; height: 20px;border: 1px solid #DBDBDB;}
.pp{color:blue;font-size: 14px;margin-right: 400px;}
.oo{color: blue;font-size: 14px;margin-right: 215px;}
</style>
