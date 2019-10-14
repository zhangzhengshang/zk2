<template>
    <div class="zj" @click="detailFn(item.id)">   
        <div>{{item.name}}</div>
        <p><span>{{item.autor}}</span><span>{{item.love}}</span></p>
    </div>
</template>

<script>
export default {
    props:["item"],
    methods: {
        detailFn(id){
            console.log(id)
            this.$router.push({
                path:"/detail",
                query:{
                    id
                }
            })
        }
    },
}
</script>

<style lang="scss" scoped>
    .zj{
        width:48%;
        height: 400px;
        float: left;
    }
</style>