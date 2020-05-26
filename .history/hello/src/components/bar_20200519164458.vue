<!--  -->
<template>
  <div>bar</div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
   watch: {
    '$route'(to,from){
      console.log('监听路由变化');
      console.log(to);
      console.log(from);
    }
  },

  components: {},

  computed: {},


  methods: {}
}

</script>
<style lang='scss' scoped>
</style>