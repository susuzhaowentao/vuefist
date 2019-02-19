<template>
    <div>
      <div class="db">

        <ul>
          <router-link to="/denglu"><li><img src="../assets/image/icon_01.png" alt=""></li></router-link>
          <li><h4><a href="">注册</a></h4></li>
          <li><router-link to="/denglu">登录</router-link></li>
        </ul>
      </div>
      <form action="">
        +86:&nbsp;&nbsp;&nbsp;&nbsp;   <input type="number" placeholder="请输入11位手机号码" required><br>
        <img src="../assets/image/input_bg.png" alt=""><br>
        验证码:&nbsp;&nbsp;<input type="text" placeholder="输入验证码" class="yzm" id="txt"><input type="button" value=获取验证码 class="huyzm" id="bttnn">
        <img src="../assets/image/input_bg1.png" alt="" class="imgyz"><br>
        密码:&nbsp;&nbsp;&nbsp;&nbsp;   <input type="password" placeholder="6-20位数字、字母或者符号组成" required>
        <img src="../assets/image/input_bg.png" alt=""><br>
        <input class="btnnn" type="submit" value="注册">
        <a href=""><b>注册即表示同意</b>《易物天下服务协议》</a>
      </form>
    </div>
</template>

<script>
  import "../assets/css/ggys.css";
  import "../assets/css/zhuce.css"
    export default {
        name: "zhuce"
    }
    // $(function () {
    //   window.onload=function(){
    //     var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','0'];
    //     var oBtn=document.getElementById('bttnn');
    //     // var oTxt=document.getElementById('txt');
    //     oBtn.onclick=function randomYZM(){
    //       var str='';
    //       while(str.length<4){
    //         var iNum=parseInt(Math.random()*100)
    //         while(iNum>36){
    //           iNum=parseInt(Math.random()*100)
    //         }
    //         str+=arr[iNum];
    //       }
    //       // oTxt.value=str.toUpperCase();
    //       alert(str.toUpperCase());
    //     }
    //   }
    //
    // })

</script>

<style scoped>

</style>
