<template>
    <div>
        <div class="top">
            <Header class="hea"/>
        </div>
        <div class="con">
            <Every 
            v-for="(item,index) in list" :key="index"
            :item="item"
            />
        </div>
    </div>
</template>

<script>
//引入组件
import Header from "../../../components/Header"
import Every from '../../../components/Every'
//引入axios;
import axios from 'axios'
export default {
    data(){
        return{
            //数据
            list:[]
        }
    },
    //注册组件
    components:{
        Header,
        Every
    },
    mounted() {
        axios.get("/api/list").then(res=>{
            this.list=res.data.data;
            console.log(this.list)
        })
    },
    methods: {
        
    },
}
</script>

<style lang="scss" scoped>
    div{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        .top{
            width:60%;
            height: 60px;
            margin:0 auto;
            display: flex;
            flex-direction: row;
            .hea{
                width:30%;
                height: 100%;
            }
        }
        .con{
            flex:1;
            overflow: auto;
            
        }
    }
</style>