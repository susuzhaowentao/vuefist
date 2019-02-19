<template>
    <div>
      <div class="db">

        <ul>
         <router-link to="/"><li><img src="../assets/image/icon_01.png" alt=""></li></router-link>
          <li><h4>商品详情页</h4></li>
          <li><a href="">· · ·</a></li>
        </ul>
      </div>
      <div class="tuimg">

        <!-- Swiper -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="../assets/image/20151218121230.jpg" alt="" class="imgss"></div>
            <div class="swiper-slide"><img src="../assets/image/20151218121230.jpg" alt="" class="imgss"></div>
            <div class="swiper-slide"><img src="../assets/image/20151218121242.jpg" alt="" class="imgss"></div>
            <div class="swiper-slide"><img src="../assets/image/20154218124208.jpg" alt="" class="imgss"></div>
            <div class="swiper-slide"> <img src="../assets/image/20151218121242.jpg" alt="" class="imgss"></div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>


      </div>
      <div class="jiage">
        <p>迷黛尔水乳套盒    无添加， 强力补水</p>
        <p><span><b>￥198.00</b></span><span>1件起换</span><span>库存10000件</span></p>
      </div>
      <div class="xq"><span>需求：暂无</span></div>
      <div class="anniu">
        <a href=""><img src="../assets/image/1.jpg" alt="">全部商品</a><a href=""><img src="../assets/image/2.jpg" alt="">进入店铺</a>
      </div>
      <div class="tw"><img src="../assets/image/3.jpg" alt="">图文详情<img src="../assets/image/3.jpg" alt=""></div>

      <div class="wenzi">
        <ul>
          <li>米戴尔多元保湿水肌乳 1瓶 含量50Ml</li>
          <li>迷黛尔亲肌柔护嫩颜水 1瓶 含量：60Ml</li>
          <li>功效；轻度保湿，平衡速度酸碱度，收敛毛孔，舒缓修护敏感肌肤</li>
        </ul>
      </div>
      <div class="jt"><img src="../assets/image/74371450420954035.jpg" alt=""></div>

      <div class="wenzi">
        <ul>
          <li>迷黛尔水乳套盒内含  嫩颜水一瓶，保湿水肌乳一瓶</li>
          <li>迷黛尔亲肌柔护嫩颜水 1瓶 含量：60Ml</li>
          <li>功效；轻度保湿，平衡速度酸碱度，收敛毛孔，舒缓修护敏感肌肤</li>
        </ul>
      </div>
      <div class="jt" style="margin-bottom: 0"><img src="../assets/image/50241450421029650 (1).jpg" alt=""></div>
      <div class="jt"><img src="../assets/image/23871450421367772.jpg" alt=""></div>

      <div class="wenzi" style="height: 1.2rem;">
        <ul>
          <li>温馨提示：如需开发票，请留言备注发票抬头</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="dibu">
        <ul>
          <li><img src="../assets/image/shopIcon_03.png" alt="">收藏</li>
          <li><img src="../assets/image/shopIcon_22.png" alt="">电话</li>
          <li><img src="../assets/image/cha_car.png" alt="">购物车</li>
          <li id="asdfghjkl">加入换物车</li>
          <li id="zxcvbnm">立即交换</li>
        </ul>
      </div>



    </div>
</template>

<script>
  import Swiper from 'swiper';
  import "../assets/css/ggys.css";
  import "../assets/css/ziye6.css";
  import "../assets/node_modules/swiper/dist/css/swiper.css";
  import "../assets/node_modules/swiper/dist/js/swiper";

    export default {
        name: "sp1",
      mounted (){
      new Swiper('.swiper-container', {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      }
    }
$(function () {
  $("#asdfghjkl").click(function () {
    alert("请先登录")

  });
  $("#zxcvbnm").click(function () {
    alert("请先登录")
  })
})
</script>

<style scoped>

</style>
