module.exports={
    devServer:{
        open:true,
        before(app){
            app.get("/api/list",(req,res)=>{
                let data=require("./src/mock/data.json");
                res.send({
                    code:200,
                    data:data
                })
            })
        }
    }
}
