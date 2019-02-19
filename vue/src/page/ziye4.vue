<template>
    <div>
      <header>
        <ul>
          <li id="daohui"><router-link to="/"><img src="../assets/image/icon_01.png" alt=""></router-link></li>
          <li style="position: relative;"><img src="../assets/image/icon_04.png" alt=""><input type="text" value="搜索易物商品或者店铺"></li>
          <li><span>· · ·</span></li>
        </ul>
      </header>
      <div class="lbt">
        <img src="../assets/image/9661482493412137.jpg" alt="">
      </div>
      <div class="liebiao">
        <ul>
          <li><span>母婴用品</span><img src="../assets/image/97221482496250840.png" alt=""></li>
          <li><span>手机数码</span><img src="../assets/image/96641482496346377.png" alt=""></li>
          <li><span>服装鞋包</span><img src="../assets/image/88841482496415696.png" alt=""></li>
          <li><span>家居建材</span><img src="../assets/image/96231482496498519.png" alt=""></li>

        </ul>
      </div>
      <div class="miss">

        <router-link to="/denglu">登录</router-link>
        <router-link to="/zhuce">注册</router-link>
        <a href="">反馈</a>
        <a href="">关于我们</a>
      </div>
      <div class="huan"><img src="../assets/image/icon_06.png" alt=""></div>
      <footer>
        <ul>
          <li><img src="../assets/image/m-app.png" alt=""></li>
          <li><img src="../assets/image/m-touch.png" alt=""></li>
          <li><img src="../assets/image/m-pc.png" alt=""></li>
        </ul>

      </footer>
    </div>
</template>

<script>
  import "../assets/css/ggys.css";
  import "../assets/css/ziye4.css"
    export default {
        name: "ziye4"
    }
</script>

<style scoped>

</style>
