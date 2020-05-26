<!--  -->
<template>
  <div>
    {{ userName }}{{ $route.params.id }}
    <div>{{ test }}{{ $route.params.ids }}</div>
    <Foo />
    <Bar />
  </div>
</template>

<script>
   import Foo from '../components/bar'
                          import Bar from '../components/foo'
                 export default {
    name:'user',
  data () {
    return {
        userName:'zhl',
        test:'测试数据'
    };
  },
    beforeRouteUpdate (to,from，next){
        //   查看路由变化
                    console.log(to);
            console.log('及如果')
        console.log('及如果')
            console.log(from)
        next();
      },
  watch:{


  },

  components: {
      Foo,
      Bar
  },

  computed: {},

  mounted() {
      console.log('用户信息');
      console.log(this.userName);
      console.log(this.$route)
  },

  methods: {}
}
</script>
<style lang="scss" scoped></style>
