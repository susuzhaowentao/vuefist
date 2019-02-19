<template>
    <div>
      <!-- 尾部 -->
      <div class="miss">

        <a href="">登录</a>
        <a href="">注册</a>
        <a href="">反馈</a>
        <a href="">关于我们</a>
      </div>
      <div class="huan"><img src="../../assets/image/icon_06.png" alt=""></div>
      <div class="huan" id="tops"><img src="../../assets/image/top_btn.png" alt=""></div>
      <footer id="footers">
        <ul id="didi">
          <li><img src="../../assets/image/m-app.png" alt=""></li>
          <li><img src="../../assets/image/m-touch.png" alt=""></li>
          <li><img src="../../assets/image/m-pc.png" alt=""></li>
        </ul>

      </footer>
    </div>
</template>

<script>
  import "../../assets/css/ggys.css";
  import "../../assets/css/index.css"
    export default {
        name: "index-footer"
    }

  $(function () {
    //绑定滚动条事件
    //绑定滚动条事件
    $(window).bind("scroll", function () {
      var sTop = $(window).scrollTop();
      var sTop = parseInt(sTop);
      if (sTop >= 800) {
        if (!$("#tops").is(":visible")) {
          try {
            $("#tops").slideDown();
          } catch (e) {
            $("#tops").show();
          }
        }
      }
      else {
        if ($("#tops").is(":visible")) {
          try {
            $("#tops").slideUp();
          } catch (e) {
            $("#tops").hide();
          }
        }
      }
    });
  })
  $(function () {
    $("#tops").click(function() {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    })
  })
</script>

<style scoped>

</style>
