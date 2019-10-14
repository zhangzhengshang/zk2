import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
      {
        path:"/home",
        component:()=>import("./views/home/Home.vue"),
        redirect:"/home/find",
        children:[
            {
              path:"/home/find",
              component:()=>import("./views/home/find/Find.vue"),
            },
            {
              path:"/home/gz",
              component:()=>import("./views/home/gz/Gz.vue")
            },
            {
              path:"/home/msg",
              component:()=>import("./views/home/msg/Msg.vue")
            },
            {
              path:"/home/my",
              component:()=>import("./views/home/my/My.vue")
            }
        ]
      },
      {
        path:"/detail",
        component:()=>import("./views/detail/Detail.vue")
      },
      {
        path:"*",
        redirect:"/home"
      }
  ]
})
