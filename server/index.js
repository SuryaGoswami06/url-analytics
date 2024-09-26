import express from 'express'
import 'dotenv/config'
import useragent from 'express-useragent'
import axios from 'axios';
import cors from 'cors'

const app = express();
const port = process.env.PORT || 4000
app.set('trust proxy',true)
const whiteList = [process.env.FRONTEND_DEVELOPMENT_VITE_URL,process.env.FRONTEND_DEVELOPMENT_NGROK_URL]
const corsConfiguration={
    origin:function(origin,callback){
        if(whiteList.indexOf(origin)!==-1){
            callback(null,true)
        }else{
            callback(new Error('not allowed'))
        }
    }
}
app.use(cors(corsConfiguration))

app.get('/get-my-location',(req,res)=>{
    const ua = useragent.parse(req.headers['user-agent'])
    // let locationData = ''
    // console.log(req.ip)
   
    // axios.get(`https://api.apilayer.com/ip_to_location/${req.ip}`,{
    //     headers:{
    //         apikey:process.env.API_LAYER_SECRETKEY
    //     }
    // }).then((res)=>{
    //     locationData = res.data
    // }).catch(err=>console.log(err))

    console.log(req.ip)
    res.json({
        ip:req.ip,
    })
})

app.listen(port,()=>{
    console.log('server is running at port number :'+ port)
})