<template>
        <div>
            <div>detail详情：id：{{this.$route.query.id}}</div>
            <el-carousel :interval="3000" allow="always">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{item}}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>
</template>

<script>
export default {

}
</script>

<style>

</style>