<template>
    <div>
      <div class="db">

        <ul>
          <router-link to="/"><li><img src="../assets/image/icon_01.png" alt=""></li></router-link>
          <li><h4>登录</h4></li>
          <li><router-link to="/zhuce">快速注册</router-link></li>
        </ul>
      </div>
      <form action="" id="bianse">
        +86:&nbsp;&nbsp;&nbsp;  &nbsp;<input type="text" placeholder="请输入已注册的手机号码"><br>
        <img src="../assets/image/input_bg.png" alt=""><br>
        密码:&nbsp;&nbsp;&nbsp;&nbsp;  <input type="password" placeholder="请输入密码">
        <img src="../assets/image/input_bg.png" alt=""><br>
        <input class="btnss" type="submit" value="登录">
        <a href="">忘记密码</a>
      </form>

    </div>
</template>

<script>
  import "../assets/css/ggys.css";
  import "../assets/css/denglu.css"
    export default {
        name: "denglu"
    }
</script>

<style scoped>

</style>
