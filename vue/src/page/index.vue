<template>
<div>
  <index-header></index-header>
  <index-zhong ></index-zhong>
  <index-footer></index-footer>
</div>
</template>

<script>
    import IndexHeader from "../components/index/indexHeader";
    import IndexZhong from "../components/index/indexZhong";
    import IndexFooter from "../components/index/indexFooter";

    export default {
      components: {
        IndexFooter,
        IndexZhong,
        IndexHeader},
      name: "index",

    }


</script>

<style scoped>

</style>
