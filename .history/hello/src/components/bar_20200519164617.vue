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
    '$router'(to,from){
      console.log('监听路由变化');
      console.log(to);
      console.log(from);
    }
  },

  components: {},
  mounted () {
    console.log('测会输是的')
  },

  computed: {},


  methods: {}
}

</script>
<style lang='scss' scoped>
</style>