<template>
    <div id="index">
        <div class="top_ch">
            <ul>
                <li>
                    <div><img class="hi" src="../assets/hi.png"></div>
                    <div><img class="aa" src="../assets/aa.png"></div>
                </li>
            </ul>
        </div>
        <div class="index">
            <h1 class="h1">寻找喵星人</h1>
            <ul>
                <li>
                    <div class="sou">
                        <div class="p">城市<input class="k">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        年龄段<input class="k"></div>
                        <div class="o">性别&nbsp;&nbsp;&nbsp;
                        <input class="gou" type="checkbox">公猫<input class="gou" type="checkbox">母猫<input class="gou" type="checkbox">不明&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        健康状况&nbsp;&nbsp;&nbsp;<input class="gou" type="checkbox">健康<input class="gou" type="checkbox">一般<input class="gou" type="checkbox">较弱<input class="gou" type="checkbox">小疾<input class="gou" type="checkbox">残疾
                        </div>
                        <div class="t">
                        <input class="yi" type="button" value="重置">
                        <input class="yi" type="button" value="搜索">
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
#index{height: 1500px;}
.top_ch{height: 240px;background: #ffddce;margin-top: -55px}
.hi{width: 100px;height: 100px;margin-top: 65px;margin-right: 500px}
.aa{width: 300px;height: 70px;
margin-left:600px}
.h1{color: #666666;font-size: 20px;}
.sou{margin-top: 50px}
.gou{margin: 10px;width: 12px;height: 12px;}
.k{margin: 10px;border-radius: 5px;width: 120px; height: 20px;border: 1px solid #DBDBDB;}
.p{color: #666666;font-size: 14px;margin-right: 570px;}
.t{margin-left:950px;margin-top: -80px;}
    .yi {display:block;color: #fc8d59;margin: 10px;
  width: 45px;height: 25px;background-color: #ffffff;
  font-size: 10px;line-height: 20px;border-radius:5px;
  border: 1px solid #fc8d59
}
.o{color: #666666;font-size: 14px;margin-right: 385px;}
</style>



