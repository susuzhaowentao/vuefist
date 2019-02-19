<template>
<div>
  <!-- 轮播图 -->
  <div class="lbt">

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="lb in json.lbt"> <img :src="lb.tu" ></div>
      </div>
      <!--<div class="swiper-pagination"></div>-->
    </div>


  </div>
  <!-- 列表 -->
  <div class="liebiao">
    <ul class="liebiaoi">
      <a href="" v-for="kk in json.kiss"><li ><img :src="kk.iss"><span>{{kk.ss}}</span></li></a>
    </ul>
    <ul class="liebiaoi">
      <router-link to="/ziye2"><li><img src="../../assets/image/icon_22.png" alt=""><span>商品分类</span></li></router-link>
     <router-link to="/ziye3"><li><img src="../../assets/image/icon_23.png" alt=""><span>易客专区</span></li></router-link>
      <router-link to="/ziye4"><li><img src="../../assets/image/icon_24.png" alt=""><span>快速易物</span></li></router-link>

    </ul>
  </div>
  <div class="imgs"><router-link to="/ziye5"><img src="../../assets/image/b03.png" alt=""></router-link></div>
  <div class="jrgq">
    <ul>
      <li><img src="../../assets/image/icon_17.png" alt=""></li>
      <li><img src="../../assets/image/icon_16.png" alt=""></li>
      <li>
        <div class="lunbo">
          <ul id="uulsl">
            <li v-for="cvb in json.cbb">{{cvb.bbb}}</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
  <!-- 名牌区 -->
  <div class="fgx">
    <img src="../../assets/image/fgx.jpg" alt=""><span>名品区</span><img src="../../assets/image/fgx.jpg" alt="">
  </div>
  <div class="sp1">
    <ul>
      <li v-for="miss in json.misss"><img :src="miss.nsb"></li>
    </ul>
  </div>
  <div class="xsp">
    <ul>
      <li v-for="cx in json.ccc"> <img :src="cx.ii" /></li>
    </ul>
    <ul style="border-top:2px solid #eeeeee">
      <li v-for="cxx in json.cb"> <img :src="cxx.iii" /></li>
    </ul>
  </div>
  <!-- 推荐区 -->
  <div class="fgx">
    <img src="../../assets/image/fgx1.jpg" alt=""><span style="color: #ee7423">推荐区</span><img src="../../assets/image/fgx1.jpg" alt="">
  </div>
  <div class="sp2">
    <ul>
      <li v-for="ser in json.sss"> <img :src="ser.ime" /></li>
    </ul>
    <ul style="border-bottom: 4px solid #ccc;">
      <li v-for="see in json.ssss"><router-link to="sp1"><img :src="see.imm" /></router-link></li>
    </ul>
  </div>
  <div class="bk"></div>
  <!-- 今日换品 -->
  <div class="fgx">
    <img src="../../assets/image/fgx3.jpg" alt=""><span style="color: #333">今日换品</span><img src="../../assets/image/fgx3.jpg" alt="">
  </div>
  <div class="lb"  id="boxxx">
    <ul>
      <li v-for="service in json.sites">
        <img :src="service.image" />
        <a>{{ service.name }}</a>
        <h4>{{service.price}}</h4>
        <span>{{service.active}}</span>
      </li>

    </ul>
  </div>
</div>
</template>

<script>
  import Swiper from 'swiper';
  import "../../assets/css/ggys.css";
  import "../../assets/css/index.css";
  import "../../assets/js/jquery.SuperSlide.2.1.1";
  import "../../assets/node_modules/swiper/dist/css/swiper.css";
  import "../../assets/node_modules/swiper/dist/js/swiper";
  import Jsonn from"../../json/package"

    export default {
        name: "index-zhong",
      // props:["datas"],
      data(){
        return{
          json:Jsonn
        }
      },

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
    setInterval(function () {
      const  id=$("#uulsl");
      const hh=-.25+"rem";
     const ul=$(id);
      const liFirst=ul.find('li:first');
      ul.animate({top:hh}).animate({"top":0},0,function(){
        const clone=liFirst.clone();
        ul.append(clone);
        liFirst.remove();
      })
    },3000)

  })
</script>


<style scoped>

</style>
