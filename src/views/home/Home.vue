<template>
        <div class="home">
            <main>
                <router-view></router-view>
            </main>
            <footer>
                <router-link 
                v-for="(item,index) in footerList" :key="index"
                tag="span"
                :to="item.path"
                >{{item.text}}</router-link>
            </footer>
        </div>
</template>

<script>
export default {
    data(){
        return {
            footerList:[
                {
                    path:"/home/find",
                    text:"发现"
                },
                {
                    path:"/home/gz",
                    text:"关注"
                },
                {
                    path:"/home/msg",
                    text:"消息"
                },
                {
                    path:"/home/my",
                    text:"我的"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .home{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        main{
            flex:1;
            overflow: hidden;
        }
        footer{
            width:100%;
            height: 60px;
            border-top:1px solid #eee;
            display: flex;
            span{
                flex:1;
                text-align: center;
                line-height: 60px;
                &.router-link-active{
                    background:#000;
                    color: white; 
                }
            }
        }
    }
</style>