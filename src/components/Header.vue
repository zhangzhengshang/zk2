<template>
    <div>
        <span v-for="(item,index) in navlist" :key="index">{{item}}</span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            navlist:["推荐"]
        }
    }
}
</script>

<style lang="scss" scoped>
    div{
        flex:1;
        display: flex;
        flex-direction: row;
        span{
            flex:1;
            text-align: center;
            line-height: 60px;
        }
    }
</style>