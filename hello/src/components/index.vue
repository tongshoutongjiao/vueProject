<template>
<div>
     <h1>首页{{msg}}</h1>
    <topView/>

</div>

</template>

<script>
import topView from '../components/topView'
import {Manager} from '../utils/index'

export default {
    name:'index',
    components:{
        topView
    },
    data(){
        return {
            msg:'zhl'
        }

    },
    mounted(){
        console.log('查看首页内容样式');
        console.log(Manager);

    },
    methods:{

    }

}


</script>






<style lang="less" scoped>

</style>