<template>
  <div>
  <!-- 头部 -->
  <header>
    <ul id="headers">
      <li class="juju"><img src="../../assets/image/logo.png" alt=""></li>
      <li style="position: relative;"><img src="../../assets/image/icon_04.png" alt=""><input type="text" value="搜索易物商品或者店铺"></li>
      <li id="denglu" ><router-link to="denglu"><img src="../../assets/image/icon_03.png" alt=""><span>登录</span></router-link></li>
    </ul>
  </header>
  </div>
</template>

<script>
  import "../../assets/css/ggys.css";
  import "../../assets/css/index.css"
    export default {
        name: "index-header"
    }
$(function () {
  $(".juju").click(function () {
    alert("欢迎来到易物天下")
  })
})

</script>

<style scoped>

</style>
