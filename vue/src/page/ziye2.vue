<template>
<div id="databinding">
  <div class="db">

    <ul>
      <router-link to="/"><li><img src="../assets/image/icon_01.png" alt=""></li></router-link>
      <li><h4>商品分类</h4></li>
      <li><a href="">· · ·</a></li>
    </ul>
  </div>
  <div class="sp">
    <div class="lsp">
      <ul>
        <li class="ni" v-on:click = "show = !show"><img src="../assets/image/8231482485717781.png" alt=""><a >服装鞋包</a></li>
        <li><img src="../assets/image/51011482485911690.png" alt=""><a href="">日用百货</a></li>
        <li><img src="../assets/image/90081482485792728.png" alt=""><a href="">酒水食品</a></li>
        <li><img src="../assets/image/29321482485800990.png" alt=""><a href="">家居建材</a></li>
        <li><img src="../assets/image/29321482485800990.png" alt=""><a href="">家纺居家</a></li>

        <li><img src="../assets/image/44551482485820408.png" alt=""><a href="">母婴用品</a></li>
        <li><img src="../assets/image/33691482485828271.png" alt=""><a href="">护肤彩妆</a></li>
        <li><img src="../assets/image/7451482485837437.png" alt=""><a href="">家电办公</a></li>
        <li><img src="../assets/image/73581482485858424.png" alt=""><a href="">手机数码</a></li>
        <li><img src="../assets/image/42281482485868123.png" alt=""><a href="">珠宝手表</a></li>
        <li><img src="../assets/image/59661482485880931.png" alt=""><a href="">运动户外</a></li>
        <li><img src="../assets/image/71191482485888431.png" alt=""><a href="">文化娱乐</a></li>
        <li><img src="../assets/image/27091482485896753.png" alt=""><a href="">本地生活</a></li>
        <li><img src="../assets/image/93471482485905185.png" alt=""><a href="">工业农业</a></li>
      </ul>
    </div>
    <div class="rsp" v-if="!show">
      <ul>
        <li>男鞋</li>
        <li>女鞋</li>
        <li>男女箱包皮带</li>
        <li>男装</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
  import "../assets/css/ggys.css";
  import "../assets/css/ziye2.css"
    export default {
        name: "ziye2",
      data() {
          return{
            show: true
          }

      }
    }

// window.onload=function () {
//   $(function () {
//     $(".ni").click(function () {
//       $('.rsp').toggle(1000);
//     })
//   })
// }

</script>

<style scoped>

</style>

